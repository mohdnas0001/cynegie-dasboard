import React from 'react';

const HalfCircleProgressBar: React.FC = () => {
  const radius = 50; // Radius of the large circle
  const strokeWidth = 20; // Stroke width for both circles
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = 55; // Fixed progress value (can be changed)
  const progressLength = (progress / 60) * circumference; // Length of the progress arc

  return (
    <div className="relative w-48 h-24">
      <svg
        className="absolute transform -rotate-270"
        width="100%"
        height="100%"
        viewBox="0 0 120 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e0e0e0" // Light gray background color
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#0035C3" // Green color for the progress
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference} // Full circumference
          strokeDashoffset={circumference - progressLength} // Offset based on progress
        />
      </svg>
      <div className="absolute inset-0 mt-4 flex flex-col items-center justify-center text-xl font-bold" style={{ transform: 'translateY(8px)' }}>
        <div className='text-base font-bold'>{progress}</div>
        <div className='text-sm'>OUT OF 60</div>
      </div>
    </div>
  );
};

export default HalfCircleProgressBar;
