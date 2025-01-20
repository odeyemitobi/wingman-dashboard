"use client";

import { NavItem } from "./nav-item";
import { sidebarItems } from "./sidebar-items";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-teal-800 flex flex-col items-center py-4 z-40">
      <div className="mb-7 border-b pb-6 border-[#134E48]">
        <Image src={"/wings.svg"} width={30} height={30} alt="logo" />
      </div>
      {sidebarItems.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
    </aside>
  );
};
