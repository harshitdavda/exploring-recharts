import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import Card from "../Card";

const data = [
  {
    name: "Page A",
    value: 4000
  },
  {
    name: "Page B",
    value: 3000
  },
  {
    name: "Page C",
    value: 2000
  },
  {
    name: "Page D",
    value: 2780
  },
  {
    name: "Page E",
    value: 1890
  },
  {
    name: "Page F",
    value: 2390
  },
  {
    name: "Page G",
    value: 3490
  }
];

function XAxisLabel(props) {
  const { payload, x, y } = props;
  return (
    <g transform={`translate(${x - 15},${y})`}>
      <clipPath id="clipCircle">
        <circle r="15" cx="15" cy="15" />
      </clipPath>
      <image
        href="https://pbs.twimg.com/profile_images/894989421111517184/OIpjAhN9_reasonably_small.jpg"
        height="30"
        width="30"
        clipPath="url(#clipCircle)"
      />
      <text
        transform="rotate(-45)"
        x={-75}
        y={25}
        textAnchor="start"
        fill="#999CA1"
      >
        {payload.value}
      </text>
    </g>
  );
}

function Chart() {
  return (
    <Card title="Total Learning Minutes">
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barSize={10}
      >
        <CartesianGrid vertical={false} stroke="#424C59" />
        <XAxis
          height={100}
          tick={<XAxisLabel />}
          dataKey="name"
          tickLine={false}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#999CA1" }} />
        <Bar dataKey="value" fill="#4780FF" />
      </BarChart>
    </Card>
  );
}

export default Chart;
