import CellState from "../src/components/CellState";

describe("Initial state testing", () => {
  test("4 + 1 to equal 5", () => {
    expect(4 + 1).toEqual(5);
  });

  test("Should have a ALIVE state of 1", () => {
    expect(CellState.ALIVE).toEqual(1);
  });

  test("Should have a DEAD state of 0", () => {
    expect(CellState.DEAD).toEqual(0);
  });
});