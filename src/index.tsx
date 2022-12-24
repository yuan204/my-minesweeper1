import ReactDOM from "react-dom";
import React from "react";
import { Top } from "./components/Top";

// import { App } from "../examples/ReactIntro/App";

ReactDOM.render(
  <Top feature="Flag" firstAction="ctrl" secondAction="click">
    Minesweeper
  </Top>,
  document.getElementById("root")
);
