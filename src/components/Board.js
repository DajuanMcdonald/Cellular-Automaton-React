import React from 'react';

import Game from './Game';
import Randomize from './random';
import CellState from './CellState';
import Cell from './Cell';


let start = false;
let page = 0;
let timer = 0;
let output = document.getElementById('timer')
let stepSpeed = 1000;


// function paintScreen() {
//     timer++;
//     output.innerText = timer;

//     if(start)  {

//         //recusive call on window object
//         requestAnimationFrame(paintScreen)
//     }


// }

// window.requestAnimationFrame(paintScreen)

const {DEAD, ALIVE} = CellState;
// An appropriate data structure to hold a grid of cells that is at least 25x25. Go as big as you want.
////Cell objects or components that, at a minimum, should have: Properties

const game = new Game([
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],

]);

class Board extends React.Component {
  state = {
    cells: game.state,
  };

  //  Utilize a timeout function to build the next generation of cells & update the display at the chosen time interval

  setActivePage = (page) => {};

  setVisualPage = () => {
    console.log();
  };

  // doubleBuffer = () => {
  //   timer++;
  //   if (!start) {
  //     start = true;
  //     this.toggleState();
  //     this.nextState();
  //     requestAnimationFrame(this.doubleBuffer);
  //   }
  //   // window.requestAnimationFrame(this.doubleBuffer)
  // }
  

  startSimulation = () => {
    if (!start) {
      start = true;
      this.toggleState();
      this.startSimulation();
      requestAnimationFrame(this.nextState)
      timer = setTimeout(this.startSimulation, timer);
      
    } else {
      start = false;
      clearTimeout(timer);
    }

    console.log(timer);
    window.requestAnimationFrame(this.nextState)
  };

  stopSimulation = () => {
    if (!start) {
      start = false;
      clearTimeout(timer)
      // frame = requestAnimationFrame(this.nextState)
      cancelAnimationFrame(this.nextState)
    }
  }

  randomize = (row, col) => {
    Randomize();
  };

  toggleState = (row, col) => {
    this.setState((prevState) => {
      const cells = prevState.cells.map((cellRow, rowNum) =>
        cellRow.map((cell, colNum) => {
          if (rowNum === row && colNum === col) {
            return new Cell(cell.state === ALIVE ? DEAD : ALIVE);
          }
          return cell;
        })
      );
      game.state = cells;
      return {
        cells,
      };
    });
    console.log(row + "," + col);
  };

  nextState = () => {
    // console.log(this.state);
    const nextState = game.nextState();
    game.state = nextState;
    timer++;

    this.setState({
      cells: nextState,
    });
  };

  //working on double buffering
  while() {
    this.setActivePage(page);
    this.setVisualPage(1 - page);

    page = 1 - page;

    this.nextState();
  }

  render() {
    return (
      <>
        <div>
          {/*Text to display current generation # being displayed*/}
          <h3 id="timer">Generation: {timer} </h3>
          <table>
            <tbody>
              {this.state.cells.map((row, rowNum) => (
                <tr key={rowNum}>
                  {row.map((cell, colNum) => (
                    <td
                      key={colNum}
                      id={rowNum + "," + colNum}
                      /*Toggle state functionality: switch between alive & dead either  ...*/

                      style={{
                        background: cell.state === ALIVE ? "black" : "white",
                      }}
                      className="cell"
                      onClick={() => this.toggleState(rowNum, colNum)}
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <button type="button" className="btn btn-success" onClick={this.startSimulation}>
            Start
          </button>
          <button type="button" className="btn btn-danger" onClick={this.stopSimulation}>Stop</button>
          {/**user manually toggled cell before starting simulation  */}
          <button type="button" className="btn btn-warning" onClick={this.nextState}>Next State</button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reset Grid
          </button>
          <button type="button" className="btn btn-primary">Random</button>
        </div>
       
      </>
    );
  }
}
export default Board;