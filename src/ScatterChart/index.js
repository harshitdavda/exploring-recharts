import React from "react";
import Card from "../Card";
import { ScatterChart, Scatter, XAxis, YAxis, Legend } from "recharts";

const data = [
  { x: 10, y: 20, fill: "#FF8E00", name: "Kendall Bone" },
  { x: 21, y: 10, fill: "#00D5A5", name: "Marcie Sherman" },
  { x: 40, y: 60, fill: "#444ED4", name: "Theodor Currie" },
  { x: 25, y: 25, fill: "#1DAEC7", name: "Stanislaw Bright" },
  { x: 15, y: 80, fill: "#FF8058", name: "Mike Skinner" },
  { x: 31, y: 40, fill: "#FFDCB3", name: "Shreya Brookes" }
];

function Chart() {
  return (
    <Card title="Performace Comparison">
      <ScatterChart
        width={600}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <Legend
          content={() => (
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                flexWrap: "wrap"
              }}
            >
              {data.map((entry, index) => (
                <li
                  key={`item-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#D0D0D0",
                    margin: "10px 20px"
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: entry.fill,
                      borderRadius: "2px",
                      marginRight: "10px"
                    }}
                  />
                  <span>{entry.name}</span>
                </li>
              ))}
            </ul>
          )}
        />
        <XAxis
          type="number"
          tickLine={false}
          dataKey="x"
          tick={{ fill: "#D0D0D0" }}
          tickFormatter={tick => {
            if (tick !== 0) {
              return `${tick}hrs`;
            }
            return "";
          }}
        />
        <YAxis
          type="number"
          tickLine={false}
          dataKey="y"
          tick={{ fill: "#D0D0D0" }}
          tickFormatter={tick => {
            if (tick !== 0) {
              return `${tick}%`;
            }
            return tick;
          }}
        />
        <Scatter data={data} />
      </ScatterChart>
    </Card>
  );
}

export default Chart;
