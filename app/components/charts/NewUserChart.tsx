"use client";
import { Select, ConfigProvider } from 'antd';
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample Data
const data = [
  { name: "Mo", total: 2000, progress: 800 },
  { name: "Tu", total: 2500, progress: 1200 },
  { name: "We", total: 1800, progress: 700 },
  { name: "Th", total: 2700, progress: 1500 },
  { name: "Fr", total: 1600, progress: 500 },
  { name: "St", total: 2300, progress: 1100 },
  { name: "Su", total: 1800, progress: 750 },
];

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


export default function NewUserChart() {
  return (
    <div className="w-full bg-white py-8 px-4 rounded-xl space-y-10">
      <div className='flex justify-between items-center px-14'>
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
      <div className='h-[400px]'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 40, left: 10, bottom: 20 }}
          barSize={30} // Controls overall bar thickness
        >
          <CartesianGrid strokeDasharray="6 6" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: "#aaa" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis tick={{ fill: "#aaa" }} tickLine={false} axisLine={false} />
          <Tooltip />

          {/* Background Bar (Light Gray) */}
          <Bar dataKey="total" fill="#FF8900" stackId="a" />

          {/* Progress Bar (Orange) */}
          <Bar dataKey="progress" fill="#E4E3E0" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}
