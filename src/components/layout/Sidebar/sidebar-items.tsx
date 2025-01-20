import { GoHomeFill } from "react-icons/go";
import { PiChatTeardropFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi2";

export const sidebarItems = [
  {
    icon: <GoHomeFill size={20} />,
    href: "/",
    label: "Home",
  },
  {
    icon: <PiChatTeardropFill size={20} />,
    href: "/messages",
    label: "Messages",
  },
  {
    icon: <HiUserGroup size={20} />,
    href: "/users",
    label: "Users",
  },
];
