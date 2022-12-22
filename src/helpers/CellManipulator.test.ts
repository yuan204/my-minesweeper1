import {
  checkItemInField,
  getNeibours,
  incrementNeibours,
} from "./CellManipulator";
import { CellState } from "./Field";
const { empty, bomb } = CellState;

describe("incrementNeibours", function () {
  it("fields with only one item", function () {
    const neibours = incrementNeibours([0, 0], [[bomb]]);
    expect(neibours).toStrictEqual([[bomb]]);
  });
  it("field 3x3", function () {
    const neibours = incrementNeibours(
      [0, 0],
      [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]
    );
    expect(neibours).toStrictEqual([
      [empty, 1, empty],
      [1, 1, empty],
      [empty, empty, empty],
    ]);
  });
  it("field 3x3 with two bombs", function () {
    const neibours = incrementNeibours(
      [0, 0],
      [
        [empty, bomb, empty],
        [1, bomb, empty],
        [empty, empty, empty],
      ]
    );
    expect(neibours).toStrictEqual([
      [empty, bomb, empty],
      [2, bomb, empty],
      [empty, empty, empty],
    ]);
  });
  it("field 9x9", function () {
    const neibours = incrementNeibours(
      [5, 4],
      [
        [9, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 9, 1],
        [0, 0, 1, 9, 1, 0, 2, 2, 2],
        [0, 0, 1, 1, 1, 0, 1, 9, 1],
        [0, 1, 1, 1, 1, 9, 1, 1, 1],
        [0, 1, 9, 2, 1, 1, 0, 0, 0],
        [0, 1, 1, 2, 9, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    );
    expect(neibours).toStrictEqual([
      [9, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 9, 1],
      [0, 0, 1, 9, 1, 0, 2, 2, 2],
      [0, 0, 1, 1, 2, 1, 2, 9, 1],
      [0, 1, 1, 1, 2, 9, 2, 1, 1],
      [0, 1, 9, 2, 2, 2, 1, 0, 0],
      [0, 1, 1, 2, 9, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

describe("getNeibours", function () {
  it("coord [0,0]", function () {
    expect(getNeibours([0, 0])).toStrictEqual({
      left: [-1, 0],
      right: [1, 0],
      top: [0, -1],
      bottom: [0, 1],
      leftTop: [-1, -1],
      leftBottom: [-1, 1],
      rightTop: [1, -1],
      rightBottom: [1, 1],
    });
  });
});

describe("CheckItemInField", function () {
  const fields = [
    [empty, empty, empty],
    [empty, empty, empty],
    [empty, empty, empty],
  ];
  it("out of x range with negative index", function () {
    expect(checkItemInField([-1, 0], fields)).toBe(false);
  });
  it("out of y range with negative index", function () {
    expect(checkItemInField([1, -1], fields)).toBe(false);
  });
  it("out of x range", function () {
    expect(checkItemInField([3, 1], fields)).toBe(false);
  });
  it("out of y range", function () {
    expect(checkItemInField([1, 3], fields)).toBe(false);
  });
  it("x and y in range", function () {
    expect(checkItemInField([1, 1], fields)).toBe(true);
  });
});
