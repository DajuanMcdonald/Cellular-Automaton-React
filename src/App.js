import React from "react";
import Board from "./components/Board";
import Option from "./components/Options";
import RightBar from "./components/RightBar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">Conway’s Game of Life</div>
        </nav>
        <div className="main">
            {/** Create a few sample cell configurations that users can load and runAdd an option that creates a random cell configuration that users can run */}
          <div className="options">
            <Option />
          </div>

          <div className="right-bar">
            {/**describes the two main rules (birth & death) of Conway’s Game of Life */}
            <RightBar />
          </div>
          {/**Grid to display cells. */}
          <Board />
        </div>
      </>
    );
  }
}

export default App;
