import Cell from '../src/components/Cell';
import CellState from '../src/components/CellState';

    describe('Testing Cell State', () => {

        const aliveCell = new Cell(CellState.ALIVE)
        const deadCell = new Cell(CellState.DEAD)

        //initial state of cells
        test('Should have initialized with a cell state', () => {
            expect(aliveCell.state).toEqual(CellState.ALIVE)
            expect(deadCell.state).toEqual(CellState.DEAD)
            
        })

        //dead cell should stay dead and has zero live neighbors
        test('Should Cell die with no live neighbors', () => {
            const nextStateWith0Neighbors = aliveCell.getNeighbors(0)
            expect(nextStateWith0Neighbors).toEqual(CellState.DEAD)
        })

        //should die if fewer than 2 neighbors
        test('Should Cell die with 1 live neighbors', () => {
            const nextState = aliveCell.getNeighbors(1)
            expect(nextState).toEqual(CellState.DEAD)
        })

        // should live with 2 or 3 live neighbors
        test('Should Cell live with 2 or 3 live neighbors', () => {

            const nextStatewith2Neighbors = aliveCell.getNeighbors(2);
            expect(nextStatewith2Neighbors).toEqual(CellState.ALIVE);

        
            const nextStatewith3Neighbors = aliveCell.getNeighbors(3);
            expect(nextStatewith3Neighbors).toEqual(CellState.ALIVE);
        })

        //should die if more than 3 neighbors
        test('Should Cell die with 4 or more live neighbors', () => {
            const nextStatewithMoreThan3Neighbors = aliveCell.getNeighbors(4);
            expect(nextStatewithMoreThan3Neighbors).toEqual(CellState.DEAD)
        }) 

    })