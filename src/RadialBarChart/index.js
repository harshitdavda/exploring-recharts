import React, { useLayoutEffect } from "react";
import Card from "../Card";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const colors = ["#FF4646", "#AF43CB", "#DECD27", "#1cfda2"];

const data = [
  {
    name: "18-24",
    uv: 40,
    pv: 2400,
    fill: "#FF4646"
  },
  {
    name: "25-29",
    uv: 30,
    pv: 4567,
    fill: "#AF43CB"
  },
  {
    name: "30-34",
    uv: 60,
    pv: 1398,
    fill: "#DECD27"
  },
  {
    name: "35-39",
    uv: 54,
    pv: 9800,
    fill: "#1cfda2"
  }
];

function Chart() {
  useLayoutEffect(() => {
    Array.from(
      document.querySelectorAll(".recharts-radial-bar-background-sector")
    ).forEach((elem, i) => {
      elem.style.fill = colors[i];
      elem.style["fill-opacity"] = 0.1;
    });
  }, []);
  return (
    <Card title="Status of total assigned assets">
      <RadialBarChart
        width={300}
        height={300}
        cx={150}
        cy={150}
        innerRadius={60}
        startAngle={90}
        endAngle={-450}
        outerRadius={140}
        barSize={15}
        data={data}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background={{ fill: "#262847" }}
          angleAxisId={0}
          dataKey="uv"
          cornerRadius={5}
        />
      </RadialBarChart>
    </Card>
  );
}

export default Chart;
