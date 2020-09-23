import React from "react";
import Board from './components/Board';
import RightBar from './components/RightBar';
import Options from './components/Options';


import './App.css'

function App () {

    return (
      <>
        <h1>
          Conway's Game of Life
        </h1>
        <div className='main-container'>

        <div className='options'>
          <Options/>
        </div>
        <div className='board'>
        <Board/>
        </div>
        <div className='right-bar'>
        <RightBar/>
        </div>


        </div>
      </>
    );

}

export default App;
