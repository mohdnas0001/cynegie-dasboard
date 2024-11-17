import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import Calendar from "./calendar";

const UpcomingEvent = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg md:space-x-2 mt-8">
      {/* Calendar Section */}
      <div className="w-full  md:w-1/2  flex justify-center md:justify-start">
        <Calendar />
      </div>

      {/* Event Details Section */}
      <div className="flex flex-col w-full md:w-1/2 justify-center mt-6 md:mt-0 md:pl-6 md:border-l-2 md:border-gray-200">
  {/* User Info Section */}
  <div className="flex items-center space-x-4">
    <Image
      src="/images/user/user-01.png"
      alt="David"
      width={40}
      height={40}
      className="rounded-full"
    />
    <div className="flex flex-col  sm:flex-row items-start sm:items-center gap-2 xl:gap-1">
      <h3 className="font-semibold text-gray-800 text-base md:text-lg xl:text-xs">
        David
      </h3>
      <span className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></span>
      <p className="text-sm text-gray-500 md:text-base xl:text-xs">
        2 hours ago
      </p>
    </div>
  </div>

  {/* Description Section */}
  <p className="my-4 font-medium text-gray-700 text-sm md:text-base xl:text-sm">
    This is the final deadline for submitting all deliverables for the Figma
    asset. Please ensure that all tasks are completed.
  </p>

  {/* Event Details Section */}
  <div className="mt-3 space-y-2">
  <div className="flex items-center border font-medium w-fit px-2 py-1 rounded-md border-gray-200 text-gray-600 text-xs md:text-sm xl:text-xs">
    <Image
      src="icons/calendar-blue.svg"
      alt="calendar"
      width={20}
      height={20}
      className="rounded-full border-2 border-white"
    />
    <span className="ml-2">{format(new Date("2024-08-04"), "MMM d, yyyy")}</span>
  </div>
  <div className="flex items-center border font-medium w-fit px-2 py-1 rounded-md border-gray-200 text-gray-600 text-xs md:text-sm xl:text-xs">
    <Image
      src="icons/clock-blue.svg"
      alt="clock"
      width={20}
      height={20}
      className="rounded-full border-2 border-white"
    />
    <span className="ml-2">5:00 PM</span>
  </div>
</div>

</div>

    </div>
  );
};

export default UpcomingEvent;
