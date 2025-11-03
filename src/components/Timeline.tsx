import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative py-8">
      {/* Đường timeline */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-vn-red-600 via-vn-yellow-600 to-vn-red-600 transform -translate-x-1/2 hidden md:block"></div>
      <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-vn-red-600 via-vn-yellow-600 to-vn-red-600 md:hidden"></div>
      
      {events.map((event, index) => (
        <div key={index} className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
          {/* Nội dung */}
          <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-vn-red-500/50 transition-all duration-300 hover:scale-105 border-l-4 border-vn-red-600">
              <span className="inline-block bg-gradient-to-r from-vn-red-600 to-vn-red-700 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                {event.year}
              </span>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{event.title}</h3>
              <p className="text-gray-300 leading-relaxed">{event.description}</p>
            </div>
          </div>
          
          {/* Chấm tròn giữa */}
          <div className="absolute left-5 md:left-1/2 w-5 h-5 bg-vn-red-600 border-4 border-gray-900 rounded-full transform md:-translate-x-1/2 shadow-lg z-10">
            <div className="absolute inset-0 bg-vn-yellow-600 rounded-full animate-ping opacity-75"></div>
          </div>
          
          {/* Khoảng trống bên kia (chỉ hiện trên desktop) */}
          <div className="hidden md:block md:w-5/12"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
