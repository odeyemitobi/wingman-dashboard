"use client";

import { TabItem } from "./tab-item";
import { tabItems } from "./tab-items";

export const Navbar = () => {
  return (
    <header className="fixed left-16 right-0 top-0 h-20 bg-white border-b border-gray-200">
      <div className="flex items-center h-full px-10 gap-4">
        {tabItems.map((tab) => (
          <TabItem 
            key={tab.href} 
            {...tab} 
          />
        ))}
      </div>
    </header>
  );
};
