import { ReactNode } from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

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
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <span className="text-gray-400">{icon}</span>
        <span className="text-sm uppercase">{label}</span>
      </div>

      <div className="text-3xl font-semibold text-gray-900 mb-2">{value}</div>

      <div
        className={`flex items-center text-sm ${
          change.type === "increase" ? "text-green-500" : "text-red-500"
        }`}
      >
        {change.type === "increase" ? (
          <FaLongArrowAltUp className="mr-1" />
        ) : (
          <FaLongArrowAltDown className="mr-1" />
        )}
        <span>
          {change.value}% {change.type}
        </span>
      </div>
    </div>
  );
};
