import React from 'react';
import Timeline from './Timeline';

const Overview: React.FC = () => {
  const timelineEvents = [
    {
      year: '1975',
      title: 'Thống nhất đất nước',
      description: 'Hoàn thành giải phóng miền Nam, thống nhất đất nước'
    },
    {
      year: '1986',
      title: 'Đại hội VI - Đổi mới',
      description: 'Khởi xướng đường lối đổi mới toàn diện, đưa đất nước ra khỏi khủng hoảng'
    },
    {
      year: '1991',
      title: 'Đại hội VII',
      description: 'Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH'
    },
    {
      year: '1996',
      title: 'Ổn định kinh tế',
      description: 'Bước đầu ra khỏi khủng hoảng, ổn định kinh tế - xã hội'
    }
  ];

  return (
    <div className="animate-[fadeIn_0.6s_ease-in]">
      {/* Header với icon */}
      <div className="text-center mb-10 animate-[slideInDown_0.8s_ease-out]">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="text-vn-yellow-500 text-5xl mr-3 animate-[float_3s_ease-in-out_infinite]">⭐</div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-vn-yellow-400 to-vn-yellow-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-500 cursor-default">
            Đổi mới toàn diện
          </h2>
          <div className="text-vn-yellow-500 text-5xl ml-3 animate-[float_3s_ease-in-out_infinite_1.5s]">⭐</div>
        </div>
        <p className="text-2xl md:text-3xl text-vn-red-400 font-semibold hover:text-vn-red-300 transition-colors duration-300">(1986 - 1996)</p>
        <div className="h-1 w-48 bg-gradient-to-r from-vn-red-600 to-vn-yellow-600 mx-auto mt-4 rounded-full transition-all duration-700 hover:w-64 hover:h-2 hover:shadow-lg hover:shadow-vn-yellow-600/50"></div>
      </div>
      
      <div className="relative bg-gradient-to-r from-vn-red-700 via-vn-red-600 to-vn-red-700 text-white p-8 md:p-10 rounded-2xl mb-12 shadow-2xl border-2 border-vn-yellow-500 overflow-hidden transition-all duration-700 hover:shadow-vn-yellow-500/70 hover:scale-[1.02] animate-[slideInUp_0.8s_ease-out]">
        {/* Decorative elements với animation */}
        <div className="absolute top-0 right-0 text-vn-yellow-400 text-9xl opacity-10 animate-[twinkle_4s_ease-in-out_infinite]">★</div>
        <div className="absolute bottom-0 left-0 text-vn-yellow-400 text-7xl opacity-10 animate-[twinkle_3s_ease-in-out_infinite_1s]">★</div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3 animate-[float_2s_ease-in-out_infinite]">🚀</span>
            <h3 className="text-2xl font-bold text-vn-yellow-300 hover:text-vn-yellow-100 transition-colors duration-300">Bước ngoặt lịch sử</h3>
            <span className="text-4xl ml-3 animate-[float_2s_ease-in-out_infinite_1s]">🚀</span>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-center transition-all duration-300 hover:scale-105">
            Giai đoạn 1986-1996 đánh dấu <strong className="text-vn-yellow-300 hover:text-vn-yellow-100 transition-colors duration-300 cursor-default">bước ngoặt lịch sử</strong> quan trọng của Đảng và dân tộc Việt Nam 
            với công cuộc <strong className="text-vn-yellow-300 hover:text-vn-yellow-100 transition-colors duration-300 cursor-default">đổi mới toàn diện</strong>, đưa đất nước thoát ra khỏi khủng hoảng kinh tế - xã hội 
            và bước vào thời kỳ <strong className="text-vn-yellow-300 hover:text-vn-yellow-100 transition-colors duration-300 cursor-default">phát triển mới</strong>.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Giai đoạn 1 */}
        <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-vn-red-500/70 transition-all duration-700 hover:-translate-y-4 hover:rotate-1 border-2 border-gray-700 hover:border-vn-red-500 animate-[slideInLeft_0.8s_ease-out]">
          <div className="relative bg-gradient-to-r from-vn-red-700 to-vn-red-800 text-white p-6 border-b-4 border-vn-yellow-500 transition-all duration-500 group-hover:from-vn-red-600 group-hover:to-vn-red-700">
            <div className="absolute top-2 right-2 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:animate-[float_2s_ease-in-out_infinite]">📖</div>
            <div className="relative z-10">
              <div className="text-5xl font-bold text-vn-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-500">1986-1991</div>
              <h3 className="text-2xl font-bold group-hover:text-vn-yellow-300 transition-colors duration-300">Giai đoạn 1</h3>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-vn-yellow-400 text-xl font-bold mb-5 flex items-center group-hover:text-vn-yellow-300 transition-colors duration-300">
              <span className="bg-vn-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">VI</span>
              Đại hội VI - Bước đầu đổi mới
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start group-hover:translate-x-3 transition-all duration-500 delay-75">
                <span className="text-vn-yellow-500 font-bold text-2xl mr-3 mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">Khởi xướng đường lối <strong className="text-vn-yellow-400">đổi mới toàn diện</strong></span>
              </li>
              <li className="flex items-start group-hover:translate-x-3 transition-all duration-500 delay-100">
                <span className="text-vn-yellow-500 font-bold text-2xl mr-3 mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">Đổi mới tư duy kinh tế, chính trị, xã hội</span>
              </li>
              <li className="flex items-start group-hover:translate-x-3 transition-all duration-500 delay-150">
                <span className="text-vn-yellow-500 font-bold text-2xl mr-3 mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">Phát triển nhiều thành phần kinh tế</span>
              </li>
              <li className="flex items-start group-hover:translate-x-3 transition-all duration-500 delay-200">
                <span className="text-vn-yellow-500 font-bold text-2xl mr-3 mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">Thực hiện <strong className="text-vn-yellow-400">"lấy dân làm gốc"</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Giai đoạn 2 */}
        <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-vn-yellow-500/70 transition-all duration-700 hover:-translate-y-4 hover:-rotate-1 border-2 border-gray-700 hover:border-vn-yellow-500 animate-[slideInRight_0.8s_ease-out]">
          <div className="relative bg-gradient-to-r from-vn-yellow-600 to-vn-yellow-700 text-white p-6 border-b-4 border-vn-red-500 transition-all duration-500 group-hover:from-vn-yellow-500 group-hover:to-vn-yellow-600">
            <div className="absolute top-2 right-2 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:animate-[float_2s_ease-in-out_infinite]">📋</div>
            <div className="relative z-10">
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-500">1991-1996</div>
              <h3 className="text-2xl font-bold group-hover:text-gray-900 transition-colors duration-300">Giai đoạn 2</h3>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-vn-yellow-400 text-xl font-bold mb-5 flex items-center group-hover:text-vn-yellow-300 transition-colors duration-300">
              <span className="bg-vn-yellow-600 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">VII</span>
              Đại hội VII - Thực hiện đổi mới
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start group-hover:translate-x-3 transition-all duration-500 delay-75">
                <span className="text-vn-yellow-500 font-bold text-2xl mr-3 mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">Thông qua <strong className="text-vn-yellow-400">Cương lĩnh</strong> xây dựng đất nước</span>
              </li>
              <li className="flex items-start group-hover:translate-x-3 transition-all duration-500 delay-100">
                <span className="text-vn-yellow-500 font-bold text-2xl mr-3 mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">Chiến lược ổn định và phát triển đến 2000</span>
              </li>
              <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-vn-yellow-500 font-bold text-2xl mr-3 mt-1">✓</span>
                <span className="text-gray-200 leading-relaxed">Kinh tế thị trường có sự quản lý của Nhà nước</span>
              </li>
              <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-vn-yellow-500 font-bold text-2xl mr-3 mt-1">✓</span>
                <span className="text-gray-200 leading-relaxed">Củng cố niềm tin vào con đường <strong className="text-vn-yellow-400">XHCN</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-12 bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-2xl border-2 border-gray-700">
        <div className="flex items-center justify-center mb-8">
          <span className="text-4xl mr-3">📅</span>
          <h3 className="text-3xl font-bold text-vn-yellow-400">Dòng thời gian sự kiện</h3>
          <span className="text-4xl ml-3">📅</span>
        </div>
        <Timeline events={timelineEvents} />
      </div>

      <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl mt-12 border-2 border-vn-yellow-500 shadow-2xl overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">🎯</div>
          <div className="absolute bottom-10 right-10 text-9xl">⭐</div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-vn-red-600 to-vn-red-700 px-6 py-3 rounded-full mb-4">
              <h3 className="text-3xl font-bold text-white flex items-center">
                <span className="text-vn-yellow-400 text-4xl mr-3">🎯</span>
                Thành tựu nổi bật
                <span className="text-vn-yellow-400 text-4xl ml-3">🎯</span>
              </h3>
            </div>
            <p className="text-gray-300 text-lg">Những kết quả đạt được trong giai đoạn 1986-1996</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gray-900 p-6 rounded-2xl shadow-2xl text-center hover:shadow-vn-red-500/70 transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-700 hover:border-vn-red-500">
              <div className="bg-gradient-to-br from-vn-red-600 to-vn-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-5xl">📈</span>
              </div>
              <h4 className="text-vn-yellow-400 text-xl font-bold mb-3">Kinh tế</h4>
              <div className="h-1 w-16 bg-vn-yellow-500 mx-auto mb-3 rounded-full"></div>
              <p className="text-gray-300 leading-relaxed text-sm">Từ tăng trưởng <strong className="text-vn-red-400">1.6%</strong> (1976-1980) lên mức cao hơn, kiểm soát được lạm phát</p>
            </div>
            
            <div className="group bg-gray-900 p-6 rounded-2xl shadow-2xl text-center hover:shadow-vn-yellow-500/70 transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-700 hover:border-vn-yellow-500">
              <div className="bg-gradient-to-br from-vn-yellow-600 to-vn-yellow-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-5xl">🌾</span>
              </div>
              <h4 className="text-vn-yellow-400 text-xl font-bold mb-3">Nông nghiệp</h4>
              <div className="h-1 w-16 bg-vn-yellow-500 mx-auto mb-3 rounded-full"></div>
              <p className="text-gray-300 leading-relaxed text-sm">Tăng sản xuất lương thực, từ <strong className="text-vn-yellow-400">thiếu đói</strong> trở thành <strong className="text-vn-yellow-400">xuất khẩu gạo</strong></p>
            </div>
            
            <div className="group bg-gray-900 p-6 rounded-2xl shadow-2xl text-center hover:shadow-vn-red-500/70 transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-700 hover:border-vn-red-500">
              <div className="bg-gradient-to-br from-vn-red-600 to-vn-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-5xl">🤝</span>
              </div>
              <h4 className="text-vn-yellow-400 text-xl font-bold mb-3">Đối ngoại</h4>
              <div className="h-1 w-16 bg-vn-yellow-500 mx-auto mb-3 rounded-full"></div>
              <p className="text-gray-300 leading-relaxed text-sm">Bình thường hóa quan hệ, mở rộng <strong className="text-vn-red-400">hợp tác quốc tế</strong></p>
            </div>
            
            <div className="group bg-gray-900 p-6 rounded-2xl shadow-2xl text-center hover:shadow-vn-yellow-500/70 transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-700 hover:border-vn-yellow-500">
              <div className="bg-gradient-to-br from-vn-yellow-600 to-vn-yellow-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-5xl">👥</span>
              </div>
              <h4 className="text-vn-yellow-400 text-xl font-bold mb-3">Xã hội</h4>
              <div className="h-1 w-16 bg-vn-yellow-500 mx-auto mb-3 rounded-full"></div>
              <p className="text-gray-300 leading-relaxed text-sm">Nâng cao <strong className="text-vn-yellow-400">đời sống nhân dân</strong>, ổn định tình hình xã hội</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
