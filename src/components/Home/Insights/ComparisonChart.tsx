import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BsFillBarChartFill } from "react-icons/bs";

const CustomYAxisTick = ({
  x,
  y,
  payload,
}: {
  x: number;
  y: number;
  payload: { value: number };
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={4} textAnchor="end" fill="#9CA3AF" fontSize={14}>
        {payload.value === 20 ? "20" : "10"}
      </text>
    </g>
  );
};

export const ComparisonChart = () => {
  const data = [
    { period: "This week", consultations: 20, ordersClosed: 18 },
    { period: "Last week", consultations: 17, ordersClosed: 16 },
  ];

  return (
    <div className="bg-white rounded-3xl border p-4 sm:p-6 h-full">
      <div className="flex items-center gap-2 mb-4 sm:mb-8">
        <BsFillBarChartFill className="text-gray-600 text-base sm:text-lg" />
        <h3 className="text-xs sm:text-sm font-medium text-gray-600 tracking-wider">
          VS PAST PERIOD
        </h3>
      </div>

      <div className="h-[300px] sm:h-[440px] border-b">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            barCategoryGap={20}
            barGap={20}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#E5E7EB"
              opacity={7}
            />
            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }}
              dy={16}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={CustomYAxisTick}
              domain={[0, 20]}
              ticks={[0, 4, 8, 12, 16, 20]}
              orientation="left"
              dx={-10}
            />
            <Bar
              dataKey="consultations"
              fill="#84E1BC"
              radius={[10, 10, 0, 0]}
              barSize={45}
            />
            <Bar
              dataKey="ordersClosed"
              fill="#064E3B"
              radius={[10, 10, 0, 0]}
              barSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-8 text-xs sm:text-sm text-gray-600 px-2 sm:px-4 space-y-2 sm:space-y-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-[#84E1BC]" />
          <span>Consultations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-[#064E3B]" />
          <span>Orders closed</span>
        </div>
      </div>
    </div>
  );
};
