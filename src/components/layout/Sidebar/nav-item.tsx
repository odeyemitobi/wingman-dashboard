import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  icon: ReactNode;
  href: string;
  label: string;
}

export const NavItem = ({ icon, href, label }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="w-full flex justify-center py-2"
      aria-label={label}
    >
      <div
        className={`p-2 rounded-xl transition-colors
          ${isActive ? "bg-white" : ""}`}
      >
        <span className={`block ${isActive ? "text-[#115E56]" : "text-[#CCFBEF]"}`}>
          {icon}
        </span>
      </div>
    </Link>
  );
};
