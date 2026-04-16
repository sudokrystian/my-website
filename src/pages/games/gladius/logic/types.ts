export type BladeDirection =
  | "vertical"
  | "horizontal"
  | "diagonal-left"
  | "diagonal-right";

export type CombatAction =
  | "idle"
  | "attacking"
  | "blocking"
  | "staggered"
  | "recovering";

export type CombatOutcome = "hit" | "blocked" | "partial-block" | "parried";

export interface FighterState {
  hp: number;
  maxHp: number;
  stamina: number;
  maxStamina: number;
  durability: number;
  maxDurability: number;
  bladeDirection: BladeDirection;
  action: CombatAction;
  actionTimestamp: number;
  staggerEndTime: number;
}
