import { usePathname } from "next/navigation";
import Link from "next/link";

interface TabItemProps {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const TabItem = ({ label, icon, href }: TabItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
        ${
          isActive
            ? "bg-[#CCFBEF] text-[#212636]"
            : "text-[#8A94A6]"
        }`}
    >
      {icon}
      <span className="text-xl font-medium">{label}</span>
    </Link>
  );
};
