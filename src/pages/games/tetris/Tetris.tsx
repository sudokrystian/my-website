import React, { useEffect, useRef, useState } from "react";
import "./Tetris.scss";

// --- Game constants
const ROWS = 20;
const COLS = 10;
const INTERVAL = 500; // ms drop speed

// --- Tetromino shapes
const TETROMINOS = [
  [[1, 1, 1, 1]], // I
  [
    [2, 2],
    [2, 2],
  ], // O
  [
    [0, 3, 0],
    [3, 3, 3],
  ], // T
  [
    [4, 0, 0],
    [4, 4, 4],
  ], // L
  [
    [0, 0, 5],
    [5, 5, 5],
  ], // J
  [
    [6, 6, 0],
    [0, 6, 6],
  ], // S
  [
    [0, 7, 7],
    [7, 7, 0],
  ], // Z
];

// --- Helper functions
const randomTetromino = () =>
  TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];

const emptyBoard = () =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(0));

const collide = (
  board: number[][],
  shape: number[][],
  pos: { x: number; y: number }
) => {
  for (let y = 0; y < shape.length; ++y) {
    for (let x = 0; x < shape[0].length; ++x) {
      if (
        shape[y][x] &&
        (board[y + pos.y] && board[y + pos.y][x + pos.x]) !== 0
      ) {
        return true;
      }
    }
  }
  return false;
};

const rotate = (matrix: number[][]) =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]).reverse());

// --- Main component
const Tetris: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(emptyBoard());
  const [shape, setShape] = useState<number[][]>(randomTetromino());
  const [pos, setPos] = useState({ x: 3, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Drop logic
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      move(0, 1);
    }, INTERVAL);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [shape, pos, board, gameOver]);

  // Handle keyboard input
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameOver) return;
      if (e.key === "ArrowLeft") move(-1, 0);
      if (e.key === "ArrowRight") move(1, 0);
      if (e.key === "ArrowDown") move(0, 1);
      if (e.key === "ArrowUp") rotateShape();
      if (e.key === " ") drop();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [shape, pos, board, gameOver]);

  // --- Movement, Rotation, Drop
  const merge = (customBoard = board) => {
    const merged = customBoard.map((row) => [...row]);
    for (let y = 0; y < shape.length; ++y) {
      for (let x = 0; x < shape[0].length; ++x) {
        if (shape[y][x]) merged[pos.y + y][pos.x + x] = shape[y][x];
      }
    }
    return merged;
  };

const move = (dx: number, dy: number) => {
  const newPos = { x: pos.x + dx, y: pos.y + dy };

  if (!collide(board, shape, newPos)) {
    setPos(newPos);
  } else if (dy) {
    // Piece lands
    const mergedBoard = merge();

    // Clear full rows and calculate score
    let linesCleared = 0;
    const filtered = mergedBoard.filter(row => {
      const isFull = row.every(cell => cell);
      if (isFull) linesCleared++;
      return !isFull;
    });
    while (filtered.length < ROWS) filtered.unshift(Array(COLS).fill(0));
    setBoard(filtered);

    // Score: 100 points per cleared row (customize if you want)
    if (linesCleared > 0) setScore(score + linesCleared * 100);

    // Next piece
    const nextShape = randomTetromino();
    const startPos = { x: 3, y: 0 };
    if (collide(filtered, nextShape, startPos)) {
      setGameOver(true);
    } else {
      setShape(nextShape);
      setPos(startPos);
    }
  }
};

  const rotateShape = () => {
    const rotated = rotate(shape);
    if (!collide(board, rotated, pos)) setShape(rotated);
  };

  const drop = () => {
    let newY = pos.y;
    while (!collide(board, shape, { x: pos.x, y: newY + 1 })) {
      newY += 1;
    }
    setPos({ ...pos, y: newY });
    move(0, 1); // lock the piece
  };

  // --- Touch controls for mobile
  const handleMobileMove = (dir: "left" | "right" | "down" | "rotate") => {
    if (dir === "left") move(-1, 0);
    if (dir === "right") move(1, 0);
    if (dir === "down") move(0, 1);
    if (dir === "rotate") rotateShape();
  };

  const restart = () => {
    setBoard(emptyBoard());
    setShape(randomTetromino());
    setPos({ x: 3, y: 0 });
    setScore(0);
    setGameOver(false);
  };

  // --- Render
  // Draw the board with current piece
  const displayBoard = merge();

  return (
    <div className="tetris-root">
      <div className="tetris-bg">
        <div className="tetris-container">
          <h2>Tetris</h2>
          <div className="tetris-score">Score: {score}</div>

          {gameOver && (
            <div className="gameover">
              <div>Game Over</div>
              <button className="restart-btn" onClick={restart}>
                Restart
              </button>
            </div>
          )}

          <div className="tetris-board">
            {displayBoard.map((row, y) =>
              row.map((cell, x) => (
                <div
                  key={`${y}-${x}`}
                  className={`cell cell-${cell}`}
                  style={{
                    background: cell
                      ? [
                          "#00f0f0", // I
                          "#ffbf00", // O
                          "#8000ff", // T
                          "#ff8000", // L
                          "#0000ff", // J
                          "#00ff00", // S
                          "#ff0000", // Z
                        ][cell - 1]
                      : "#191919",
                  }}
                />
              ))
            )}
          </div>
          <div className="controls">
            <button onClick={() => handleMobileMove("left")}>◀️</button>
            <button onClick={() => handleMobileMove("down")}>🔽</button>
            <button onClick={() => handleMobileMove("right")}>▶️</button>
            <button onClick={() => handleMobileMove("rotate")}>⟳</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tetris;
