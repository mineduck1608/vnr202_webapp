import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-vn-red-800 via-vn-red-700 to-vn-red-800 text-white py-8 md:py-12 px-4 shadow-2xl relative overflow-hidden border-b-4 border-vn-yellow-500 transition-all duration-700">
      {/* Hiệu ứng sao vàng nền với animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-[10%] text-vn-yellow-400 text-6xl animate-[twinkle_3s_ease-in-out_infinite]">★</div>
        <div className="absolute top-12 right-[15%] text-vn-yellow-400 text-4xl animate-[twinkle_4s_ease-in-out_infinite_0.5s]">★</div>
        <div className="absolute bottom-8 left-[20%] text-vn-yellow-400 text-5xl animate-[twinkle_3.5s_ease-in-out_infinite_1s]">★</div>
        <div className="absolute bottom-4 right-[25%] text-vn-yellow-400 text-3xl animate-[twinkle_4.5s_ease-in-out_infinite_1.5s]">★</div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="text-vn-yellow-400 text-5xl md:text-6xl mr-4 animate-[spin_20s_linear_infinite]">★</div>
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-[slideInDown_0.8s_ease-out] text-white transition-all duration-500 hover:scale-105 hover:text-vn-yellow-100 cursor-default">
            Lịch Sử Đảng Cộng Sản Việt Nam
          </h1>
          <div className="text-vn-yellow-400 text-5xl md:text-6xl ml-4 animate-[spin_20s_linear_infinite_reverse]">★</div>
        </div>
        <div className="h-1 w-32 bg-vn-yellow-400 mx-auto mb-4 rounded-full shadow-lg shadow-vn-yellow-400/50 transition-all duration-500 hover:w-48 hover:shadow-vn-yellow-400/80"></div>
        <p className="text-lg md:text-xl font-light leading-relaxed opacity-95 animate-[slideInUp_0.8s_ease-out] max-w-4xl mx-auto text-gray-100 transition-all duration-500 hover:opacity-100 hover:scale-[1.02]">
          Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018)
        </p>
      </div>
    </header>
  );
};

export default Header;
