import { useFrame } from "@react-three/fiber";
import { useGladiusStore } from "../store/useGladiusStore";
import { aiDecide } from "../logic/aiController";

const GameLoop = () => {
  useFrame(() => {
    const state = useGladiusStore.getState();
    if (state.phase !== "fighting") return;

    const now = performance.now();
    state.tick(now);

    // AI decision
    const decision = aiDecide(
      state.opponent,
      state.player,
      state.aiLastActionTime,
      now,
    );

    if (decision) {
      if (decision.type === "attack") {
        state.opponentAttack(decision.direction);
      } else if (decision.type === "block") {
        state.opponentBlock(decision.direction);
      }
    }
  });

  return null;
};

export default GameLoop;
