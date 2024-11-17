import React from "react";

// Define possible status types
type Status = "green" | "yellow" | "orange";

interface StatusItemProps {
  date: string;
  status: string;  // e.g., "Sick"
  statusColor: Status;
}

const StatusItem: React.FC<StatusItemProps> = ({ date, status, statusColor }) => {
  // Determine the background and text colors based on the status
  const getButtonStyles = (color: Status) => {
    switch (color) {
      case "green":
        return {
          backgroundColor: "rgba(34, 197, 94, 0.2)", // Green with reduced opacity
          color: "rgb(34, 197, 94)", // Green text
        };
      case "yellow":
        return {
          backgroundColor: "rgba(252, 211, 77, 0.2)", // Yellow with reduced opacity
          color: "rgb(252, 211, 77)", // Yellow text
        };
      case "orange":
        return {
          backgroundColor: "rgba(255, 159, 28, 0.2)", // Orange with reduced opacity
          color: "rgb(255, 159, 28)", // Orange text
        };
      default:
        return {};
    }
  };

  // Get the button styles
  const buttonStyles = getButtonStyles(statusColor);

  // Circle color based on status
  const circleColorClass = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
  }[statusColor];

  return (
    <div className="flex items-center justify-between gap-1 md:p-2 xl:p-0 xl:mb-2  border-gray-200">
      {/* Circle/Tick Dot */}
      <div className="flex gap-4 items-center">
        <div className={`w-3.5 h-3.5 rounded-full ${circleColorClass}`}></div>

      {/* Date and Status Text */}
      <span className="md:text-sm text-xs xl:text-xs  font-semibold text-gray-700">{date} </span>
      </div>
      

      {/* Status Button */}
      <button
        style={buttonStyles}
        className="px-[2px] py-1 w-20 md:text-sm text-xs xl:text-xs rounded-full  font-medium"
      >
        {status}
      </button>
    </div>
  );
};

export default StatusItem;
