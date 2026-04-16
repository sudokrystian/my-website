import { create } from "zustand";
import type { BladeDirection, CombatAction, FighterState } from "../logic/types";
import { resolveAttack, applyStaminaCost, regenStamina } from "../logic/combatHelpers";
import {
  ATTACK_STAMINA_COST,
  BLOCK_STAMINA_COST_PER_SEC,
  STAMINA_REGEN_PER_SEC,
  STAGGER_DURATION_MS,
  ATTACK_RECOVERY_MS,
} from "../logic/constants";

type GamePhase = "menu" | "fighting" | "gameover";

export interface GladiusState {
  phase: GamePhase;
  winner: "player" | "opponent" | null;
  player: FighterState;
  opponent: FighterState;
  lastTickTime: number;
  aiLastActionTime: number;

  startGame: () => void;
  resetGame: () => void;
  setPlayerDirection: (dir: BladeDirection) => void;
  playerAttack: () => void;
  playerBlock: () => void;
  playerReleaseBlock: () => void;
  opponentAttack: (dir: BladeDirection) => void;
  opponentBlock: (dir: BladeDirection) => void;
  tick: (now: number) => void;
}

function createFighter(): FighterState {
  return {
    hp: 100,
    maxHp: 100,
    stamina: 100,
    maxStamina: 100,
    durability: 100,
    maxDurability: 100,
    bladeDirection: "vertical",
    action: "idle",
    actionTimestamp: 0,
    staggerEndTime: 0,
  };
}

function applyDamage(fighter: FighterState, damage: number): FighterState {
  return { ...fighter, hp: Math.max(0, fighter.hp - damage) };
}

function applyDurabilityLoss(
  fighter: FighterState,
  loss: number,
): FighterState {
  return {
    ...fighter,
    durability: Math.max(0, fighter.durability - loss),
  };
}

function setAction(
  fighter: FighterState,
  action: CombatAction,
  now: number,
): FighterState {
  return { ...fighter, action, actionTimestamp: now };
}

function stagger(fighter: FighterState, now: number): FighterState {
  return {
    ...fighter,
    action: "staggered",
    actionTimestamp: now,
    staggerEndTime: now + STAGGER_DURATION_MS,
  };
}

