import { PiChatCircleDots } from "react-icons/pi";
import {
  FaShoppingCart,
  FaPercent,
  FaDollarSign,
  FaShoppingBasket,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MetricCard } from "./metricCard";

interface GlanceSectionProps {
  period?: string;
  onPeriodChange?: (period: string) => void;
}

export const GlanceSection = ({
  period = "7 days",
  onPeriodChange,
}: GlanceSectionProps) => {
  const metrics = [
    {
      icon: <PiChatCircleDots size={20} />,
      label: "Consultations",
      value: "24",
      change: { value: 15, type: "increase" as const },
    },
    {
      icon: <FaShoppingCart size={20} />,
      label: "Orders Placed",
      value: "12",
      change: { value: 15, type: "decrease" as const },
    },
    {
      icon: <FaPercent size={20} />,
      label: "Conversion",
      value: "50%",
      change: { value: 15, type: "decrease" as const },
    },
    {
      icon: <FaDollarSign size={20} />,
      label: "Total Sales Value",
      value: "$2,400",
      change: { value: 15, type: "increase" as const },
    },
    {
      icon: <FaShoppingBasket size={20} />,
      label: "Avg Order Value",
      value: "$240",
      change: { value: 15, type: "increase" as const },
    },
    {
      icon: <FaMoneyBillWave size={20} />,
      label: "Commission Paid",
      value: "$240",
      change: { value: 15, type: "increase" as const },
    },
  ];

  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">At a glance</h2>
        <select
          aria-label="Select time period"
          value={period}
          onChange={(e) => onPeriodChange?.(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm"
        >
          <option value="7 days">7 days</option>
          <option value="30 days">30 days</option>
          <option value="90 days">90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </section>
  );
};
