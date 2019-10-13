import React from "react";
import ReactDOM from "react-dom";
import RadialBarChart from "./RadialBarChart";
import BarChart from "./BarChart";
import BarChartWithStripes from "./BarChartWithStripes";
import ScatterChart from "./ScatterChart";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <RadialBarChart />
      <BarChart />
      <BarChartWithStripes />
      <ScatterChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
