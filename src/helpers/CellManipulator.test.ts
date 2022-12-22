import { getNeibours } from "./CellManipulator";

describe("incrementNeibours", function () {});

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
    expect();
  });
});
