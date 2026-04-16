import type { BladeDirection, CombatOutcome, FighterState } from "./types";
import {
  BASE_DAMAGE,
  PARRY_WINDOW_MS,
  DURABILITY_LOSS_ON_BLOCK,
  DURABILITY_LOSS_ON_PARRY,
  WEAPON_BREAK_DAMAGE_MULTIPLIER,
} from "./constants";

// Perpendicular pairs — each entry means "A blocks B perfectly"
const PERPENDICULAR_PAIRS: [BladeDirection, BladeDirection][] = [
  ["vertical", "horizontal"],
  ["horizontal", "vertical"],
  ["diagonal-left", "diagonal-right"],
  ["diagonal-right", "diagonal-left"],
];

/**
 * Returns damage reduction factor:
 *   1.0 = perpendicular (full block)
 *   0.5 = adjacent (partial block)
 *   0.0 = parallel (no block)
 */
export function getBlockReduction(
  attackDir: BladeDirection,
  blockDir: BladeDirection,
): number {
  if (attackDir === blockDir) return 0.0;

  const isPerpendicular = PERPENDICULAR_PAIRS.some(
    ([a, b]) => a === attackDir && b === blockDir,
  );

  return isPerpendicular ? 1.0 : 0.5;
}

/**
 * Checks if block timing qualifies as a parry.
 */
export function isParry(
  blockTimestamp: number,
  attackTimestamp: number,
  parryWindowMs: number = PARRY_WINDOW_MS,
): boolean {
  return Math.abs(blockTimestamp - attackTimestamp) <= parryWindowMs;
}

/**
 * Resolves an attack against a defender.
 */
export function resolveAttack(
  attacker: FighterState,
  defender: FighterState,
): { outcome: CombatOutcome; damage: number; durabilityLoss: number } {
  // Defender not blocking — clean hit
  if (defender.action !== "blocking") {
    return { outcome: "hit", damage: BASE_DAMAGE, durabilityLoss: 0 };
  }

  // Defender is blocking — check if parry
  if (isParry(defender.actionTimestamp, attacker.actionTimestamp)) {
    return {
      outcome: "parried",
      damage: 0,
      durabilityLoss: DURABILITY_LOSS_ON_PARRY,
    };
  }

  // Regular block — check direction
  const reduction = getBlockReduction(
    attacker.bladeDirection,
    defender.bladeDirection,
  );

  if (reduction >= 1.0) {
    return {
      outcome: "blocked",
      damage: 0,
      durabilityLoss: DURABILITY_LOSS_ON_BLOCK,
    };
  }

  if (reduction > 0) {
    return {
      outcome: "partial-block",
      damage: Math.round(BASE_DAMAGE * (1 - reduction)),
      durabilityLoss: Math.round(DURABILITY_LOSS_ON_BLOCK * 0.5),
    };
  }

  // Parallel block — fails completely
  return { outcome: "hit", damage: BASE_DAMAGE, durabilityLoss: 0 };
}

/**
 * Calculates actual damage, accounting for broken weapon bonus.
 */
export function calcDamage(
  baseDamage: number,
  defenderDurability: number,
): number {
  if (defenderDurability <= 0) {
    return Math.round(baseDamage * WEAPON_BREAK_DAMAGE_MULTIPLIER);
  }
  return baseDamage;
}

export function applyStaminaCost(
  currentStamina: number,
  cost: number,
): number {
  return Math.max(0, currentStamina - cost);
}

export function regenStamina(
  currentStamina: number,
  maxStamina: number,
  deltaMs: number,
  regenRate: number,
): number {
  return Math.min(maxStamina, currentStamina + regenRate * (deltaMs / 1000));
}

/**
 * Maps mouse position relative to game container center to a blade direction.
 */
export function mouseToDirection(
  clientX: number,
  clientY: number,
  rect: DOMRect,
): BladeDirection {
  const dx = clientX - (rect.left + rect.width / 2);
  const dy = clientY - (rect.top + rect.height / 2);
  const deg = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;

  // 4 sectors of 90 degrees each, offset by 45 so "up" = vertical
  if (deg >= 315 || deg < 45) return "horizontal";
  if (deg >= 45 && deg < 135) return "vertical";
  if (deg >= 135 && deg < 225) return "horizontal";
  return "vertical";
}

/**
 * More precise 4-way mapping including diagonals.
 * Splits the circle into 8 octants of 45 degrees each.
 */
export function mouseToDirection4Way(
  clientX: number,
  clientY: number,
  rect: DOMRect,
): BladeDirection {
  const dx = clientX - (rect.left + rect.width / 2);
  const dy = clientY - (rect.top + rect.height / 2);
  const deg = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;

  if (deg >= 337.5 || deg < 22.5) return "horizontal";
  if (deg >= 22.5 && deg < 67.5) return "diagonal-right";
  if (deg >= 67.5 && deg < 112.5) return "vertical";
  if (deg >= 112.5 && deg < 157.5) return "diagonal-left";
  if (deg >= 157.5 && deg < 202.5) return "horizontal";
  if (deg >= 202.5 && deg < 247.5) return "diagonal-right";
  if (deg >= 247.5 && deg < 292.5) return "vertical";
  return "diagonal-left";
}
