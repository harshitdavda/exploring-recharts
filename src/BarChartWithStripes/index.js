import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import Card from "../Card";

const data = [
  {
    name: "Page A",
    value: 4000,
    pv: 2400,
    fill: "#4780FF"
  },
  {
    name: "Page D",
    value: 2780,
    pv: 3908,
    fill: "#FFDCB3"
  },
  {
    name: "Page B",
    value: 3000,
    pv: 1398,
    fill: "#96EB91"
  },
  {
    name: "Page C",
    value: 2000,
    pv: 9800,
    fill: "#1DAEC7"
  },
  {
    name: "Page E",
    value: 1890,
    pv: 4800,
    fill: "#FF8E00"
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
    <Card title="Asset Completion Status">
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
        barSize={20}
      >
        <svg>
          <defs>
            <pattern
              id="pattern-stripe"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect
                width="2"
                height="4"
                transform="translate(0,0)"
                fill="white"
              />
            </pattern>
            <mask id="mask-stripe">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-stripe)"
              />
            </mask>
          </defs>
        </svg>
        <CartesianGrid vertical={false} stroke="#424C59" />
        <XAxis
          height={100}
          tick={<XAxisLabel />}
          dataKey="name"
          tickLine={false}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#999CA1" }} />
        <Bar dataKey="value" />
        <Bar className="with-stripes" dataKey="pv" />
      </BarChart>
    </Card>
  );
}

export default Chart;
