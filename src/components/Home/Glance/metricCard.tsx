import { ReactNode } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  change: {
    value: number;
    type: "increase" | "decrease";
  };
}

export const MetricCard = ({ icon, label, value, change }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-xs">
      <div className="flex items-center gap-2 text-[#667085] mb-2">
        <span className="">{icon}</span>
        <span className="text-sm uppercase font-bold">{label}</span>
      </div>

      <div className="text-3xl font-semibold text-[#212636] mb-2">{value}</div>

      <div
        className={`flex items-center text-sm ${
          change.type === "increase" ? "text-[#15B79F]" : "text-[#F04438]"
        }`}
      >
        {change.type === "increase" ? (
          <FaArrowTrendUp className="mr-1" />
        ) : (
          <FaArrowTrendDown className="mr-1" />
        )}
        <span className="text-sm">
          {change.value}% <span className="text-[#667085]">{change.type}</span>
        </span>
      </div>
    </div>
  );
};
