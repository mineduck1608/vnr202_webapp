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
      {/* Đường timeline với gradient animation */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-vn-red-600 via-vn-yellow-600 to-vn-red-600 transform -translate-x-1/2 hidden md:block shadow-lg shadow-vn-red-600/50"></div>
      <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-vn-red-600 via-vn-yellow-600 to-vn-red-600 md:hidden shadow-lg shadow-vn-red-600/50"></div>
      
      {events.map((event, index) => (
        <div 
          key={index} 
          className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row animate-[slideInUp_0.6s_ease-out]`}
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'backwards' }}
        >
          {/* Nội dung */}
          <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl hover:shadow-vn-red-500/70 transition-all duration-500 hover:scale-110 border-l-4 border-vn-red-600 hover:border-vn-yellow-500 transform hover:-translate-y-2">
              <span className="inline-block bg-gradient-to-r from-vn-red-600 to-vn-red-700 text-white px-4 py-1 rounded-full text-sm font-bold mb-3 group-hover:from-vn-yellow-600 group-hover:to-vn-yellow-700 transition-all duration-500 shadow-lg">
                {event.year}
              </span>
              <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-vn-yellow-400 transition-colors duration-300">{event.title}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{event.description}</p>
            </div>
          </div>
          
          {/* Chấm tròn giữa với animation */}
          <div className="absolute left-5 md:left-1/2 w-6 h-6 bg-gradient-to-br from-vn-red-600 to-vn-red-700 border-4 border-gray-900 rounded-full transform md:-translate-x-1/2 shadow-xl shadow-vn-red-600/80 z-10 hover:scale-150 transition-transform duration-500 cursor-pointer">
            <div className="absolute inset-0 bg-vn-yellow-600 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-vn-yellow-400 to-vn-yellow-600 rounded-full animate-pulse"></div>
          </div>
          
          {/* Khoảng trống bên kia (chỉ hiện trên desktop) */}
          <div className="hidden md:block md:w-5/12"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
