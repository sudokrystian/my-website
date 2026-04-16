import { useMemo } from "react";
import "./falling-blocks.scss";

// Tetromino shapes as grid templates (1 = filled cell)
const SHAPES = [
  { grid: [[1, 1, 1, 1]], cols: 4, rows: 1 }, // I
  { grid: [[1, 1], [1, 1]], cols: 2, rows: 2 }, // O
  { grid: [[0, 1, 0], [1, 1, 1]], cols: 3, rows: 2 }, // T
  { grid: [[1, 0, 0], [1, 1, 1]], cols: 3, rows: 2 }, // L
  { grid: [[0, 0, 1], [1, 1, 1]], cols: 3, rows: 2 }, // J
  { grid: [[1, 1, 0], [0, 1, 1]], cols: 2, rows: 2 }, // S (narrower visual)
  { grid: [[0, 1, 1], [1, 1, 0]], cols: 2, rows: 2 }, // Z (narrower visual)
];

// Colors from the site palette: tetris colors + primary/accent
const COLORS = [
  "#00f0f0", // I cyan
  "#ffbf00", // O yellow
  "#8000ff", // T purple
  "#ff8000", // L orange
  "#0000ff", // J blue
  "#00ff00", // S green
  "#ff0000", // Z red
  "#205081", // site primary
  "#36618d", // site accent
];

const CELL_SIZE = 18;
const BLOCK_COUNT = 18;

interface Block {
  shapeIndex: number;
  colorIndex: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  opacity: number;
}

function generateBlocks(): Block[] {
  const blocks: Block[] = [];
  for (let i = 0; i < BLOCK_COUNT; i++) {
    blocks.push({
      shapeIndex: Math.floor(Math.random() * SHAPES.length),
      colorIndex: Math.floor(Math.random() * COLORS.length),
      left: Math.random() * 100,
      delay: Math.random() * -30,
      duration: 12 + Math.random() * 18,
      rotation: Math.floor(Math.random() * 4) * 90,
      opacity: 0.08 + Math.random() * 0.14,
    });
  }
  return blocks;
}

const FallingBlocks = () => {
  const blocks = useMemo(() => generateBlocks(), []);

  return (
    <div className="falling-blocks-wrapper">
      {blocks.map((block, i) => {
        const shape = SHAPES[block.shapeIndex];
        const color = COLORS[block.colorIndex];
        return (
          <div
            key={i}
            className="falling-block"
            style={{
              left: `${block.left}%`,
              animationDelay: `${block.delay}s`,
              animationDuration: `${block.duration}s`,
              transform: `rotate(${block.rotation}deg)`,
              opacity: block.opacity,
            }}
          >
            <div
              className="tetromino-grid"
              style={{
                gridTemplateColumns: `repeat(${shape.cols}, ${CELL_SIZE}px)`,
              }}
            >
              {shape.grid.flat().map((cell, ci) => (
                <div
                  key={ci}
                  className="tetromino-cell"
                  style={{
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                    backgroundColor: cell ? color : "transparent",
                    borderRadius: cell ? 3 : 0,
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FallingBlocks;
