import React from "react";
import { BsArrowUpShort } from "react-icons/bs";

export const Forecasts = () => {
  return (
    <div className="bg-emerald-500 rounded-lg p-6 text-white h-full">
      <h3 className="text-sm font-medium mb-4">FORECASTS</h3>
      <div className="h-[calc(100%-2rem)] flex flex-col justify-center">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-4xl font-semibold">+15%</span>
              <BsArrowUpShort size={24} />
            </div>
            <p className="text-sm opacity-90">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-4xl font-semibold">+20%</span>
              <BsArrowUpShort size={24} />
            </div>
            <p className="text-sm opacity-90">
              forecasted increase in consultations by the end of the current
              month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
