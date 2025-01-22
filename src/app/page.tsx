"use client";

import React from "react";
import { GlanceSection } from "@/components/Home/Glance";
import { InsightsSection } from "@/components/Home/Insights";

export default function Home() {
  const [period, setPeriod] = React.useState("7 days");

  return (
    <div className="mx-auto">
      <div className="lg:mt-10 lg:mx-8 lg:border rounded-2xl lg:px-5 py-8">
        <>
          <GlanceSection period={period} onPeriodChange={setPeriod} />
        </>
        <>
          <InsightsSection />
        </>
      </div>
    </div>
  );
}
