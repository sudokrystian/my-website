import {
  ROWS,
  COLS,
  TETROMINOS,
  emptyBoard,
  collide,
  rotate,
  randomTetromino,
} from "./tetrisHelpers";

describe("emptyBoard", () => {
  it("creates a board with correct dimensions", () => {
    const board = emptyBoard();
    expect(board).toHaveLength(ROWS);
    expect(board[0]).toHaveLength(COLS);
  });

  it("fills all cells with 0", () => {
    const board = emptyBoard();
    board.forEach((row) => row.forEach((cell) => expect(cell).toBe(0)));
  });

  it("returns distinct row arrays (not shared references)", () => {
    const board = emptyBoard();
    board[0][0] = 1;
    expect(board[1][0]).toBe(0);
  });
});

describe("collide", () => {
  it("returns false when shape fits in empty board", () => {
    const board = emptyBoard();
    const shape = [[1, 1, 1, 1]]; // I piece
    expect(collide(board, shape, { x: 0, y: 0 })).toBe(false);
  });

  it("returns true when shape overlaps an occupied cell", () => {
    const board = emptyBoard();
    board[0][1] = 1;
    const shape = [[1, 1, 1, 1]];
    expect(collide(board, shape, { x: 0, y: 0 })).toBe(true);
  });

  it("returns true when shape goes beyond bottom boundary", () => {
    const board = emptyBoard();
    const shape = [[1, 1, 1, 1]];
    expect(collide(board, shape, { x: 0, y: ROWS })).toBe(true);
  });

  it("returns true when shape goes beyond right boundary", () => {
    const board = emptyBoard();
    const shape = [[1, 1, 1, 1]];
    expect(collide(board, shape, { x: COLS - 2, y: 0 })).toBe(true);
  });

  it("returns false when positioned validly at bottom edge", () => {
    const board = emptyBoard();
    const shape = [[1, 1, 1, 1]];
    expect(collide(board, shape, { x: 0, y: ROWS - 1 })).toBe(false);
  });
});

describe("rotate", () => {
  it("rotates the I piece (1x4 -> 4x1)", () => {
    const iPiece = [[1, 1, 1, 1]];
    const rotated = rotate(iPiece);
    expect(rotated).toEqual([[1], [1], [1], [1]]);
  });

  it("rotates the T piece correctly", () => {
    const tPiece = [
      [0, 3, 0],
      [3, 3, 3],
    ];
    const rotated = rotate(tPiece);
    expect(rotated).toEqual([
      [3, 0],
      [3, 3],
      [3, 0],
    ]);
  });

  it("rotating 4 times returns to original shape", () => {
    const oPiece = [
      [2, 2],
      [2, 2],
    ];
    let shape = oPiece;
    for (let i = 0; i < 4; i++) shape = rotate(shape);
    expect(shape).toEqual(oPiece);
  });

  it("rotates the L piece correctly", () => {
    const lPiece = [
      [4, 0, 0],
      [4, 4, 4],
    ];
    const rotated = rotate(lPiece);
    expect(rotated).toEqual([
      [4, 4],
      [4, 0],
      [4, 0],
    ]);
  });
});

describe("randomTetromino", () => {
  it("returns one of the TETROMINOS shapes", () => {
    for (let i = 0; i < 50; i++) {
      const shape = randomTetromino();
      expect(TETROMINOS).toContainEqual(shape);
    }
  });
});
