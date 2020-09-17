import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

        return (
            <div className='App'>
                <h1>Cellular Atomaton: Conway's Game of Life</h1>

                <React.Fragment>
                    <button>Start</button>
                    <button>Stop</button>
                    <button>Step</button>
                    <button>Random</button>
                </React.Fragment>
               
            </div>
            
        )
}

ReactDOM.render(<App />, document.getElementById('app'))