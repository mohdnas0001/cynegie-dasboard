import React from 'react';
import Image from 'next/image';

// Title Section Component
const TitleSection: React.FC<{
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
}> = ({ title, subtitle, status, statusColor }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="border-l-4 border-[#D7A601] pl-2">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <button
        className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor}`}
      >
        {status}
      </button>
    </div>
  );
};

// Overlapping Images Component
const OverlappingImages: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="flex -space-x-2">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`User ${index + 1}`}
          width={32}
          height={32}
          className="rounded-full border-2 border-white"
        />
      ))}
    </div>
  );
};

// Due Date and Comments Component
const DueDateAndComments: React.FC<{
  dueDate: string;
  commentCount: number;
}> = ({ dueDate, commentCount }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-600">
        Due: <span className="font-bold text-gray-800">{dueDate}</span>
      </p>
      <div className="flex items-center text-gray-600">
        <Image
          src="/icons/comment.svg"
          alt="Comment Icon"
          width={16}
          height={16}
          className="mr-1"
        />
        <span className="text-sm">{commentCount}</span>
      </div>
    </div>
  );
};

// Activity Card Component
const ActivityCard: React.FC<{
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  notStartedText: string;
  images: string[];
  dueDate: string;
  commentCount: number;
}> = ({
  title,
  subtitle,
  status,
  statusColor,
  notStartedText,
  images,
  dueDate,
  commentCount,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
      <TitleSection
        title={title}
        subtitle={subtitle}
        status={status}
        statusColor={statusColor}
      />
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-600">{notStartedText}</p>
        <OverlappingImages images={images} />
      </div>
      <DueDateAndComments dueDate={dueDate} commentCount={commentCount} />
    </div>
  );
};

// Recent Activity Component
const RecentActivity: React.FC = () => {
  const activities = [
    {
      title: 'App usability testing with Maze',
      subtitle: 'on slack',
      status: 'Pending',
      statusColor: 'bg-orange-200 text-orange-500',
      notStartedText: 'Not started yet',
      images: [
        '/images/user/user-01.png',
        '/images/user/user-02.png',
        '/images/user/user-03.png',
      ],
      dueDate: 'January 21st, 2024',
      commentCount: 12,
    },
    {
      title: 'Website redesign project',
      subtitle: 'on teams',
      status: 'In Progress',
      statusColor: 'bg-blue-200 text-blue-500',
      notStartedText: 'Ongoing',
      images: [
        '/images/user/user-09.png',
        '/images/user/user-04.png',
        '/images/user/user-05.png',
      ],
      dueDate: 'February 14th, 2024',
      commentCount: 8,
    },
  ];

  return (
    <div className="p-1">
      {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
    </div>
  );
};

export default RecentActivity;
