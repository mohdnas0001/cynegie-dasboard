"use client";

import dynamic from "next/dynamic";
import React from "react";
import DashboardHeader from "./header";
import CardDataStats from "../card";
import UpcomingEvent from "./cards/upcoming-event";

const TimeOff = dynamic(() => import("./cards/time-off"));
const Profile = dynamic(() => import("./cards/profile"));
const DeviceManagement = dynamic(() => import("./cards/device-management"));
const AppManagement = dynamic(() => import("./cards/app-management"));
const RecentActivity = dynamic(() => import("./cards/recent-activity"));

const HomePage: React.FC = () => {
  return (
    <>
      <DashboardHeader />

      {/* First Grid */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 xl:grid-cols-4 2xl:gap-4">
        <CardDataStats
          title="Time-Off"
          icon="/icons/clock.svg"
          linkText="View More"
        >
          <TimeOff />
        </CardDataStats>

        <CardDataStats
          title="Profile"
          icon="/icons/user.svg"
          linkText="View More"
                    // span="col-span-3" 

        >
          <Profile />
        </CardDataStats>

        <CardDataStats
          title="Upcoming Event"
          icon="/icons/calendar.svg"
          linkText="View More"
          span="md:col-span-2" 

        >
          <UpcomingEvent/>
        </CardDataStats>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-2 md:gap-2 xl:grid-cols-12 2xl:gap-4">
        <CardDataStats
          title="Device Management"
          icon="/icons/laptop.svg"
          linkText="View More"
                    span="col-span-4" 

        >
          <DeviceManagement />
        </CardDataStats>

        <CardDataStats
          title="App Management"
          icon="/icons/3d.svg"
          linkText="View More"
                              span="col-span-4" 

        >
          <AppManagement />
        </CardDataStats>

        <CardDataStats
          title="Recent Activity"
          icon="/icons/lightning.svg"
          linkText="View More"
                              span="col-span-4" 

        >
          <RecentActivity />
        </CardDataStats>
      </div>
    </>
  );
};

export default HomePage;
