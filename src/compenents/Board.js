import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import React, {useState} from 'react';

const nRows = 25;
const nCols = 25;

function Board() {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i=0; i<nRows; i++) {
            rows.push(Array.from(Array(nCols), () => 0))
        }
        return rows;
    })

    console.log(grid)
    return 
    <div>
        {grid}

    </div>
}
export default Board;