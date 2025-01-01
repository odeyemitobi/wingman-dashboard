"use client";

import StatsCard from "@/components/dashboard/StatsCard";
import ConsultationsChart from "@/components/dashboard/ConsultationChart";
import ComparisonChart from "@/components/dashboard/ComparisonChart";
import OrdersTable from "@/components/dashboard/OrdersTable";
// import Forecasts from "@/components/dashboard/Forecasts";

export default function Home() {
  return (
    <div className="max-w-9xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">At a glance</h1>
        <select className="border rounded-md p-2">
          <option>7 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatsCard
          title="CONSULTATIONS"
          value={24}
          change={15}
          type="increase"
        />
        <StatsCard
          title="ORDERS PLACED"
          value={12}
          change={15}
          type="decrease"
        />
        <StatsCard title="CONVERSION" value="50%" change={15} type="decrease" />
        <StatsCard
          title="TOTAL SALES VALUE"
          value="$2,400"
          change={15}
          type="increase"
        />
        <StatsCard
          title="AVG ORDER VALUE"
          value="$240"
          change={15}
          type="increase"
        />
        <StatsCard
          title="COMMISSION PAID"
          value="$240"
          change={15}
          type="increase"
        />
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-6">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ConsultationsChart />
          <ComparisonChart />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">Orders</h2>
        <OrdersTable />
      </section>
    </div>
  );
}
