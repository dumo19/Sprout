'use client';
// import { RechartsDevtools } from '@recharts/devtools';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// #region Sample data
const data = [
  { date: "Jan 1", value: 234 },
  { date: "Jan 2", value: 245 },
  { date: "Jan 3", value: 210 },
  { date: "Jan 4", value: 278 },
];


// #endregion
export default function LineGraph() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981" // Tailwind emerald-500
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

}