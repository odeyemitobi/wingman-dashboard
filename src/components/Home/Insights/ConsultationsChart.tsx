import React from "react";
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
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <h3 className="text-sm font-medium text-gray-600 tracking-wider">
          CONSULTATIONS
        </h3>
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
              horizontal={true}
              stroke="#E5E7EB"
              opacity={0.5}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 14 }}
              dy={10}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={[0, 60]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 14 }}
              ticks={[10, 20, 30, 40, 50, 60]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[10, 20]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 14 }}
              ticks={[10, 20]}
            />
            <Bar
              dataKey="expertsOnline"
              fill="#FEF3C7"
              yAxisId="left"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Line
              type="monotone"
              dataKey="incoming"
              stroke="#9CA3AF"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              yAxisId="left"
            />
            <Line
              type="monotone"
              dataKey="answered"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
              yAxisId="left"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend />
    </div>
  );
};
