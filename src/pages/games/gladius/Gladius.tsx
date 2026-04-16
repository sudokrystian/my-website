import { useCallback, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import PageMeta from "../../../components/page-meta/PageMeta";
import Arena from "./components/Arena";
import Sword from "./components/Sword";
import GameLoop from "./components/GameLoop";
import HUD from "./components/HUD";
import GameOverScreen from "./components/GameOverScreen";
import { useGladiusStore } from "./store/useGladiusStore";
import { mouseToDirection4Way } from "./logic/combatHelpers";
import "./Gladius.scss";

const Gladius = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phase = useGladiusStore((s) => s.phase);
  const playerDir = useGladiusStore((s) => s.player.bladeDirection);
  const playerAction = useGladiusStore((s) => s.player.action);
  const opponentDir = useGladiusStore((s) => s.opponent.bladeDirection);
  const opponentAction = useGladiusStore((s) => s.opponent.action);
  const startGame = useGladiusStore((s) => s.startGame);
  const setPlayerDirection = useGladiusStore((s) => s.setPlayerDirection);
  const playerAttack = useGladiusStore((s) => s.playerAttack);
  const playerBlock = useGladiusStore((s) => s.playerBlock);
  const playerReleaseBlock = useGladiusStore((s) => s.playerReleaseBlock);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (phase !== "fighting" || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dir = mouseToDirection4Way(e.clientX, e.clientY, rect);
      setPlayerDirection(dir);
    },
    [phase, setPlayerDirection],
  );

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (phase !== "fighting") return;
      if (e.button === 0) playerAttack();
      if (e.button === 2) playerBlock();
    },
    [phase, playerAttack, playerBlock],
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (e.button === 2) playerReleaseBlock();
    },
    [playerReleaseBlock],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (phase !== "fighting") return;
      if (e.key === "Shift") playerBlock();
    },
    [phase, playerBlock],
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Shift") playerReleaseBlock();
    },
    [playerReleaseBlock],
  );

  const handleContextMenu = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleContextMenu,
    handleKeyDown,
    handleKeyUp,
  ]);

  return (
    <div className="gladius-root" ref={containerRef}>
      <PageMeta
        title="Gladius"
        description="Gladius: Underworld & Arena — a 3D sword-fighting duel. Control your blade with the mouse."
      />

      {phase === "menu" && (
        <div className="gladius-menu-overlay">
          <div className="gladius-menu-card">
            <h2>Gladius</h2>
            <p className="gladius-subtitle">Underworld & Arena</p>
            <div className="gladius-controls-info">
              <p><b>Mouse</b> — aim blade direction</p>
              <p><b>Left click</b> — attack</p>
              <p><b>Right click / Shift</b> — block</p>
              <p>Block perpendicular to the attack to deflect!</p>
            </div>
            <button className="gladius-btn gladius-btn-primary" onClick={startGame}>
              Fight!
            </button>
          </div>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 50 }}
        shadows
        style={{ background: "linear-gradient(135deg, #212326, #205081)" }}
      >
        <Arena />
        <Sword
          position={[-0.4, 0.5, 1.5]}
          direction={playerDir}
          action={playerAction}
        />
        <Sword
          position={[0.4, 0.5, -0.5]}
          direction={opponentDir}
          action={opponentAction}
          mirror
        />
        {phase === "fighting" && <GameLoop />}
      </Canvas>

      {phase === "fighting" && <HUD />}
      <GameOverScreen />
    </div>
  );
};

export default Gladius;
