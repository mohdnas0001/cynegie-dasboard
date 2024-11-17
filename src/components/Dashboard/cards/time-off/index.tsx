import DayMeter from '@/components/days-meter';
import React, { useState, useEffect } from 'react';
import StatusItem from './status';
import HalfCircleProgressBar from '@/components/progress-bar';

const TimeOff: React.FC = () => {
  
    const [progress, setProgress] = useState(0);


 useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 60000); // Increment by 1% every minute (simulating a day progress)

    return () => clearInterval(interval);
  }, []);

    return (
      <>
    <div className="md:p-6">
          {/* <DayMeter currentDay={currentDay} totalDays={totalDays} /> */}
                <HalfCircleProgressBar  />

          
      </div>
       <div>
      <StatusItem date="Jul 30, 2024" status="Approved" statusColor="green" />
      <StatusItem date="Aug 1, 2024" status="Pending" statusColor="yellow" />
      <StatusItem date="Aug 10, 2024" status="Rejected" statusColor="orange" />
            </div>
                  </>

  );
};

export default TimeOff;
