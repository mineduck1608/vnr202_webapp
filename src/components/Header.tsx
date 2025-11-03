import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-vn-red-800 via-vn-red-700 to-vn-red-800 text-white py-8 md:py-12 px-4 shadow-2xl relative overflow-hidden border-b-4 border-vn-yellow-500">
      {/* Hiệu ứng sao vàng nền */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-[10%] text-vn-yellow-400 text-6xl">★</div>
        <div className="absolute top-12 right-[15%] text-vn-yellow-400 text-4xl">★</div>
        <div className="absolute bottom-8 left-[20%] text-vn-yellow-400 text-5xl">★</div>
        <div className="absolute bottom-4 right-[25%] text-vn-yellow-400 text-3xl">★</div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="text-vn-yellow-400 text-5xl md:text-6xl mr-4 animate-pulse">★</div>
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-[slideInDown_0.8s_ease-out] text-white">
            Lịch Sử Đảng Cộng Sản Việt Nam
          </h1>
          <div className="text-vn-yellow-400 text-5xl md:text-6xl ml-4 animate-pulse">★</div>
        </div>
        <div className="h-1 w-32 bg-vn-yellow-400 mx-auto mb-4 rounded-full shadow-lg shadow-vn-yellow-400/50"></div>
        <p className="text-lg md:text-xl font-light leading-relaxed opacity-95 animate-[slideInUp_0.8s_ease-out] max-w-4xl mx-auto text-gray-100">
          Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018)
        </p>
      </div>
    </header>
  );
};

export default Header;
