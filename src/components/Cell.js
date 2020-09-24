import CellState from "./CellState";

/** Apply rules of life to determine if this cell will change states */

export default class Cell {
  constructor(state) {
    this.state = state;
  }

  /**Breaks down above steps into appropriate sub-tasks implemented with helper functions to improve readability */

  getNeighbors(numNeighbors) {
    //Each cell with one or no neighbors dies, as if by solitude.
    if (this.state === CellState.ALIVE) {
      if (numNeighbors === 0 || numNeighbors === 1) {
        return CellState.DEAD;
      }
    }

    //Each cell with two or three neighbors survives.
    if (this.state === CellState.ALIVE) {
      if (numNeighbors === 2 || numNeighbors === 3) {
        return this.state;
      }
    }

    //Each cell with three neighbors becomes populated.
    if (this.state === CellState.DEAD) {
      if (numNeighbors === 3) {
        return CellState.ALIVE;
      }
    }

    //Each cell with four or more neighbors dies, as if by overpopulation.
    if (this.state === CellState.ALIVE) {
      if (numNeighbors >= 4) {
        return CellState.DEAD;
      }
    }

    return CellState.DEAD;
  }
}