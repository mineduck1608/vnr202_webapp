import React from 'react';

const CongressVI: React.FC = () => {
  return (
    <div className="animate-[fadeIn_0.6s_ease-in]">
      {/* Header với icon */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="text-vn-yellow-600 text-5xl mr-3 animate-pulse">★</div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-vn-yellow-400 to-vn-yellow-600 bg-clip-text text-transparent">
            Đại hội đại biểu toàn quốc lần thứ VI
          </h2>
          <div className="text-vn-yellow-600 text-5xl ml-3 animate-pulse">★</div>
        </div>
        <p className="text-xl md:text-2xl font-semibold text-vn-red-400">(1986 - 1991)</p>
        <div className="h-1 w-48 bg-gradient-to-r from-vn-red-600 to-vn-yellow-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Hình ảnh và Video */}
      <div className="mb-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-vn-red-600">
          <img 
            src="https://dienbientv.vn/dataimages/202101/original/images2993470_c702a839bd99f082a51e57df86a03100_15912803337001729186861.jpg" 
            alt="Đại hội VI"
            className="w-full h-auto object-cover"
          />
          <div className="bg-vn-red-600 text-white p-3 text-center font-semibold">
            Đại hội đại biểu toàn quốc lần thứ VI
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-vn-yellow-600">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/xFHawdU99KQ"
              title="Video Đại hội VI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-vn-yellow-600 text-gray-900 p-3 text-center font-semibold">
            Video tư liệu Đại hội VI
          </div>
        </div>
      </div>
      
      {/* Hoàn cảnh lịch sử */}
      <div className="mb-10 p-6 md:p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl border-l-4 border-vn-red-600 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-vn-yellow-400 mb-6 flex items-center">
          <span className="text-vn-yellow-600 text-3xl mr-3">📖</span>
          Hoàn cảnh lịch sử
        </h3>
        
        {/* Bối cảnh thế giới */}
        <div className="mb-6 p-4 bg-gray-800 rounded-xl shadow-md border-l-4 border-orange-400">
          <h4 className="text-lg font-bold text-orange-400 mb-3 flex items-center">
            <span className="mr-2">🌍</span> Bối cảnh thế giới
          </h4>
          <ul className="space-y-2 text-gray-300 leading-relaxed">
            <li className="flex items-start">
              <span className="text-vn-yellow-600 mr-2 font-bold">•</span>
              <span>Cuộc cách mạng khoa học - kỹ thuật lần thứ hai phát triển mạnh mẽ</span>
            </li>
            <li className="flex items-start">
              <span className="text-vn-yellow-600 mr-2 font-bold">•</span>
              <span>Xu thế hòa bình, đổi mới phát triển kinh tế ở nhiều nước</span>
            </li>
            <li className="flex items-start">
              <span className="text-vn-yellow-600 mr-2 font-bold">•</span>
              <span>Công cuộc cải tổ ở Liên Xô và các nước XHCN Đông Âu lún sâu vào khủng hoảng, trì trệ</span>
            </li>
          </ul>
        </div>

        {/* Tình hình trong nước */}
        <div className="p-4 bg-gray-800 rounded-xl shadow-md border-l-4 border-vn-red-600">
          <h4 className="text-lg font-bold text-vn-yellow-400 mb-3 flex items-center">
            <span className="mr-2">🇻🇳</span> Tình hình trong nước
          </h4>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-lg border-2 border-vn-red-300">
                <p className="text-sm text-gray-300 mb-1">Tăng trưởng GDP (1976-1980)</p>
                <p className="text-3xl font-bold text-vn-red-400">1,6%</p>
                <p className="text-xs text-gray-400 mt-1">Không đủ tiêu dùng</p>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-lg border-2 border-vn-red-300">
                <p className="text-sm text-gray-300 mb-1">Lạm phát năm 1986</p>
                <p className="text-3xl font-bold text-vn-red-400">774%</p>
                <p className="text-xs text-gray-400 mt-1">Tăng từ 300% (1985)</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-100 leading-relaxed">
                <strong className="text-vn-red-400">Thực trạng:</strong> Lương thực, thực phẩm, hàng tiêu dùng khan hiếm; 
                xuất hiện nhiều tiêu cực, vi phạm pháp luật; các thế lực thù địch tăng cường bao vây, cấm vận, 
                kích động vượt biên trái phép.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-vn-yellow-600 to-vn-red-600 p-4 rounded-lg border-l-4 border-vn-yellow-400 border-2">
              <p className="text-white font-semibold">
                ⚠️ <strong>Yêu cầu cấp thiết:</strong> Đổi mới để đưa đất nước thoát khỏi khủng hoảng kinh tế - xã hội!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nội dung chủ yếu */}
      <div className="mb-10 p-6 md:p-8 bg-gray-800 rounded-2xl shadow-2xl border-t-4 border-vn-yellow-600">
        <h3 className="text-2xl md:text-3xl font-bold text-vn-yellow-400 mb-6 flex items-center">
          <span className="text-vn-yellow-600 text-3xl mr-3">📋</span>
          Nội dung chủ yếu của Đại hội VI
        </h3>
        
        {/* Thông tin Đại hội */}
        <div className="bg-gradient-to-r from-vn-red-700 via-vn-red-600 to-vn-yellow-700 p-5 md:p-7 rounded-2xl mb-8 shadow-lg border-2 border-vn-yellow-500">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-200 mb-1">⏰ Thời gian</p>
              <p className="text-lg md:text-xl font-bold text-white">15-18/12/1986</p>
              <p className="text-sm text-gray-200">Hà Nội</p>
            </div>
            <div>
              <p className="text-sm text-gray-200 mb-1">👤 Tổng Bí thư</p>
              <p className="text-lg md:text-xl font-bold text-white">Nguyễn Văn Linh</p>
            </div>
            <div>
              <p className="text-sm text-gray-200 mb-1">👥 Ban chấp hành TW</p>
              <p className="text-lg md:text-xl font-bold text-white">124 UV chính thức</p>
            </div>
          </div>
        </div>

        {/* Tinh thần Đại hội */}
        <div className="mb-8 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-l-4 border-vn-yellow-600 shadow-md">
          <h4 className="text-xl font-bold text-vn-yellow-400 mb-3 flex items-center">
            <span className="text-vn-red-500 text-2xl mr-2">💬</span>
            Tinh thần Đại hội
          </h4>
          <div className="bg-gray-900 p-4 rounded-lg border-2 border-vn-yellow-400">
            <p className="text-lg text-vn-yellow-300 italic leading-relaxed text-center font-semibold">
              "Nhìn thẳng vào sự thật, đánh giá đúng sự thật và nói ra sự thật"
            </p>
          </div>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Đại hội thẳng thắn chỉ ra những hạn chế, khuyết điểm trong lãnh đạo của Đảng giai đoạn 1975-1986
          </p>
        </div>
        
        {/* 4 Bài học lớn */}
        <div className="mb-8">
          <h4 className="text-xl md:text-2xl font-bold text-gray-100 mb-5 flex items-center">
            <span className="text-vn-yellow-600 text-3xl mr-3">⭐</span> 
            4 Bài học lớn
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg border-l-4 border-vn-red-600 hover:shadow-2xl transition-all">
              <div className="flex items-start">
                <span className="text-3xl font-bold text-vn-red-500 mr-3">1</span>
                <div>
                  <p className="text-gray-200 leading-relaxed">
                    Trong toàn bộ hoạt động, Đảng phải quán triệt tư tưởng 
                    <strong className="text-vn-yellow-400 block mt-1 text-lg">"Lấy dân làm gốc"</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg border-l-4 border-vn-red-600 hover:shadow-2xl transition-all">
              <div className="flex items-start">
                <span className="text-3xl font-bold text-vn-red-500 mr-3">2</span>
                <div>
                  <p className="text-gray-200 leading-relaxed">
                    Đảng phải luôn luôn xuất phát từ thực tế, tôn trọng và hành động theo 
                    <strong className="text-vn-yellow-400"> quy luật khách quan</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg border-l-4 border-vn-red-600 hover:shadow-2xl transition-all">
              <div className="flex items-start">
                <span className="text-3xl font-bold text-vn-red-500 mr-3">3</span>
                <div>
                  <p className="text-gray-200 leading-relaxed">
                    Phải biết kết hợp 
                    <strong className="text-vn-yellow-400"> sức mạnh dân tộc với sức mạnh thời đại </strong> 
                    trong điều kiện mới
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg border-l-4 border-vn-red-600 hover:shadow-2xl transition-all">
              <div className="flex items-start">
                <span className="text-3xl font-bold text-vn-red-500 mr-3">4</span>
                <div>
                  <p className="text-gray-200 leading-relaxed">
                    Chăm lo xây dựng Đảng ngang tầm với một 
                    <strong className="text-vn-yellow-400"> đảng cầm quyền</strong> lãnh đạo CMXHCN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nhiệm vụ trọng tâm - Đổi mới toàn diện */}
        <div className="mt-8">
          <h4 className="text-xl md:text-2xl font-bold text-gray-100 mb-5 flex items-center">
            <span className="text-vn-red-600 text-3xl mr-3">🎯</span>
            Chủ trương đổi mới toàn diện - Nhiệm vụ trọng tâm
          </h4>
          
          <div className="grid md:grid-cols-2 gap-5">
            {/* Đổi mới Kinh tế */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-green-600">
              <h5 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                <span className="text-3xl mr-3" >🌾</span> Đổi mới Kinh tế
              </h5>
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="font-semibold text-green-800 mb-1">Mục tiêu:</p>
                  <p className="text-black text-sm">Sản xuất đủ tiêu dùng và có tích lũy; tạo cơ cấu kinh tế hợp lý</p>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg border border-green-700">
                  <p className="font-semibold text-green-800 mb-2">3 Chương trình kinh tế lớn:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Lương thực - Thực phẩm</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Hàng tiêu dùng</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Hàng xuất khẩu</li>
                  </ul>
                </div>
                <p className="text-black text-sm leading-relaxed">
                  <strong>→</strong> Phát triển nhiều thành phần kinh tế, đổi mới cơ chế quản lý, giải quyết vấn đề phân phối & lưu thông
                </p>
              </div>
            </div>

            {/* Quốc phòng và An ninh */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-vn-red-600">
              <h5 className="text-xl font-bold text-vn-yellow-400 mb-4 flex items-center">
                <span className="text-3xl mr-3">🛡️</span> Quốc phòng & An ninh
              </h5>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-vn-red-600 mr-2 font-bold text-lg">•</span>
                  <span>Đề cao cảnh giác, tăng cường khả năng quốc phòng và an ninh</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vn-red-600 mr-2 font-bold text-lg">•</span>
                  <span>Quyết đánh thắng chiến tranh phá hoại nhiều mặt của địch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vn-red-600 mr-2 font-bold text-lg">•</span>
                  <span>Bảo đảm chủ động trong mọi tình huống để bảo vệ Tổ quốc</span>
                </li>
              </ul>
            </div>

            {/* Đối ngoại */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-blue-600">
              <h5 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="text-3xl mr-3">🌏</span> Đối ngoại
              </h5>
              <ul className="space-y-3 text-black leading-relaxed text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Góp phần đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và CNXH</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Tăng cường hợp tác toàn diện với Liên Xô và các nước XHCN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Bình thường hóa quan hệ với Trung Quốc vì hòa bình ở Đông Nam Á</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Tăng cường quan hệ đặc biệt giữa ba nước Đông Dương</span>
                </li>
              </ul>
            </div>

            {/* Đổi mới hệ thống chính trị */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-orange-600">
              <h5 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
                <span className="text-3xl mr-3">🏛️</span> Đổi mới hệ thống chính trị
              </h5>
              <div className="space-y-3">
                <p className="text-black leading-relaxed text-sm">
                  <strong className="text-orange-400">Đảng:</strong> Đổi mới tư duy (đặc biệt tư duy kinh tế), công tác tư tưởng, công tác cán bộ; tăng cường đoàn kết
                </p>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <p className="font-bold text-orange-800 text-center">
                    "Dân biết, dân bàn, dân làm, dân kiểm tra"
                  </p>
                </div>
                <p className="text-black leading-relaxed text-sm">
                  <strong className="text-orange-400">Nhà nước:</strong> Tăng cường hiệu lực quản lý, huy động lực lượng quần chúng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ý nghĩa lịch sử */}
      <div className="bg-gradient-to-r from-vn-red-600 via-vn-red-700 to-vn-red-800 text-white p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Hiệu ứng sao nền */}
        <div className="absolute top-0 right-0 text-vn-yellow-600 text-9xl opacity-10">★</div>
        <div className="absolute bottom-0 left-0 text-vn-yellow-600 text-9xl opacity-10">★</div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center">
            <span className="text-vn-yellow-600 text-4xl mr-3 animate-pulse">✨</span> 
            Ý nghĩa lịch sử
            <span className="text-vn-yellow-600 text-4xl ml-3 animate-pulse">✨</span>
          </h3>
          
          <div className="bg-gray-800/10 backdrop-blur-sm p-6 rounded-xl border-2 border-vn-yellow-600 mb-4">
            <p className="text-xl md:text-2xl leading-relaxed text-center font-semibold">
              Đại hội VI là <span className="text-vn-yellow-600 font-bold text-2xl md:text-3xl">"Đại hội khởi xướng đường lối đổi mới toàn diện"</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-800/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-lg leading-relaxed">
                <span className="text-vn-yellow-600 font-bold">→</span> Đánh dấu bước ngoặt trong thời kỳ quá độ lên CNXH
              </p>
            </div>
            <div className="bg-gray-800/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-lg leading-relaxed">
                <span className="text-vn-yellow-600 font-bold">→</span> Mở ra thời kỳ phát triển mới cho cách mạng Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongressVI;
