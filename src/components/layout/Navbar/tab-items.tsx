import { PiChartPieSliceFill } from "react-icons/pi";
import { FaTag } from "react-icons/fa6";
import { PiChatTeardropTextFill } from "react-icons/pi";

export const tabItems = [
  { 
    label: 'Summary', 
    icon: <PiChartPieSliceFill size={20} />,
    href: '/'
  },
  { 
    label: 'Sales', 
    icon: <FaTag size={20}/>,
    href: '/sales'
  },
  { 
    label: 'Chats', 
    icon: <PiChatTeardropTextFill size={20} />,
    href: '/chats'
  },
];