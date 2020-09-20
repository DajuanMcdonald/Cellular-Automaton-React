import React from "react";
import Board from './compenents/Board';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Conway's Game of {name}
        </h1>
        <Board/>
      </>
    );
  }
}

export default App;