import React from "react";
import { PiChatTeardropFill } from "react-icons/pi";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ChartLegend } from "./ChartLegend";
import { weeklyData } from "./data";

export const ConsultationsChart = () => {
  return (
    <div className="bg-white rounded-3xl p-8 h-full">
      <div className="flex items-center text-[#667085] gap-2 mb-6">
        <div className="">
          <PiChatTeardropFill color="" />
        </div>
        <h3 className="text-sm font-medium tracking-wider">CONSULTATIONS</h3>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={weeklyData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
              opacity={5}
            />

            {/* X Axis - Days of Week */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 14 }}
              dy={10}
            />

            {/* Left Y Axis */}
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={[0, 60]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 14 }}
              ticks={[0, 10, 20, 30, 40, 50, 60]}
            />

            {/* Right Y Axis */}
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 60]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 14 }}
              ticks={[0, 10, 20, 30, 40, 50, 60]}
            />

            {/* Yellow Bars (Experts Online) */}
            <Bar
              yAxisId="left"
              dataKey="expertsOnline"
              fill="#FEF3C7"
              radius={[4, 4, 0, 0]}
              barSize={40}
            />

            {/* Dashed Line (Incoming) */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="incoming"
              stroke="#9CA3AF"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />

            {/* Solid Line (Answered) */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="answered"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend />
    </div>
  );
};
