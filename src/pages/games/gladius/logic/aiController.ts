import type { BladeDirection, FighterState } from "./types";
import {
  AI_ATTACK_INTERVAL_MIN_MS,
  AI_ATTACK_INTERVAL_MAX_MS,
  AI_BLOCK_CHANCE,
} from "./constants";

const DIRECTIONS: BladeDirection[] = [
  "vertical",
  "horizontal",
  "diagonal-left",
  "diagonal-right",
];

export type AiDecision =
  | { type: "attack"; direction: BladeDirection }
  | { type: "block"; direction: BladeDirection }
  | null;

/**
 * Decides the AI's next action. Returns null if no action this tick.
 * Pure function — RNG is injectable for testing.
 */
export function aiDecide(
  opponent: FighterState,
  _player: FighterState,
  lastActionTime: number,
  now: number,
  rng: () => number = Math.random,
): AiDecision {
  // Can't act while staggered
  if (opponent.action === "staggered" && now < opponent.staggerEndTime) {
    return null;
  }

  // Can't act if no stamina
  if (opponent.stamina <= 0) {
    return null;
  }

  // Cooldown between actions
  const cooldown =
    AI_ATTACK_INTERVAL_MIN_MS +
    rng() * (AI_ATTACK_INTERVAL_MAX_MS - AI_ATTACK_INTERVAL_MIN_MS);

  if (now - lastActionTime < cooldown) {
    return null;
  }

  const direction = DIRECTIONS[Math.floor(rng() * DIRECTIONS.length)];

  // 30% chance to block instead of attack
  if (rng() < AI_BLOCK_CHANCE) {
    return { type: "block", direction };
  }

  return { type: "attack", direction };
}
