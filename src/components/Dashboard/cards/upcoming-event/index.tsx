// components/UpcomingEvent.tsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import Image from "next/image";

const UpcomingEvent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2024-08-04"));

  const eventDates = [
    { date: new Date("2024-08-01"), label: "green-dot" },
    { date: new Date("2024-08-04"), label: "blue-dot" },
    { date: new Date("2024-08-28"), label: "orange-dot" },
  ];

  return (
    <div className="flex  w-full flex-col md:flex-row bg-white  mt-8 space-x-4">
      {/* Calendar Section */}
      <div className="md:w-2/3">
        
        <Calendar
          value={selectedDate}
          onChange={(date) => setSelectedDate(date as Date)}
          className="rounded-lg border-white"
          tileClassName={({ date }) => {
            const event = eventDates.find(
              (d) => d.date.toDateString() === date.toDateString()
            );
            return event ? event.label : null;
          }}
        />
      </div>

      {/* Event Details Section */}
      <div className="mt-6 md:border-l-2 md:border-gray-300 md:pl-4  md:mt-0">
        <div className="flex items-center space-x-4">
          <img
            src="/images/user/user-01.png" // Replace with your image path
            alt="David"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-center gap-2">
  <h3 className="font-semibold text-gray-800">David</h3>
  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
  <p className="text-sm text-gray-500">2 hours ago</p>
</div>

        </div>
        <p className="mt-4 font-semibold text-gray-700">
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
        />            <span>{format(new Date("2024-08-04"), "MMM d, yyyy")}</span>
          </div>
          <div className="flex border-2 font-semibold w-fit px-2 py-[2px] rounded-md border-gray-200 items-center space-x-2 text-gray-600">
<Image
          src="icons/clock-blue.svg"
          alt="clock"
          width={32}
          height={32}
          className="rounded-full border-2 border-white"
        />            <span>5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
