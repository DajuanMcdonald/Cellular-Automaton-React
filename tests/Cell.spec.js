import Cell from '../src/components/Cell';
import CellState from '../src/components/CellState';

describe('Testing Cell State', () => {

    const aliveCell = new Cell(CellState.ALIVE)
    const deadCell = new Cell(CellState.DEAD)

    test('Should have initialized with a cell state', () => {
        expect(aliveCell.state).toEqual(CellState.ALIVE)
        expect(deadCell.state).toEqual(CellState.DEAD)
        
    })

    test('Should die if zero neighbors', () => {
        const nextStateWith0Neighbors = aliveCell.getNextState(0)
        expect(nextStateWith0Neighbors).toEqual(CellState.DEAD)
    })

    test('Should die if it has fewer than 2 live neighbors', () => {
        const nextState = aliveCell.getNextState(1)
        expect(nextState).toEqual(CellState.DEAD)
    })

    test('Should live with 2 or 3 live neighbors', () => {

        const nextStatewith2Neighbors = aliveCell.getNextState(2);
        expect(nextStatewith2Neighbors).toEqual(CellState.ALIVE);

       
        const nextStatewith3Neighbors = aliveCell.getNextState(3);
        expect(nextStatewith3Neighbors).toEqual(CellState.ALIVE);
    })

    test('Should die with more than 3 neighbors', () => {
        const nextStatewithMoreThan3Neighbors = aliveCell.getNextState(4);
        expect(nextStatewithMoreThan3Neighbors).toEqual(CellState.DEAD)
    })
})