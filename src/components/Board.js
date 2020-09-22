import React, {useCallback, useState, useRef} from 'react';
import produce from 'immer';
import { start } from 'repl';

const nRows = 25;
const nCols = 25;

let iterator;
let stepSpeed = 1000;

function Board() {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i=0; i<nRows; i++) {
            rows.push(Array.from(Array(nCols), () => 0));
        }

        return rows;
    });

    const [generator, setGenerator] = useState(false);

    const runRef = useRef(generator);
    runRef.current = generator

    const runGenerator = useCallback(() => {
        if (!runRef.current) {
           return; 
        }
        setGrid((g) => { 
            return produce(g, gridClone => {
                for (let i=0; i<nRows; i++) {
                    for (let j = 0; j<nCols; j++) {
                        let neighbors = 0;
                        if (gridClone[i-1][j-1] === 1) {
                            neighbors ++;
                        }
        
                    }
                }

            })

        })
        

        setTimeout(runGenerator, stepSpeed);
    }, [])

    return (
        <>
        <div>
        <h3>Generations: {iterator}</h3>
        </div>
        <div>
        <button onClick={() => { setGenerator(!generator)}}>{generator ? 'Stop' : 'Start' }</button>
    
        <button onClick={() => {window.location.reload()}}>Reset</button>

        </div>
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${nCols}, 20px)`
        }}>
        
        {grid.map((rows, i) => 
            rows.map((col, k) => (
                <div
                    className='dead'
                    key={`${i}-${k}`}
                    onClick={() => {
                        const newGrid = produce(grid, gridClone => {
                            gridClone[i][k] = grid[i][k] ? 0 : 1;
                           
                        })
                        console.log(newGrid[i][k])
                        console.log(i+'-'+k)
                        console.log(grid[i][k])
                        
                        setGrid(newGrid)
                        
                    }}
                    style={{
                        width: 20, 
                        height: 20, 
                        backgroundColor: grid[i][k] ? 'grey' : undefined,
                        border: 'solid 1px black',

                    }}
                />
            ))
        )}
        </div>
        </>
    )
}

export default Board;
