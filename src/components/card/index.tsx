import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  icon: string;
  children: ReactNode;
  linkText: string;
  span?: string; // Optional prop for column span (e.g., "col-span-2")
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  icon,
  children,
  linkText,
  span = "", // Default to no additional span
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-300 bg-white p-6 ${span}`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-3">
            <img src={icon} alt={title} className="w-6 h-6" />
          </div>
          <h4 className="text-[16.74px] font-medium text-gray-900">{title}</h4>
        </div>
        <a href="#" className="text-black text-sm font-medium hover:underline">
          {linkText}
        </a>
      </div>

      {/* Border Divider */}
      <div className="border-t border-gray-200 mb-4"></div>

      {/* Content Section */}
      <div className="text-gray-600">{children}</div>
    </div>
  );
};

export default CardDataStats;
