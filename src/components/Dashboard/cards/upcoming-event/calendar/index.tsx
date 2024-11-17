import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box } from "@mui/material";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2024-08-04")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full flex justify-center items-center bg-white rounded-lg">
        <Box
          sx={{
            transform: "scale(0.80)", // Shrinks the entire calendar to 75% of its size
            transformOrigin: "center", // Centers the scaling effect
            maxWidth: "320px", // Restricts maximum width
            overflow: "hidden", // Prevents overflow issues
          }}
        >
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            
            sx={{
              ".MuiCalendarPicker-root": {
                width: "100%",
                height: "auto",
              },
            }}
          />
        </Box>
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
