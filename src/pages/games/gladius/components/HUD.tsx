import { useGladiusStore } from "../store/useGladiusStore";
import type { FighterState } from "../logic/types";

const StatBar = ({
  value,
  max,
  color,
  label,
}: {
  value: number;
  max: number;
  color: string;
  label: string;
}) => (
  <div className="gladius-stat-bar">
    <span className="gladius-stat-label">{label}</span>
    <div className="gladius-bar-track">
      <div
        className="gladius-bar-fill"
        style={{
          width: `${(value / max) * 100}%`,
          backgroundColor: color,
        }}
      />
    </div>
    <span className="gladius-stat-value">
      {Math.round(value)}/{max}
    </span>
  </div>
);

const FighterStats = ({
  fighter,
  label,
}: {
  fighter: FighterState;
  label: string;
}) => (
  <div className="gladius-fighter-stats">
    <div className="gladius-fighter-label">{label}</div>
    <StatBar value={fighter.hp} max={fighter.maxHp} color="#e04040" label="HP" />
    <StatBar
      value={fighter.stamina}
      max={fighter.maxStamina}
      color="#00ff99"
      label="STA"
    />
    <StatBar
      value={fighter.durability}
      max={fighter.maxDurability}
      color="#5fb2e8"
      label="DUR"
    />
  </div>
);

const DirectionIndicator = () => {
  const direction = useGladiusStore((s) => s.player.bladeDirection);
  const action = useGladiusStore((s) => s.player.action);

  return (
    <div className="gladius-direction-indicator">
      <span className="gladius-direction-text">{direction}</span>
      <span className="gladius-action-text">{action}</span>
    </div>
  );
};

const HUD = () => {
  const player = useGladiusStore((s) => s.player);
  const opponent = useGladiusStore((s) => s.opponent);

  return (
    <div className="gladius-hud">
      <div className="gladius-hud-top">
        <FighterStats fighter={opponent} label="Opponent" />
      </div>
      <div className="gladius-hud-bottom">
        <FighterStats fighter={player} label="You" />
        <DirectionIndicator />
      </div>
    </div>
  );
};

export default HUD;
