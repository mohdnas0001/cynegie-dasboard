import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${isItemActive ? "bg-primary500" : ""} group relative flex items-center gap-4 rounded-sm px-2 py-2 font-medium text-black duration-300 ease-in-out hover:bg-primary500  hover:text-white`}
        >
          {item.icon}
          {item.label}
         
        </Link>

        
      </li>
    </>
  );
};

export default SidebarItem;
