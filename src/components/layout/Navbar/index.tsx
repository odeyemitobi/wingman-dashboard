"use client";

import { TabItem } from "./tab-item";
import { tabItems } from "./tab-items";

export const Navbar = () => {
  return (
    <header className="fixed lg:left-16 left-0 right-0 top-0 h-20 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-start h-full pl-16 lg:pl-10 pr-4 gap-2 lg:gap-4 overflow-x-auto">
        {tabItems.map((tab) => (
          <TabItem key={tab.href} {...tab} />
        ))}
      </div>
    </header>
  );
};
