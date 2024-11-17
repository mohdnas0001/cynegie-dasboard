import React, { useState } from "react";

const DashboardHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex flex-row justify-between items-center py-4 px-4 md:px-6">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 md:mb-4 ">Dashboard</h1>

      {/* Action Buttons */}
      <div className="flex flex-row space-x-4 md:space-x-6 md:space-y-0 items-center">
        {/* Desktop Buttons */}
        <button className="px-6 py-2 text-base font-semibold border-2 border-primary500 text-primary500 rounded-lg hover:bg-blue-50 focus:outline-none hidden md:block">
          View Paystub
        </button>

        <button className="px-6 py-2 text-base font-semibold bg-primary500 text-white rounded-lg hover:bg-blue-600 focus:outline-none hidden md:block">
          Performance Summary
        </button>

        {/* Mobile Dropdown Button */}
        <div className="relative items-center md:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-md"
          >
            <span className="block text-sm font-medium text-black dark:text-white">
              Actions
            </span>
            <svg
              className="fill-current"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                fill=""
              />
            </svg>
          </button>

          {/* Dropdown Menu for Mobile */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 p-2 flex flex-col bg-white shadow-lg rounded-lg w-60">
              <button className="px-6 border-2 border-primary500 mb-2 rounded-md py-2 text-base font-semibold text-primary500 hover:bg-blue-50">
                View Paystub
              </button>
              <button className="px-6 py-2 text-base rounded-md font-semibold bg-primary500 text-white hover:bg-blue-600">
                Performance Summary
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
