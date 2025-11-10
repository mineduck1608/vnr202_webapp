import React from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const sections = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'congress-vi', label: 'Đại hội VI (1986-1991)' },
    { id: 'congress-vii', label: 'Đại hội VII (1991-1996)' },
    { id: 'crossword', label: 'Crossword' },
  ];

  const handleNavigate = (sectionId: string) => {
    // Scroll lên đầu trang một cách mượt mà
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Gọi hàm onNavigate để đổi section
    onNavigate(sectionId);
  };

  return (
    <nav className="bg-gray-900 shadow-xl sticky top-0 z-50 border-b-4 border-vn-red-600 backdrop-blur-sm bg-opacity-95 transition-all duration-500">
      <ul className="flex justify-center gap-2 md:gap-4 p-4 md:p-6 max-w-6xl mx-auto flex-wrap">
        {/* Vòng lặp map này bây giờ sẽ tự động hiển thị cả nút "Hỏi AI" */}
        {sections.map((section, index) => (
          <li key={section.id} className="animate-[slideInDown_0.6s_ease-out]" style={{ animationDelay: `${index * 0.1}s` }}>
            <button
              className={`px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-500 ease-out whitespace-nowrap transform ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-vn-red-600 to-vn-red-700 text-white shadow-lg shadow-vn-red-600/50 scale-105 border-2 border-vn-yellow-500 animate-pulse'
                  : 'bg-gray-800 text-gray-200 border-2 border-gray-700 hover:bg-gradient-to-r hover:from-vn-red-600 hover:to-vn-red-700 hover:text-white hover:border-vn-red-500 hover:shadow-lg hover:shadow-vn-red-600/40 hover:-translate-y-2 hover:scale-110'
              }`}
              onClick={() => handleNavigate(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;