import Cell from './Cell';
import CellState from './CellState';

export default class Game {
    constructor(state) {
        this.nRows = state.length;
        this.nCols = state[0].length;
        this.state = state.map(row => row.map(cellState => new Cell(cellState)));

    }

    getCell(row, col) {
        return this.state[row][col];
    }

    getLiveNeighbors(row, col) {
        const stateValues = {
            [CellState.ALIVE]: 1,
            [CellState.DEAD]: 0,
        };

        let numNeighbors = 0;
        //row before cell row
        const startRow = row - 1 < 0 ? 0 : row - 1;

        //row after the cell
        const endRow = row + 1 >= this.nRows ? this.nRows - 1 : row + 1;

        //col before the cell
        const startCol = col - 1 < 0 ? 0 : col - 1;

        //col after cell
        const endCol = col + 1 >= this.nCols ? this.nCols - 1 : col + 1;

        //loop the cell neighbors including current cell pos
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                if (!(i === row && j === col)) {
                    //the number of neighbors total number of adjacent
                    numNeighbors += stateValues[this.state[i][j].state];
                }
            }
        }
        return numNeighbors;
    }

    nextState() {
        return this.state.map((row, rowNum) => row.map(
            (cell, colNum) => new Cell(cell.getNeighbors(this.getLiveNeighbors(rowNum, colNum)),
            ),
        ));
    } 


}