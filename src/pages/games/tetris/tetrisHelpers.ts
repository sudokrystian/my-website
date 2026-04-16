export const ROWS = 20;
export const COLS = 10;

export const TETROMINOS = [
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

export const randomTetromino = () =>
  TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];

export const emptyBoard = () =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(0));

export const collide = (
  board: number[][],
  shape: number[][],
  pos: { x: number; y: number },
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

export const rotate = (matrix: number[][]) =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]).reverse());
