import React, {useState} from 'react';

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

    console.log(grid)
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${nCols}, 20px)`
        }}>
        
        {grid.map((rows, i) => 
            rows.map((col, k) => (
                <div 
                    key={`${i}-${k}`}
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
