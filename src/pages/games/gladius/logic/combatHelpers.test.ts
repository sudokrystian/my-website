import {
  getBlockReduction,
  isParry,
  resolveAttack,
  applyStaminaCost,
  regenStamina,
  mouseToDirection4Way,
} from "./combatHelpers";
import type { FighterState } from "./types";
import { BASE_DAMAGE, DURABILITY_LOSS_ON_BLOCK } from "./constants";

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

describe("getBlockReduction", () => {
  it("returns 1.0 for perpendicular: vertical attack, horizontal block", () => {
    expect(getBlockReduction("vertical", "horizontal")).toBe(1.0);
  });

  it("returns 1.0 for perpendicular: horizontal attack, vertical block", () => {
    expect(getBlockReduction("horizontal", "vertical")).toBe(1.0);
  });

  it("returns 1.0 for perpendicular: diagonal-left attack, diagonal-right block", () => {
    expect(getBlockReduction("diagonal-left", "diagonal-right")).toBe(1.0);
  });

  it("returns 1.0 for perpendicular: diagonal-right attack, diagonal-left block", () => {
    expect(getBlockReduction("diagonal-right", "diagonal-left")).toBe(1.0);
  });

  it("returns 0.0 for parallel: same direction", () => {
    expect(getBlockReduction("vertical", "vertical")).toBe(0.0);
    expect(getBlockReduction("horizontal", "horizontal")).toBe(0.0);
    expect(getBlockReduction("diagonal-left", "diagonal-left")).toBe(0.0);
    expect(getBlockReduction("diagonal-right", "diagonal-right")).toBe(0.0);
  });

  it("returns 0.5 for adjacent directions", () => {
    expect(getBlockReduction("vertical", "diagonal-left")).toBe(0.5);
    expect(getBlockReduction("vertical", "diagonal-right")).toBe(0.5);
    expect(getBlockReduction("horizontal", "diagonal-left")).toBe(0.5);
    expect(getBlockReduction("horizontal", "diagonal-right")).toBe(0.5);
  });
});

describe("isParry", () => {
  it("returns true when block is within parry window", () => {
    expect(isParry(1000, 1100, 150)).toBe(true);
  });

  it("returns true at exact boundary", () => {
    expect(isParry(1000, 1150, 150)).toBe(true);
  });

  it("returns false when block is outside parry window", () => {
    expect(isParry(1000, 1200, 150)).toBe(false);
  });

  it("works when block comes before attack", () => {
    expect(isParry(1100, 1000, 150)).toBe(true);
  });
});

describe("resolveAttack", () => {
  it("returns hit when defender is idle", () => {
    const attacker = createFighter({ action: "attacking", bladeDirection: "vertical" });
    const defender = createFighter({ action: "idle" });
    const result = resolveAttack(attacker, defender);
    expect(result.outcome).toBe("hit");
    expect(result.damage).toBe(BASE_DAMAGE);
  });

  it("returns blocked for perpendicular block", () => {
    const attacker = createFighter({
      action: "attacking",
      bladeDirection: "vertical",
      actionTimestamp: 1000,
    });
    const defender = createFighter({
      action: "blocking",
      bladeDirection: "horizontal",
      actionTimestamp: 500,
    });
    const result = resolveAttack(attacker, defender);
    expect(result.outcome).toBe("blocked");
    expect(result.damage).toBe(0);
    expect(result.durabilityLoss).toBe(DURABILITY_LOSS_ON_BLOCK);
  });

  it("returns parried when block is within parry window", () => {
    const now = 1000;
    const attacker = createFighter({
      action: "attacking",
      bladeDirection: "vertical",
      actionTimestamp: now,
    });
    const defender = createFighter({
      action: "blocking",
      bladeDirection: "horizontal",
      actionTimestamp: now - 100,
    });
    const result = resolveAttack(attacker, defender);
    expect(result.outcome).toBe("parried");
    expect(result.damage).toBe(0);
    expect(result.durabilityLoss).toBe(0);
  });

  it("returns partial-block for adjacent directions", () => {
    const attacker = createFighter({
      action: "attacking",
      bladeDirection: "vertical",
      actionTimestamp: 1000,
    });
    const defender = createFighter({
      action: "blocking",
      bladeDirection: "diagonal-left",
      actionTimestamp: 500,
    });
    const result = resolveAttack(attacker, defender);
    expect(result.outcome).toBe("partial-block");
    expect(result.damage).toBe(Math.round(BASE_DAMAGE * 0.5));
  });

  it("returns hit for parallel block", () => {
    const attacker = createFighter({
      action: "attacking",
      bladeDirection: "vertical",
      actionTimestamp: 1000,
    });
    const defender = createFighter({
      action: "blocking",
      bladeDirection: "vertical",
      actionTimestamp: 500,
    });
    const result = resolveAttack(attacker, defender);
    expect(result.outcome).toBe("hit");
    expect(result.damage).toBe(BASE_DAMAGE);
  });
});

describe("applyStaminaCost", () => {
  it("subtracts cost from stamina", () => {
    expect(applyStaminaCost(100, 20)).toBe(80);
  });

  it("clamps to 0", () => {
    expect(applyStaminaCost(10, 20)).toBe(0);
  });
});

describe("regenStamina", () => {
  it("regenerates based on delta time", () => {
    // 12 per second, 500ms delta = +6
    expect(regenStamina(50, 100, 500, 12)).toBeCloseTo(56);
  });

  it("caps at max", () => {
    expect(regenStamina(95, 100, 1000, 12)).toBe(100);
  });
});

describe("mouseToDirection4Way", () => {
  const rect = { left: 0, top: 0, width: 200, height: 200 } as DOMRect;

  it("returns horizontal for right side", () => {
    expect(mouseToDirection4Way(190, 100, rect)).toBe("horizontal");
  });

  it("returns horizontal for left side", () => {
    expect(mouseToDirection4Way(10, 100, rect)).toBe("horizontal");
  });

  it("returns vertical for bottom", () => {
    expect(mouseToDirection4Way(100, 190, rect)).toBe("vertical");
  });

  it("returns vertical for top", () => {
    expect(mouseToDirection4Way(100, 10, rect)).toBe("vertical");
  });

  it("returns diagonal-right for bottom-right", () => {
    expect(mouseToDirection4Way(170, 170, rect)).toBe("diagonal-right");
  });

  it("returns diagonal-left for top-right", () => {
    expect(mouseToDirection4Way(170, 30, rect)).toBe("diagonal-left");
  });
});
