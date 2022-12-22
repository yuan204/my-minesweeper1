import { CellState, emptyFieldGenerator, fieldGenerator, Cell } from "./Field";
const { empty, bomb } = CellState;
const filterBombs = (cells: Cell[]): Cell[] =>
  cells.filter((cell) => cell === bomb);
describe("field generator", function () {
  describe("empty field generator", function () {
    it("2x2", function () {
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });
    it("3x3", function () {
      expect(emptyFieldGenerator(3)).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]);
    });
    it("2x2 with bomb state", function () {
      expect(emptyFieldGenerator(2, bomb)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ]);
    });
    it("3x3 with bomb state", function () {
      expect(emptyFieldGenerator(3, bomb)).toStrictEqual([
        [bomb, bomb, bomb],
        [bomb, bomb, bomb],
        [bomb, bomb, bomb],
      ]);
    });
  });
  describe("random field generator", function () {
    it("should throw error with probability is not between 0 and 1", function () {
      const errorText = "probability should be between 0 and 1";
      expect(() => fieldGenerator(4, -1)).toThrow(errorText);
      expect(() => fieldGenerator(4, 2)).toThrow(errorText);
    });
    it("3x3 with probability 0", function () {
      expect(fieldGenerator(3, 0)).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]);
    });
    it("3x3 with probability 1", function () {
      expect(fieldGenerator(3, 1)).toStrictEqual([
        [bomb, bomb, bomb],
        [bomb, bomb, bomb],
        [bomb, bomb, bomb],
      ]);
    });
    it("4x4 with probability 0.5", function () {
      const fields = fieldGenerator(4, 0.5);
      const cells = fields.flat();
      console.table(fields);
      expect(filterBombs(cells)).toHaveLength(8);
    });
    it("10x10 with probability 0.25", function () {
      const fields = fieldGenerator(10, 0.25);
      const cells = fields.flat();
      console.table(fields);
      expect(filterBombs(cells)).toHaveLength(25);
    });
  });
});
