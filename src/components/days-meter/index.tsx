import React from 'react';
import GaugeChart from 'react-gauge-chart';

interface DayMeterProps {
  currentDay: number;
  totalDays: number;
}

const DayMeter: React.FC<DayMeterProps> = ({ currentDay, totalDays }) => {
  // Calculate the percentage of days passed
  const percentage = (currentDay / totalDays) * 100;

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">Day Progress</h3>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={20}  // Number of gauge levels
        arcsLength={0.5}  // Set this to 0.5 for a half-pie (semi-circle)
        percent={percentage / 100}  // Percentage as a decimal
        textColor="#000"  // Color of the text (inside the gauge)
        needleColor="#0035C3"  // Needle color
        arcWidth={0.5}  // Width of the gauge arc
        colors={["#0035C3", "#036B26"]}  // Color gradient for the gauge, gray for the background, blue for the progress
      />
      <div className="mt-2">
        <p className="text-sm">
          {currentDay} / {totalDays} days
        </p>
      </div>
    </div>
  );
};

export default DayMeter;
