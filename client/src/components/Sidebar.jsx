import React, { createContext, useContext, useState } from "react";
import {
  CircleChevronLeft,
  CircleChevronRight,
  MoreVertical,
} from "lucide-react";
import {
  Store,
  ChartNetwork,
  FileText,
  MessageCircleQuestion,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";


const SidebarContext = createContext();

export default function SideBar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="min-h-screen">
      <nav className="h-full flex flex-col border border-none shadow-2xl shadow-lime-600">
        {/* top overview and button section */}
        <div className="p-6 pb-2 flex justify-between items-center border-b-2 shadow-md h-20">
          <span
            className={`font-sans text-lg font-semibold relative left-2 text-lime-700 overflow-hidden  transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            Overview
          </span>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="relative left-[35px] bg-slate-50 hover:bg-lime-600 hover:text-white rounded-full"
          >
            {expanded ? <CircleChevronLeft /> : <CircleChevronRight />}
          </button>
        </div>
        .
        <SidebarContext.Provider value={{ expanded }}>
          {/*  */}
          <ul className="flex-1 px-3">
            <SideBarItem></SideBarItem>
            {children}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/188/188333.png"
            alt=""
            className="w-[40px] h-[40px]"
          ></img>

          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">xyz</h4>
              <span className="text-xs text-gray-600">xyz@gmail.com</span>
            </div>
            <MoreVertical size={20} className="relative left-2" />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SideBarItem() {
  const [activeItem, setActiveItem] = useState(null);
  const { expanded } = useContext(SidebarContext);
  const sidebarItems = [
    {
      icon: Store,
      label: "Marketplace",
      key: "marketplace",
      link: "/marketplace",
    },
    {
      icon: ChartNetwork,
      label: "Analysis",
      key: "analysis",
      link: "/analysis",
    },
    {
      icon: FileText,
      label: "Contracts",
      key: "contracts",
      link: "/contracts",
    },
    {
      icon: Package,
      label: "Orders",
      key: "orders",
      link: "/orders",
    },
    {
      icon: MessageCircleQuestion,
      label: "Contact Us",
      key: "contact",
      link: "/contactus",
    },
  ];

  return (
    <ul>
      {sidebarItems.map((item) => (
        <Link
          key={item.key}
          to={item.link}
          onClick={() => setActiveItem(item.key)}
          className={`
            relative flex items-center py-3 px-4 my-1 
            font-semibold rounded-md cursor-pointer 
            transition-colors 
            ${
              activeItem === item.key
                ? "bg-gradient-to-tr from-lime-100 to-lime-200 text-lime-800 shadow-md"
                : "hover:bg-lime-200 text-gray-600 hover:text-lime-700 hover:shadow-sm"
            }
          `}
        >
          <item.icon />
          <span
            className={`overflow-hidden transistion-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </ul>
  );
}

export const SideBarProvider = ({children}) => {
  const [expanded,setExpanded] = useState(true);

  return(
    <SidebarContext.Provider value={{expanded,setExpanded}}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar =() =>useContext(SidebarContext);