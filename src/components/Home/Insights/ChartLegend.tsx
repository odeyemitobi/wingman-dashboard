import React from "react";

export const ChartLegend = () => {
  return (
    <div className="flex gap-8 mt-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-0.5 bg-gray-400" />
        <span className="text-gray-600 text-sm">Incoming</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-0.5 bg-emerald-500" />
        <span className="text-gray-600 text-sm">Answered</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-amber-100" />
        <span className="text-gray-600 text-sm">Experts online</span>
      </div>
    </div>
  );
};
