import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

import CellState from "./src/components/CellState";
import Cell from "./src/components/Cell";
import Game from "./src/components/Game";

export default {
  CellState,
  Cell,
  Game,
};

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
