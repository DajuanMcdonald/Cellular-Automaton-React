import CellState from '../src/components/CellState';

describe( 'first testing', () => {

    test('item 1', () => {
        expect(4+1).toEqual(5)
    });

    test('Should have a ALIVE state', () => {
        expect(CellState.ALIVE).toEqual(1)
    });

    test('Should have a DEAD state', () => {
        expect(CellState.DEAD).toEqual(0)
    });
    
})