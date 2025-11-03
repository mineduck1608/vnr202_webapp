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
  ];

  return (
    <nav className="bg-gray-900 shadow-xl sticky top-0 z-50 border-b-4 border-vn-red-600">
      <ul className="flex justify-center gap-2 md:gap-4 p-4 md:p-6 max-w-6xl mx-auto flex-wrap">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-vn-red-600 to-vn-red-700 text-white shadow-lg scale-105 border-2 border-vn-yellow-500'
                  : 'bg-gray-800 text-gray-200 border-2 border-gray-700 hover:bg-vn-red-600 hover:text-white hover:border-vn-red-500 hover:shadow-md hover:-translate-y-1'
              }`}
              onClick={() => onNavigate(section.id)}
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