export const useGladiusStore = create<GladiusState>((set, get) => ({
  phase: "menu",
  winner: null,
  player: createFighter(),
  opponent: createFighter(),
  lastTickTime: 0,
  aiLastActionTime: 0,

  startGame: () =>
    set({
      phase: "fighting",
      winner: null,
      player: createFighter(),
      opponent: createFighter(),
      lastTickTime: performance.now(),
      aiLastActionTime: performance.now(),
    }),

  resetGame: () =>
    set({
      phase: "menu",
      winner: null,
      player: createFighter(),
      opponent: createFighter(),
      lastTickTime: 0,
      aiLastActionTime: 0,
    }),

  setPlayerDirection: (dir) =>
    set((s) => ({ player: { ...s.player, bladeDirection: dir } })),

  playerAttack: () => {
    const { player, opponent, phase } = get();
    if (phase !== "fighting") return;
    if (player.action === "staggered" || player.action === "attacking") return;
    if (player.stamina < ATTACK_STAMINA_COST) return;

    const now = performance.now();
    const attackingPlayer = {
      ...player,
      action: "attacking" as const,
      actionTimestamp: now,
      stamina: applyStaminaCost(player.stamina, ATTACK_STAMINA_COST),
    };

    const { outcome, damage, durabilityLoss } = resolveAttack(
      attackingPlayer,
      opponent,
    );

    let newOpponent = opponent;
    if (damage > 0) {
      newOpponent = applyDamage(newOpponent, damage);
    }
    if (durabilityLoss > 0) {
      newOpponent = applyDurabilityLoss(newOpponent, durabilityLoss);
    }
    if (outcome === "parried") {
      set({
        player: stagger(attackingPlayer, now),
        opponent: newOpponent,
      });
      return;
    }

    set({ player: attackingPlayer, opponent: newOpponent });

    // Check game over
    if (newOpponent.hp <= 0) {
      set({ phase: "gameover", winner: "player" });
    }
  },

  playerBlock: () => {
    const { player, phase } = get();
    if (phase !== "fighting") return;
    if (player.action === "staggered") return;

    set((s) => ({
      player: setAction(s.player, "blocking", performance.now()),
    }));
  },

  playerReleaseBlock: () => {
    const { player, phase } = get();
    if (phase !== "fighting") return;
    if (player.action !== "blocking") return;

    set((s) => ({
      player: setAction(s.player, "idle", performance.now()),
    }));
  },

  opponentAttack: (dir) => {
    const { opponent, player, phase } = get();
    if (phase !== "fighting") return;
    if (opponent.action === "staggered") return;
    if (opponent.stamina < ATTACK_STAMINA_COST) return;

    const now = performance.now();
    const attackingOpponent = {
      ...opponent,
      bladeDirection: dir,
      action: "attacking" as const,
      actionTimestamp: now,
      stamina: applyStaminaCost(opponent.stamina, ATTACK_STAMINA_COST),
    };

    const { outcome, damage, durabilityLoss } = resolveAttack(
      attackingOpponent,
      player,
    );

    let newPlayer = player;
    if (damage > 0) {
      newPlayer = applyDamage(newPlayer, damage);
    }
    if (durabilityLoss > 0) {
      newPlayer = applyDurabilityLoss(newPlayer, durabilityLoss);
    }
    if (outcome === "parried") {
      set({
        opponent: stagger(attackingOpponent, now),
        player: newPlayer,
        aiLastActionTime: now,
      });
      return;
    }

    set({ opponent: attackingOpponent, player: newPlayer, aiLastActionTime: now });

    if (newPlayer.hp <= 0) {
      set({ phase: "gameover", winner: "opponent" });
    }
  },

  opponentBlock: (dir) => {
    const { opponent, phase } = get();
    if (phase !== "fighting") return;
    if (opponent.action === "staggered") return;

    const now = performance.now();
    set({
      opponent: {
        ...opponent,
        bladeDirection: dir,
        action: "blocking",
        actionTimestamp: now,
      },
      aiLastActionTime: now,
    });
  },

  tick: (now) => {
    const state = get();
    if (state.phase !== "fighting") return;

    const delta = now - state.lastTickTime;
    if (delta <= 0) return;

    let { player, opponent } = state;

    // Recover from attack after ATTACK_RECOVERY_MS
    if (
      player.action === "attacking" &&
      now - player.actionTimestamp > ATTACK_RECOVERY_MS
    ) {
      player = { ...player, action: "idle" };
    }
    if (
      opponent.action === "attacking" &&
      now - opponent.actionTimestamp > ATTACK_RECOVERY_MS
    ) {
      opponent = { ...opponent, action: "idle" };
    }

    // Recover from stagger
    if (player.action === "staggered" && now >= player.staggerEndTime) {
      player = { ...player, action: "idle", staggerEndTime: 0 };
    }
    if (opponent.action === "staggered" && now >= opponent.staggerEndTime) {
      opponent = { ...opponent, action: "idle", staggerEndTime: 0 };
    }

    // Stamina regen when idle
    if (player.action === "idle") {
      player = {
        ...player,
        stamina: regenStamina(
          player.stamina,
          player.maxStamina,
          delta,
          STAMINA_REGEN_PER_SEC,
        ),
      };
    }
    if (opponent.action === "idle") {
      opponent = {
        ...opponent,
        stamina: regenStamina(
          opponent.stamina,
          opponent.maxStamina,
          delta,
          STAMINA_REGEN_PER_SEC,
        ),
      };
    }

    // Stamina drain while blocking
    if (player.action === "blocking") {
      const cost = BLOCK_STAMINA_COST_PER_SEC * (delta / 1000);
      player = {
        ...player,
        stamina: applyStaminaCost(player.stamina, cost),
      };
      if (player.stamina <= 0) {
        player = { ...player, action: "idle" };
      }
    }
    if (opponent.action === "blocking") {
      const cost = BLOCK_STAMINA_COST_PER_SEC * (delta / 1000);
      opponent = {
        ...opponent,
        stamina: applyStaminaCost(opponent.stamina, cost),
      };
      if (opponent.stamina <= 0) {
        opponent = { ...opponent, action: "idle" };
      }
    }

    set({ player, opponent, lastTickTime: now });
  },
}));
