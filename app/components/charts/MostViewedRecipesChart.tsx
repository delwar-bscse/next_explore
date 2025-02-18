"use client";
import { Select, ConfigProvider, Progress } from "antd";
import Image from "next/image";
import React from "react";

// Type for Select Options
interface SelectOption {
  value: string;
  label: React.ReactNode;
}

// Function to handle Select change
const handleChange = (value: SelectOption) => {
  console.log(value);
};

// Ant Design Custom Theme
const theme = {
  components: {
    Select: {
      hoverBorderColor: "#F28705",
      activeBorderColor: "#F28705",
    },
  },
};

// Define Type for ProgressBar Component
interface ProgressBarProps {
  pName: string;
  pProgress: number;
}

// ProgressBar Component
const ProgressBar: React.FC<ProgressBarProps> = ({ pName, pProgress }) => (
  <div className="flex items-center gap-5 w-full">
    <div className="flex items-center gap-3 w-[200px]">
      <Image
        src="/profile/profile01.png"
        alt="profile"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="text-xl font-semibold">{pName}</div>
    </div>
    <div className="flex-1 flex items-center">
      <Progress
        percent={pProgress}
        status="active"
        strokeColor="#F28705"
        size={["",12]}
      />
    </div>
  </div>
);

// Main Component
export default function MostViewedRecipesChart() {
  return (
    <ConfigProvider theme={theme}>
      <div className="w-full bg-white py-8 px-4 rounded-xl space-y-10">
        {/* Header Section */}
        <div className="flex justify-between items-center px-12">
          <div className="text-3xl font-semibold">Most Viewed Recipes</div>
          <Select
            labelInValue
            size="large"
            defaultValue={{ value: "weekly", label: "Weekly" }}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "weekly", label: "Weekly" },
              { value: "monthly", label: "Monthly" },
            ]}
          />
        </div>

        {/* Progress Bar Section */}
        <div className="h-[400px] px-12 pb-8 flex flex-col justify-between">
          <ProgressBar pName="Egg Benedict" pProgress={95} />
          <ProgressBar pName="Shakshuka" pProgress={64} />
          <ProgressBar pName="Red Velvet" pProgress={96} />
          <ProgressBar pName="Tacos" pProgress={70} />
          <ProgressBar pName="Burrito" pProgress={80} />
        </div>
      </div>
    </ConfigProvider>
  );
}
