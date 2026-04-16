import { aiDecide } from "./aiController";
import type { FighterState } from "./types";
import { AI_ATTACK_INTERVAL_MIN_MS } from "./constants";

function createFighter(overrides?: Partial<FighterState>): FighterState {
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
    ...overrides,
  };
}

describe("aiDecide", () => {
  it("returns null when staggered", () => {
    const opponent = createFighter({
      action: "staggered",
      staggerEndTime: 5000,
    });
    const result = aiDecide(opponent, createFighter(), 0, 3000);
    expect(result).toBeNull();
  });

  it("returns null when stamina is 0", () => {
    const opponent = createFighter({ stamina: 0 });
    const result = aiDecide(opponent, createFighter(), 0, 5000);
    expect(result).toBeNull();
  });

  it("returns null during cooldown", () => {
    const now = 1000;
    const lastAction = 500;
    // RNG returns 0 -> cooldown = AI_ATTACK_INTERVAL_MIN_MS (1500ms)
    // elapsed = 500ms < 1500ms -> should return null
    const result = aiDecide(
      createFighter(),
      createFighter(),
      lastAction,
      now,
      () => 0,
    );
    expect(result).toBeNull();
  });

  it("returns attack when cooldown expired and rng > block chance", () => {
    const now = 5000;
    const lastAction = 0;
    // First rng call: cooldown calc (0 -> min interval)
    // Second rng call: direction (0 -> index 0 = "vertical")
    // Third rng call: block chance (0.5 > 0.3 -> attack)
    let call = 0;
    const rng = () => {
      call++;
      if (call === 1) return 0; // cooldown = minimum
      if (call === 2) return 0; // direction = vertical
      return 0.5; // > 0.3 -> attack
    };
    const result = aiDecide(createFighter(), createFighter(), lastAction, now, rng);
    expect(result).toEqual({ type: "attack", direction: "vertical" });
  });

  it("returns block when rng < block chance", () => {
    const now = 5000;
    let call = 0;
    const rng = () => {
      call++;
      if (call === 1) return 0;
      if (call === 2) return 0.5; // direction index 2 = diagonal-left
      return 0.1; // < 0.3 -> block
    };
    const result = aiDecide(createFighter(), createFighter(), 0, now, rng);
    expect(result).toEqual({ type: "block", direction: "diagonal-left" });
  });

  it("acts after stagger ends", () => {
    const opponent = createFighter({
      action: "staggered",
      staggerEndTime: 2000,
    });
    // Now is past stagger end
    let call = 0;
    const rng = () => {
      call++;
      if (call === 1) return 0;
      if (call === 2) return 0;
      return 0.5;
    };
    const result = aiDecide(opponent, createFighter(), 0, 3000, rng);
    expect(result).not.toBeNull();
  });

  it("respects cooldown range with high rng", () => {
    const now = AI_ATTACK_INTERVAL_MIN_MS + 100;
    // rng = 1.0 -> cooldown = max interval (3000ms)
    // elapsed = ~1600ms < 3000ms -> null
    const result = aiDecide(
      createFighter(),
      createFighter(),
      0,
      now,
      () => 1,
    );
    expect(result).toBeNull();
  });
});
