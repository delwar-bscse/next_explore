"use client";

import { Select, ConfigProvider } from 'antd';
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

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value);
};

const theme={
  components: {
    Select: {
      hoverBorderColor: "#F28705",
      activeBorderColor: "#F28705",
    },
  },
}

// Sample Data
const data = [
  { name: "Mo", totalUsers: 200, activeUsers: 50 },
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
    <div className="w-full bg-white p-6 rounded-xl shadow-md space-y-8">
      {/* Chart Header */}
      <div className='flex justify-between items-center px-8'>
              <div className='text-3xl font-semibold'>New Users</div>
              <div>
                <ConfigProvider theme={theme}>
                <Select
                  labelInValue
                  size='large'
                  defaultValue={{ value: "weekly", label: "Weekly" }}
                  style={{ width: 120,  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "weekly",
                      label: "Weekly",
                    },
                    {
                      value: "monthly",
                      label: "Monthly",
                    },
                  ]}
                />
                </ConfigProvider>
              </div>
            </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={424}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
          <defs>
            {/* Gradient for Total Users */}
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EFF6FF" />
              <stop offset="95%" stopColor="#FFFFFF" />
            </linearGradient>
            {/* Gradient for Active Users */}
            <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EFF6FF" />
            <stop offset="95%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#777" }} axisLine={false} tickLine={false}/>
          <YAxis tick={{ fill: "#777" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
          verticalAlign="bottom"
          height={0}
            payload={[
              { value: "Total Users", type: "circle", color: "#F28705" },
              { value: "Active Users", type: "circle", color: "#F6AF58" },
            ]}
          />
          {/* Total Users Area */}
          <Area type="monotone" dataKey="totalUsers" stroke="#F28705" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
          {/* Active Users Area */}
          <Area type="monotone" dataKey="activeUsers" stroke="#F6AF58" strokeWidth={3} fillOpacity={1} fill="url(#colorActive)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
