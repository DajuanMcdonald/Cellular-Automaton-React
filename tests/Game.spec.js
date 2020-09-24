import Game from '../src/components/Game';
import Cell from '../src/components/Cell';
import CellState from '../src/components/CellState';


const { DEAD, ALIVE } = CellState;

const deadState = [
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
];

const aliveState = [
    [ALIVE, ALIVE, ALIVE],
    [ALIVE, ALIVE, ALIVE],
    [ALIVE, ALIVE, ALIVE],
    [ALIVE, ALIVE, ALIVE],
    [ALIVE, ALIVE, ALIVE],
];

const randomState = [
    [DEAD, ALIVE, ALIVE],
    [ALIVE, DEAD, ALIVE],
    [DEAD, DEAD, DEAD],
    [ALIVE, ALIVE, DEAD],
    [DEAD, ALIVE, DEAD],
]


describe('Neighbor Counting: Game of Life', () => {
    const deadGameState = new Game(deadState)
    const aliveGameState = new Game(aliveState)

    test('Should be an instance of cell given row and column', () => {
        const cell = deadGameState.getCell(0,0);
        expect(cell).toBeInstanceOf(Cell)
        expect(cell.state).toEqual(deadState[0][0])
    })

    test('Should be initialized with a all DEAD cell state', () => {
        const cellState = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];

        expect(deadGameState.state).toEqual(cellState)
    })

    test('Should be initialized with an all ALIVE cell state' , () => {
        const cellState = [

        [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)],
        [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)],
        [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)],
        [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)],
        [new Cell(ALIVE), new Cell(ALIVE ), new Cell(ALIVE)],

        ];

         expect(aliveGameState.state).toEqual(cellState)
    })


    test('Should get ALIVE neighbors `about` given cell @ 1, 1', () => {
        const game = new Game(randomState)
        const numAliveNeighbors = game.getLiveNeighbors(1, 1);
        expect(numAliveNeighbors).toEqual(4)
    })


    test('Should get ALIVE neighbors `about` given cell @ 3, 1', () => {
        const game = new Game(randomState);
        const numAliveNeighbors = game.getLiveNeighbors(3, 1);

        expect(numAliveNeighbors).toEqual(2)
    })

    test('Should get ALIVE neighbors `about` given cell @  4, 2', () => {
        const game = new Game(randomState);
        const numAliveNeighbors = game.getLiveNeighbors(4, 2);

        expect(numAliveNeighbors).toEqual(2)
    })
})

