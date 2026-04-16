import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Tetris.scss";
import {
  ROWS,
  COLS,
  randomTetromino,
  emptyBoard,
  collide,
  rotate,
} from "./tetrisHelpers";

const INTERVAL = 500; // ms drop speed

const COLORS = [
  "#00f0f0", // I
  "#ffbf00", // O
  "#8000ff", // T
  "#ff8000", // L
  "#0000ff", // J
  "#00ff00", // S
  "#ff0000", // Z
];

// --- Main component
const Tetris: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(emptyBoard());
  const [shape, setShape] = useState<number[][]>(randomTetromino());
  const [pos, setPos] = useState({ x: 3, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Refs to always have current state in callbacks without re-creating them
  const boardRef = useRef(board);
  const shapeRef = useRef(shape);
  const posRef = useRef(pos);
  const scoreRef = useRef(score);
  const gameOverRef = useRef(gameOver);

  boardRef.current = board;
  shapeRef.current = shape;
  posRef.current = pos;
  scoreRef.current = score;
  gameOverRef.current = gameOver;

  const merge = useCallback((customBoard?: number[][]) => {
    const b = customBoard ?? boardRef.current;
    const s = shapeRef.current;
    const p = posRef.current;
    const merged = b.map((row) => [...row]);
    for (let y = 0; y < s.length; ++y) {
      for (let x = 0; x < s[0].length; ++x) {
        if (s[y][x]) merged[p.y + y][p.x + x] = s[y][x];
      }
    }
    return merged;
  }, []);

  const move = useCallback(
    (dx: number, dy: number) => {
      const currentBoard = boardRef.current;
      const currentShape = shapeRef.current;
      const currentPos = posRef.current;
      const newPos = { x: currentPos.x + dx, y: currentPos.y + dy };

      if (!collide(currentBoard, currentShape, newPos)) {
        setPos(newPos);
      } else if (dy) {
        // Piece lands
        const mergedBoard = merge();

        // Clear full rows and calculate score
        let linesCleared = 0;
        const filtered = mergedBoard.filter((row) => {
          const isFull = row.every((cell) => cell);
          if (isFull) linesCleared++;
          return !isFull;
        });
        while (filtered.length < ROWS) filtered.unshift(Array(COLS).fill(0));
        setBoard(filtered);

        if (linesCleared > 0)
          setScore(scoreRef.current + linesCleared * 100);

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
    },
    [merge],
  );

  const rotateShape = useCallback(() => {
    const rotated = rotate(shapeRef.current);
    if (!collide(boardRef.current, rotated, posRef.current)) setShape(rotated);
  }, []);

  const drop = useCallback(() => {
    const currentShape = shapeRef.current;
    const currentPos = posRef.current;
    const currentBoard = boardRef.current;
    let newY = currentPos.y;
    while (!collide(currentBoard, currentShape, { x: currentPos.x, y: newY + 1 })) {
      newY += 1;
    }
    setPos({ ...currentPos, y: newY });
    // Lock the piece on next tick so the ref has the updated pos
    setTimeout(() => move(0, 1), 0);
  }, [move]);

  // Drop logic
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      move(0, 1);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [gameOver, move]);

  // Handle keyboard input
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameOverRef.current) return;
      if (e.key === "ArrowLeft") move(-1, 0);
      if (e.key === "ArrowRight") move(1, 0);
      if (e.key === "ArrowDown") move(0, 1);
      if (e.key === "ArrowUp") rotateShape();
      if (e.key === " ") drop();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [move, rotateShape, drop]);

  const handleMobileMove = useCallback(
    (dir: "left" | "right" | "down" | "rotate") => {
      if (dir === "left") move(-1, 0);
      if (dir === "right") move(1, 0);
      if (dir === "down") move(0, 1);
      if (dir === "rotate") rotateShape();
    },
    [move, rotateShape],
  );

  const restart = useCallback(() => {
    setBoard(emptyBoard());
    setShape(randomTetromino());
    setPos({ x: 3, y: 0 });
    setScore(0);
    setGameOver(false);
  }, []);

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
                    background: cell ? COLORS[cell - 1] : "#191919",
                  }}
                />
              )),
            )}
          </div>
          <div className="controls">
            <button onClick={() => handleMobileMove("left")}>◀️</button>
            <button onClick={() => handleMobileMove("down")}>🔽</button>
            <button onClick={() => handleMobileMove("right")}>▶️</button>
            <button onClick={() => handleMobileMove("rotate")}>🔄</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tetris;
