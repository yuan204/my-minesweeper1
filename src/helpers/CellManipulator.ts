import { Coord, Field, CellState } from "./Field";

export const checkItemInField = ([y, x]: Coord, field: Field): boolean => {
  const size = field.length;
  return x >= 0 && y >= 0 && x < size && y < size;
};

export const getNeibours = ([y, x]: Coord): Record<string, Coord> => ({
  left: [y - 1, x],
  right: [y + 1, x],
  top: [y, x - 1],
  bottom: [y, x + 1],
  leftTop: [y - 1, x - 1],
  leftBottom: [y - 1, x + 1],
  rightTop: [y + 1, x - 1],
  rightBottom: [y + 1, x + 1],
});

export const incrementNeibours = (coord: Coord, field: Field): Field => {
  const neibours = getNeibours(coord);
  for (const neibour of Object.values(neibours)) {
    const [y, x] = neibour;
    if (!checkItemInField(neibour, field) || field[y][x] >= CellState.bomb)
      continue;
    field[y][x]++;
  }
  return field;
};

export const openCell = (
  coord: Coord,
  playerField: Field,
  gameField: Field
): Field => {
  const { bomb, empty, hidden } = CellState;

  const [y, x] = coord;
  const gameCell = gameField[y][x];
  if (gameCell === bomb) {
    throw new Error("game over");
  }
  if (gameCell === empty) {
    playerField[y][x] = gameCell;
    const neibours = getNeibours(coord);
    for (const coord of Object.values(neibours)) {
      if (checkItemInField(coord, gameField)) {
        const [y, x] = coord;
        const playerCell = playerField[y][x];
        const gameCell = gameField[y][x];
        if (playerCell === hidden && gameCell !== bomb) {
          openCell(coord, playerField, gameField);
        }
      }
    }
  }
  playerField[y][x] = gameCell;
  return playerField;
};
