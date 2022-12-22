import { Coord, Field } from "./Field";

export const CheckItemInField = ([x, y]: Coord, field: Field): boolean => {
  const size = field.length;
  return x >= 0 && y >= 0 && x <= size && y <= size;
};

export const getNeibours = ([x, y]: Coord): Record<
  string,
  [number, number]
> => ({
  left: [x - 1, y],
  right: [x + 1, y],
  top: [x, y - 1],
  bottom: [x, y + 1],
  leftTop: [x - 1, y - 1],
  leftBottom: [x - 1, y + 1],
  rightTop: [x + 1, y - 1],
  rightBottom: [x + 1, y + 1],
});

export const incrementNeibours = (coord: Coord, field: Field): Field => {
  return [];
};
