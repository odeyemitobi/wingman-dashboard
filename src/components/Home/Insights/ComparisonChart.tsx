import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { BsFillBarChartFill } from "react-icons/bs";

export const ComparisonChart = () => {
  const data = [
    { period: 'This week', consultations: 20, ordersClosed: 15 },
    { period: 'Last week', consultations: 12, ordersClosed: 8 }
  ];

  return (
    <div className="bg-white rounded-3xl border p-6 h-full">
      <div className="flex items-center gap-2 mb-8">
        <BsFillBarChartFill className="text-gray-600" />
        <h3 className="text-sm font-medium text-gray-600 tracking-wider">VS PAST PERIOD</h3>
      </div>
      
      <div className="h-[calc(100%-8rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            barGap={0}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false}
              stroke="#E5E7EB"
              opacity={0.5}
            />
            <XAxis 
              dataKey="period" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 14 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              ticks={[10, 20]}
              domain={[0, 20]}
            />
            <Bar 
              dataKey="consultations" 
              fill="#84E1BC"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
            <Bar 
              dataKey="ordersClosed" 
              fill="#064E3B"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-6 mt-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#84E1BC]" />
          <span>Consultations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#064E3B]" />
          <span>Orders closed</span>
        </div>
      </div>
    </div>
  );
};