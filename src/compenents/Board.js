import React, {useState} from 'react';
import produce from 'immer';

const nRows = 25;
const nCols = 25;

function Board() {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i=0; i<nRows; i++) {
            rows.push(Array.from(Array(nCols), () => 0));
        }

        return rows;
    });

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${nCols}, 20px)`
        }}>
        
        {grid.map((rows, i) => 
            rows.map((col, k) => (
                <div 
                    key={`${i}-${k}`}
                    onClick={() => {
                        const newGrid = produce(grid, gridClone => {
                            gridClone[i][k] = 1;
                        })
                        setGrid(newGrid)
                        
                    }}
                    style={{
                        width: 20, 
                        height: 20, 
                        backgroundColor: grid[i][k] ? 'grey' : undefined,
                        border: 'solid 1px black' 
                    }}
                />
            ))
        )}
        </div>
    )
}

export default Board;
