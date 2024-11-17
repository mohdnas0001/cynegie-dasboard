import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { menuGroups } from "@/constants";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-80 xl:w-72 lg:w-[300px] flex-col bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between px-8 py-5.5 lg:py-6.5">
          <Link href="/">
            <Image
              width={126}
              height={32}
              src="/images/logo/logo.svg"
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              />
            </svg>
          </button>
        </div>
        {/* SIDEBAR HEADER */}

        {/* SIDEBAR SEARCH */}
        <div className="relative mx-8 py-2 px-2 border rounded-lg">
          <button className="absolute px-2 left-0 top-1/2 -translate-y-1/2">
            <svg
              className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="search..."
            className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
          />
        </div>
        {/* SIDEBAR SEARCH */}

        {/* SIDEBAR CONTENT */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Sidebar Menu */}
            <nav className="mt-4 lg:mt-2">
              {menuGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <ul className="mb-6 flex flex-col gap-1.5">
                    {group.menuItems.map((menuItem, menuIndex) => (
                      <SidebarItem
                        key={menuIndex}
                        item={menuItem}
                        pageName={pageName}
                        setPageName={setPageName}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center gap-2 px-6 py-4 border-t border-gray-200">
          <span className="h-12 w-12 rounded-full">
            <Image
              width={112}
              height={112}
              src="/images/user/user-100.svg"
              alt="User"
            />
          </span>
          <span className="hidden lg:block">
            <span className="block text-base font-semibold text-black">
              Alison Eyo
            </span>
            <span className="block text-sm">alison.e@rayna.ui</span>
          </span>
          <button
            className="ml-auto  p-2 focus:outline-none"
            onClick={() => console.log("logout button click")}
          >
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75002 3.33332C7.21026 3.33332 7.58335 2.96023 7.58335 2.49999C7.58335 2.03975 7.21026 1.66666 6.75002 1.66666H5.50002C3.65907 1.66666 2.16669 3.15904 2.16669 4.99999V15C2.16669 16.8409 3.65907 18.3333 5.50002 18.3333H6.75002C7.21026 18.3333 7.58335 17.9602 7.58335 17.5C7.58335 17.0398 7.21026 16.6667 6.75002 16.6667H5.50002C4.57955 16.6667 3.83335 15.9205 3.83335 15L3.83335 4.99999C3.83335 4.07952 4.57955 3.33332 5.50002 3.33332H6.75002Z" fill="black"/>
<path d="M19.4226 10.5892C19.748 10.2638 19.748 9.73617 19.4226 9.41073L16.0893 6.0774C15.7638 5.75196 15.2362 5.75196 14.9108 6.0774C14.5853 6.40284 14.5853 6.93048 14.9108 7.25591L16.8215 9.16666L7.16669 9.16666C6.70645 9.16666 6.33335 9.53975 6.33335 9.99999C6.33335 10.4602 6.70645 10.8333 7.16669 10.8333L16.8215 10.8333L14.9108 12.7441C14.5853 13.0695 14.5853 13.5971 14.9108 13.9226C15.2362 14.248 15.7638 14.248 16.0893 13.9226L19.4226 10.5892Z" fill="black"/>
</svg>

          </button>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
