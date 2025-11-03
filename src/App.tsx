import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import './App.css';
import CongressVI from './components/CongressVI';
import CongressVII from './components/CongressVII';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'congress-vi':
        return <CongressVI />;
      case 'congress-vii':
        return <CongressVII />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-[fadeIn_0.6s_ease-out]">
      <Header />
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
        <div className="content-wrapper bg-gray-800 rounded-2xl p-6 md:p-12 shadow-2xl border border-gray-700 transform transition-all duration-700 hover:shadow-vn-red-600/20 hover:border-gray-600 animate-[slideInUp_0.8s_ease-out]">
          <div className="animate-[fadeIn_0.5s_ease-out]">
            {renderSection()}
          </div>
        </div>
      </main>
      <footer className="bg-gradient-to-r from-vn-red-700 via-vn-red-600 to-vn-red-700 text-white text-center py-6 mt-8 border-t-2 border-vn-yellow-500 transition-all duration-500 hover:py-8">
        <p className="text-sm md:text-base opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105">&copy; 2025 - Bài thuyết trình Lịch Sử Đảng Cộng Sản Việt Nam</p>
      </footer>
    </div>
  );
};

export default App;
