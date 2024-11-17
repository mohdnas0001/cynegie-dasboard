import React, { useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import Calendar from "./calendar";

const UpcomingEvent = () => {
  
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg p-4 space-x-0 md:space-x-6 mt-8">
      {/* Calendar Section */}
      <div className="w-64 md:mr-4">
        <Calendar />
      </div>

      {/* Event Details Section */}
      <div className="flex flex-col justify-center mt-6 md:border-l-2 md:border-gray-200 md:pl-4  md:mt-0">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/user/user-01.png"
            alt="David"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-800">David</h3>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <p className="my-4 font-semibold text-gray-700">
          This is the final deadline for submitting all deliverables for the
          Figma asset. Please ensure that all tasks are completed.
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex font-semibold border-2 w-fit px-2 py-[2px] rounded-md border-gray-200 items-center space-x-2 text-gray-600">
            <Image
              src="icons/calendar-blue.svg"
              alt="calendar"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
            <span>{format(new Date("2024-08-04"), "MMM d, yyyy")}</span>
          </div>
          <div className="flex border-2 font-semibold w-fit px-2 py-[2px] rounded-md border-gray-200 items-center space-x-2 text-gray-600">
            <Image
              src="icons/clock-blue.svg"
              alt="clock"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
            <span>5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
