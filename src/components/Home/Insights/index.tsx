import React from 'react';
import { ConsultationsChart } from './ConsultationsChart';
import { ComparisonChart } from './ComparisonChart';
import { Forecasts } from './Forecasts';

export const InsightsSection = () => {
  return (
    <div className='mt-14'>
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Insights</h2>
      <div className="w-full grid grid-cols-4 gap-4">
        {/* Consultations Chart - takes 3/5 (60%) */}
        <div className="col-span-5 h-[600px] lg:col-span-2 border rounded-3xl">
          <ConsultationsChart />
        </div>

        {/* Right side container - takes 2/5 (40%) */}
        <div className="col-span-5 lg:col-span-2 h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <div className="h-full">
              <ComparisonChart />
            </div>
            <div className="h-full">
              <Forecasts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};