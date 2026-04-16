import { useGladiusStore } from "../store/useGladiusStore";

const GameOverScreen = () => {
  const winner = useGladiusStore((s) => s.winner);
  const phase = useGladiusStore((s) => s.phase);
  const resetGame = useGladiusStore((s) => s.resetGame);
  const startGame = useGladiusStore((s) => s.startGame);

  if (phase !== "gameover") return null;

  const isVictory = winner === "player";

  return (
    <div className="gladius-gameover-overlay">
      <div className="gladius-gameover-card">
        <h2 className={isVictory ? "gladius-victory" : "gladius-defeat"}>
          {isVictory ? "Victory!" : "Defeat"}
        </h2>
        <p>
          {isVictory
            ? "Your opponent has fallen."
            : "You have been defeated."}
        </p>
        <div className="gladius-gameover-buttons">
          <button className="gladius-btn gladius-btn-primary" onClick={startGame}>
            Play Again
          </button>
          <button className="gladius-btn" onClick={resetGame}>
            Main Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
