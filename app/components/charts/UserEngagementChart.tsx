"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample Data
const data = [
  { name: "Mo", totalUsers: 400, activeUsers: 200 },
  { name: "Tu", totalUsers: 1500, activeUsers: 1000 },
  { name: "We", totalUsers: 1100, activeUsers: 800 },
  { name: "Th", totalUsers: 2000, activeUsers: 1500 },
  { name: "Fr", totalUsers: 1700, activeUsers: 1200 },
  { name: "Sa", totalUsers: 1400, activeUsers: 1000 },
  { name: "Su", totalUsers: 2200, activeUsers: 1700 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded-md border border-gray-200 text-black">
        <p className="font-semibold text-lg">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function UserEngagementChart() {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md">
      {/* Chart Header */}
      <div className="flex justify-between items-center px-4 mb-4">
        <h2 className="text-2xl font-bold">User Engagement</h2>
        <div className="flex gap-4 items-center">
          <Legend
            wrapperStyle={{ display: "flex", gap: "10px" }}
            payload={[
              { value: "Total Users", type: "circle", color: "#FF4D4D" },
              { value: "Active Users", type: "circle", color: "#FFA07A" },
            ]}
          />
          <select className="border p-2 rounded-lg">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            {/* Gradient for Total Users */}
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF4D4D" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#FF4D4D" stopOpacity={0} />
            </linearGradient>
            {/* Gradient for Active Users */}
            <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA07A" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#FFA07A" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#777" }} />
          <YAxis tick={{ fill: "#777" }} />
          <Tooltip content={<CustomTooltip />} />

          {/* Total Users Area */}
          <Area type="monotone" dataKey="totalUsers" stroke="#FF4D4D" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
          {/* Active Users Area */}
          <Area type="monotone" dataKey="activeUsers" stroke="#FFA07A" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
