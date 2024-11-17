import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box, Typography } from "@mui/material";
import { format } from "date-fns";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date("2024-08-04"));

  const eventDates = [
    { date: new Date("2024-08-01"), label: "green" },
    { date: new Date("2024-08-04"), label: "blue" },
    { date: new Date("2024-08-28"), label: "red" },
  ];

  const isEventDate = (date: Date) =>
    eventDates.some((event) => event.date.toDateString() === date.toDateString());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" flexDirection="column" alignItems="center" className="w-72">
        {/* StaticDatePicker without renderInput prop */}
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
        />
       
      </Box>
    </LocalizationProvider>
  );
};

export default Calendar;
