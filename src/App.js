import React from "react"
import Board from './components/Board';
import Option from './components/Options';
import RightBar from './components/RightBar';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <>
      <div className='main'>
        <h1>
          Conway's Game of Life
        </h1>
        <div className='main'>

        <div className='options'>
          {/** Create a few sample cell configurations that users can load and runAdd an option that creates a random cell configuration that users can run */}
          <Option/>
        </div>
        
        <div className='right-bar'>
          {/**describes the two main rules (birth & death) of Conway’s Game of Life */}
        <RightBar/>
        </div>
        {/**Grid to display cells. */}
        <Board/>


        </div>
      </div>
      </>
    );
  }

}

export default App;
