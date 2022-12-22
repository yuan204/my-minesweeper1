export enum CellState {
  empty = 0,
  bomb = 9,
  hidden = 10,
  mark = 11,
  weakMark = 12,
}

export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Field = Cell[][];

export type Coord = [Cell, Cell];

export const emptyFieldGenerator = (
  size: number,
  state = CellState.empty
): Field => {
  return Array(size)
    .fill([])
    .map((_) => Array(size).fill(state));
};

export const fieldGenerator = (size: number, probability: number): Field => {
  if (probability < 0 || probability > 1) {
    throw new Error("probability should be between 0 and 1");
  }
  const fields = emptyFieldGenerator(size);
  let restBombCount = size * size * probability;
  let unProcessCount = size * size;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (restBombCount === 0) return fields;
      if (restBombCount / unProcessCount > Math.random()) {
        fields[y][x] = CellState.bomb;
        restBombCount--;
      }
      unProcessCount--;
    }
  }
  return fields;
};
