import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "January", value: 100 },
  { name: "February", value: 150 },
  { name: "March", value: 250 },
  { name: "April", value: 225 },
  { name: "May", value: 400 },
  { name: "June", value: 260 },
  { name: "July", value: 280 },
];

const OverviewChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data} margin={{ top: 20, right: 50, left: 12, bottom: 12 }}>
          <CartesianGrid vertical={true} strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" horizontal={false} />
          <XAxis dataKey="name" tick={{ fill: "rgba(0,0,0,0.5)" }} stroke="" />
          <YAxis tick={{ fill: "rgba(0,0,0,0.5)" }} stroke=""  />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="rgba(0,0,0,0.2)" strokeWidth={1} dot={{ fill: "#000", r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
