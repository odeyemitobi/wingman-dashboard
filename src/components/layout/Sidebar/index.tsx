"use client";

import { FaHome, FaChartBar, FaComments } from "react-icons/fa";
import Navigation from "../Navigation";
import Image from "next/image";

export default function Sidebar() {
  const menuItems = [
    { icon: FaHome, label: "Home", href: "/" },
    { icon: FaChartBar, label: "Sales", href: "/sales" },
    { icon: FaComments, label: "Chats", href: "/chats" },
  ];

  return (
    <aside className="w-16 bg-[#115E56] min-h-screen flex flex-col items-center py-4">
      <div className="mb-8">
        <Image src="/wings.svg" alt="Wingman" width={32} height={32} />
      </div>
      <Navigation items={menuItems} />
    </aside>
  );
}
