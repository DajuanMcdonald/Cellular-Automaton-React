import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import CellState from './components/CellState';
import Cell from './components/Cell';
import Game from './components/Game';

export default {
    CellState,
    Cell,
    Game,
};

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);