import React, { useState, useRef, useEffect } from "react";
import {
  PiChatTeardropFill,
  PiCoinsFill,
  PiCoinFill,
  PiCalendarBlankFill,
  PiCaretDownBold,
} from "react-icons/pi";
import { FaTag } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";
import { MdSavings } from "react-icons/md";
import { MetricCard } from "./metricCard";

interface GlanceSectionProps {
  period?: string;
  onPeriodChange?: (period: string) => void;
}

export const GlanceSection = ({
  period = "7 days",
  onPeriodChange,
}: GlanceSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const metrics = [
    {
      icon: <PiChatTeardropFill size={20} />,
      label: "Consultations",
      value: "24",
      change: { value: 15, type: "increase" as const },
    },
    {
      icon: <FaTag size={20} />,
      label: "Orders Placed",
      value: "12",
      change: { value: 15, type: "decrease" as const },
    },
    {
      icon: <ImCheckmark size={20} />,
      label: "Conversion",
      value: "50%",
      change: { value: 15, type: "decrease" as const },
    },
    {
      icon: <PiCoinsFill size={20} />,
      label: "Total Sales Value",
      value: "$2,400",
      change: { value: 15, type: "increase" as const },
    },
    {
      icon: <PiCoinFill size={20} />,
      label: "Avg Order Value",
      value: "$240",
      change: { value: 15, type: "increase" as const },
    },
    {
      icon: <MdSavings size={20} />,
      label: "Commission Paid",
      value: "$240",
      change: { value: 15, type: "increase" as const },
    },
  ];

  const periods = [
    { value: "7 days", label: "Last 7 days" },
    { value: "30 days", label: "Last 30 days" },
    { value: "90 days", label: "Last 90 days" },
  ];

  return (
    <section className="w-full relative">
      <div className="lg:flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-[#212636] lg:mb-0 mb-4">
          At a glance
        </h2>

        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CCFBEF] transition-all duration-200"
          >
            <div className="flex items-center space-x-2">
              <PiCalendarBlankFill className="w-4 h-4 text-gray-400" />
              <span>{periods.find((p) => p.value === period)?.label}</span>
            </div>
            <PiCaretDownBold
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20">
              {periods.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onPeriodChange?.(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-sm text-left transition-colors duration-150
                    ${
                      period === option.value
                        ? "text-[#667085] bg-[#CCFBEF]"
                        : "text-gray-700"
                    }
                    ${period === option.value ? "font-semibold" : "font-normal"}
                    hover:bg-gray-50
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </section>
  );
};

export default GlanceSection;
