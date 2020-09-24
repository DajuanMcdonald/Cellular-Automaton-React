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

  //rule 30
  /**
   * 
   * So we can see that if only 1 of the 3 cells above it are alive, '
   * the cell is set to alive, 
   * or if only the right 2 are alive and the left is dead,
   * it is also set to alive. In all other cases, 
   * the cell is set to dead. This set of rules is called Rule 30.
   */
  rule30(numNeighbors) {
    if (this.state === CellState.ALIVE) {
      if (numNeighbors === 3) {
        return CellState.ALIVE
      }
    
    }
    

    if (this.state === CellState.DEAD) {
      if (numNeighbors === 2) {
        return CellState.ALIVE
      }
    }

    return CellState.DEAD
  }

}