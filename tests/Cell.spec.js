import Cell from '../src/components/Cell';
import CellState from '../src/components/CellState';

describe('Testing Cell State', () => {
    test('Should have initialized with a cell state', () => {
        const aliveCell = new Cell(CellState.ALIVE)
        expect(aliveCell.state).toEqual(CellState.ALIVE)


        const deadCell = new Cell(CellState.DEAD);
        expect(deadCell.state).toEqual(CellState.DEAD)
        
    })

    test('Should die if it has fewer than 2 live neighbors', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextState = cell.getNextState(1)
        expect(nextState).toEqual(CellState.DEAD)
    })
})