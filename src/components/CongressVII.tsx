import React from 'react';

const CongressVII: React.FC = () => {
    return (
        <div className="animate-[fadeIn_0.6s_ease-in]">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-vn-yellow-400 to-vn-yellow-600 bg-clip-text text-transparent">
                    Đại hội đại biểu toàn quốc lần thứ VII
                </h2>
                <p className="text-xl md:text-2xl text-vn-red-400 font-semibold">(1991 - 1996)</p>
                <div className="mt-4 inline-block bg-gradient-to-r from-vn-red-700 to-vn-red-800 text-white px-6 py-2 rounded-full shadow-lg border border-vn-yellow-500">
                    <span className="font-bold">"Đại hội của trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết"</span>
                </div>
            </div>

            {/* Hình ảnh và Video */}
            <div className="mb-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-vn-red-600">
                    <img
                        src="https://cdn.baohatinh.vn/images/944cd9e6912bec98ccfb039520b2a7d2311d0a805c46aa736d570815b903bad11c3491950dfff16c2db46b85e568b690/dang-jpg8.jpg"
                        alt="Đại hội VII"
                        className="w-full h-auto object-cover"
                    />
                    <div className="bg-vn-red-600 text-white p-3 text-center font-semibold">
                        Ban chấp hành Trung ương Đại hội VII
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-vn-red-600">
                    <img
                        src="https://file3.qdnd.vn/data/images/0/2025/01/30/upload_2105/2.jpg?dpi=150&quality=100&w=870"
                        alt="Đồng chí Đỗ Mười và các đại biểu"
                        className="w-full h-auto object-cover"
                    />
                    <div className="bg-vn-red-600 text-white p-3 text-center font-semibold">
                        Đồng chí Đỗ Mười và các đại biểu dự Đại hội VII
                    </div>
                </div>
            </div>

            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-vn-yellow-600">
                <div className="relative pb-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/9L3VInHnkaI"
                        title="Video Đại hội VII"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="bg-vn-yellow-600 text-gray-100 p-3 text-center font-semibold">
                    Video tư liệu Đại hội VII
                </div>
            </div>

            <div className="mb-8 p-6 md:p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-l-8 border-vn-red-600 shadow-xl">
                <div className="flex items-center mb-6">
                    <div className="bg-vn-red-600 text-white p-4 rounded-full mr-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-vn-yellow-400">Hoàn cảnh lịch sử</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                        <h4 className="font-bold text-lg text-red-400 mb-3 flex items-center">
                            <span className="text-2xl mr-2">🌍</span> Bối cảnh thế giới
                        </h4>
                        <ul className="space-y-2 text-gray-200">
                            <li className="flex items-start">
                                <span className="text-vn-red-400 mr-2 font-bold">•</span>
                                <span><strong className="text-vn-yellow-400">Khủng hoảng và sụp đổ</strong> chế độ xã hội chủ nghĩa ở Liên Xô, Đông Âu</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-vn-red-400 mr-2 font-bold">•</span>
                                <span>Tác động <strong className="text-vn-yellow-400">bất lợi</strong> đến cách mạng thế giới và Việt Nam</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-vn-red-400 mr-2 font-bold">•</span>
                                <span>Các thế lực đế quốc và phản động tấn công <strong className="text-vn-yellow-400">quyết liệt</strong> nhằm xóa bỏ CNXH ở Việt Nam</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                        <h4 className="font-bold text-lg text-yellow-400 mb-3 flex items-center">
                            <span className="text-2xl mr-2">🇻🇳</span> Trong nước
                        </h4>
                        <ul className="space-y-2 text-gray-200">
                            <li className="flex items-start">
                                <span className="text-vn-yellow-500 mr-2 font-bold">•</span>
                                <span>Sau <strong className="text-vn-yellow-400">4 năm</strong> thực hiện đường lối đổi mới</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-vn-yellow-500 mr-2 font-bold">•</span>
                                <span>Tình hình kinh tế - xã hội có <strong className="text-vn-yellow-400">những biến chuyển</strong></span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-vn-yellow-500 mr-2 font-bold">•</span>
                                <span>Song vẫn <strong className="text-vn-yellow-400">chưa thoát ra khỏi cuộc khủng hoảng</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-vn-red-700 to-vn-red-800 rounded-lg border-2 border-vn-yellow-500">
                    <p className="text-center text-white font-semibold italic">
                        ⚠️ Yêu cầu <strong className="text-vn-yellow-300">tiếp tục đổi mới</strong> và <strong className="text-vn-yellow-300">hoạch định con đường</strong> phát triển đất nước đặt ra cấp thiết
                    </p>
                </div>
            </div>

            <div className="mb-8 p-6 md:p-8 bg-gray-800 rounded-2xl shadow-2xl border-t-8 border-vn-yellow-600">
                <div className="flex items-center mb-6">
                    <div className="bg-vn-yellow-600 text-gray-100 p-4 rounded-full mr-4">
                        <span className="text-3xl">📋</span>
                    </div>
                    <h3 className="text-3xl font-bold text-vn-yellow-400">Nội dung chủ yếu của Đại hội VII</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-vn-red-600 to-vn-red-700 text-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                        <div className="text-4xl mb-2">📅</div>
                        <div className="font-bold text-lg mb-1">Thời gian</div>
                        <div className="text-sm">24-27/6/1991</div>
                        <div className="text-xs mt-2 opacity-90">Thủ đô Hà Nội</div>
                    </div>
                    <div className="bg-gradient-to-br from-vn-yellow-600 to-yellow-500 text-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all border-2 border-yellow-400">
                        <div className="text-4xl mb-2">👥</div>
                        <div className="font-bold text-lg mb-1">Đại biểu</div>
                        <div className="text-sm font-bold">1.176 đại biểu</div>
                        <div className="text-xs mt-2">Hơn 2 triệu đảng viên</div>
                    </div>
                    <div className="bg-gradient-to-br from-vn-red-600 to-vn-red-700 text-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                        <div className="text-4xl mb-2">⭐</div>
                        <div className="font-bold text-lg mb-1">Tổng Bí thư</div>
                        <div className="text-sm font-bold">Đỗ Mười</div>
                        <div className="text-xs mt-2 opacity-90">Ban chấp hành TW: 146 UV</div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-xl shadow-lg mb-6 border-2 border-vn-red-500">
                    <h4 className="font-bold text-xl text-vn-yellow-400 mb-4 flex items-center">
                        <span className="bg-vn-red-600 text-white px-3 py-1 rounded-full mr-3 text-sm">Văn kiện</span>
                        Các văn kiện quan trọng được thông qua
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start bg-gray-900 p-4 rounded-lg shadow border-l-4 border-vn-red-600">
                            <span className="text-2xl mr-3">📜</span>
                            <div>
                                <div className="font-bold text-vn-yellow-400">Cương lĩnh xây dựng đất nước</div>
                                <div className="text-sm text-gray-300">Trong thời kỳ quá độ lên CNXH</div>
                            </div>
                        </div>
                        <div className="flex items-start bg-gray-900 p-4 rounded-lg shadow border-l-4 border-vn-yellow-600">
                            <span className="text-2xl mr-3">📊</span>
                            <div>
                                <div className="font-bold text-vn-yellow-400">Chiến lược ổn định và phát triển</div>
                                <div className="text-sm text-gray-400">Kinh tế - xã hội đến năm 2000</div>
                            </div>
                        </div>
                        <div className="flex items-start bg-gray-800 p-4 rounded-lg shadow border-l-4 border-vn-red-600">
                            <span className="text-2xl mr-3">📝</span>
                            <div>
                                <div className="font-bold text-vn-yellow-400">Báo cáo chính trị</div>
                                <div className="text-sm text-gray-400">Tổng kết 5 năm đổi mới</div>
                            </div>
                        </div>
                        <div className="flex items-start bg-gray-800 p-4 rounded-lg shadow border-l-4 border-vn-yellow-600">
                            <span className="text-2xl mr-3">🏛️</span>
                            <div>
                                <div className="font-bold text-vn-yellow-400">Báo cáo xây dựng Đảng</div>
                                <div className="text-sm text-gray-400">Sửa đổi Điều lệ Đảng</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 bg-gradient-to-br from-yellow-50 to-red-50 p-6 rounded-2xl border-4 border-vn-yellow-600 shadow-xl">
                    <div className="text-center mb-6">
                        <h4 className="text-2xl md:text-3xl font-bold text-vn-yellow-400 mb-2 flex items-center justify-center">
                            <span className="text-4xl mr-3">📜</span>
                            Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH
                        </h4>
                        <p className="text-gray-400 italic">Tổng kết hơn 60 năm Đảng lãnh đạo cách mạng Việt Nam</p>
                    </div>

                    <div className="mb-8 bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                            <span className="bg-vn-red-600 text-white px-4 py-2 rounded-full font-bold text-lg mr-3">5</span>
                            <h5 className="text-xl font-bold text-vn-yellow-400">Bài học kinh nghiệm lớn</h5>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border-l-4 border-vn-red-600 hover:shadow-lg transition-all">
                                <div className="flex items-start">
                                    <span className="bg-vn-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                                    <div>
                                        <p className="text-gray-200 leading-relaxed">Nắm vững ngọn cờ <strong className="text-vn-red-600">độc lập dân tộc</strong> và <strong className="text-vn-red-600">chủ nghĩa xã hội</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border-l-4 border-vn-red-600 hover:shadow-lg transition-all">
                                <div className="flex items-start">
                                    <span className="bg-vn-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                                    <div>
                                        <p className="text-gray-200 leading-relaxed">Sự nghiệp cách mạng là <strong className="text-vn-red-600">của nhân dân, do nhân dân và vì nhân dân</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border-l-4 border-vn-red-600 hover:shadow-lg transition-all">
                                <div className="flex items-start">
                                    <span className="bg-vn-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                                    <div>
                                        <p className="text-gray-200 leading-relaxed">Không ngừng củng cố, tăng cường <strong className="text-vn-red-600">đoàn kết</strong> toàn Đảng, toàn dân, dân tộc, quốc tế</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border-l-4 border-vn-red-600 hover:shadow-lg transition-all">
                                <div className="flex items-start">
                                    <span className="bg-vn-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                                    <div>
                                        <p className="text-gray-200 leading-relaxed">Kết hợp <strong className="text-vn-red-600">sức mạnh dân tộc</strong> với <strong className="text-vn-red-600">sức mạnh thời đại</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border-l-4 border-vn-red-600 hover:shadow-lg transition-all">
                                <div className="flex items-start">
                                    <span className="bg-vn-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
                                    <div>
                                        <p className="text-gray-200 leading-relaxed">Sự lãnh đạo đúng đắn của Đảng là <strong className="text-vn-red-600">nhân tố hàng đầu</strong> bảo đảm thắng lợi của cách mạng Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                            <span className="bg-vn-yellow-600 text-gray-100 px-4 py-2 rounded-full font-bold text-lg mr-3">6</span>
                            <h5 className="text-xl font-bold text-vn-yellow-400">Đặc trưng cơ bản của mô hình XHCN Việt Nam</h5>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border-t-4 border-vn-red-600 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="text-3xl mb-2">👥</div>
                                <div className="font-bold text-vn-yellow-400 mb-2">1. Nhân dân làm chủ</div>
                                <div className="text-sm text-gray-400">Do nhân dân lao động làm chủ</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border-t-4 border-vn-red-600 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="text-3xl mb-2">📈</div>
                                <div className="font-bold text-vn-yellow-400 mb-2">2. Kinh tế phát triển</div>
                                <div className="text-sm text-gray-400">Nền kinh tế phát triển cao, lực lượng sản xuất hiện đại</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border-t-4 border-vn-red-600 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="text-3xl mb-2">🎭</div>
                                <div className="font-bold text-vn-yellow-400 mb-2">3. Văn hóa tiên tiến</div>
                                <div className="text-sm text-gray-400">Nền văn hóa tiên tiến, đậm đà bản sắc dân tộc</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border-t-4 border-vn-red-600 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="text-3xl mb-2">😊</div>
                                <div className="font-bold text-vn-yellow-400 mb-2">4. Con người hạnh phúc</div>
                                <div className="text-sm text-gray-400">Được giải phóng, tự do, có cuộc sống ấm no</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border-t-4 border-vn-red-600 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="text-3xl mb-2">🤝</div>
                                <div className="font-bold text-vn-yellow-400 mb-2">5. Dân tộc đoàn kết</div>
                                <div className="text-sm text-gray-400">Các dân tộc bình đẳng, đoàn kết, cùng tiến bộ</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border-t-4 border-vn-red-600 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="text-3xl mb-2">🌏</div>
                                <div className="font-bold text-vn-yellow-400 mb-2">6. Hợp tác quốc tế</div>
                                <div className="text-sm text-gray-400">Quan hệ hữu nghị với nhân dân các nước</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                            <span className="bg-gradient-to-r from-vn-red-600 to-vn-yellow-600 text-white px-4 py-2 rounded-full font-bold text-lg mr-3">7</span>
                            <h5 className="text-xl font-bold text-vn-yellow-400">Phương hướng lớn xây dựng CNXH</h5>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border-l-4 border-vn-red-600 hover:shadow-md transition-all">
                                <span className="bg-vn-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                                <div className="text-gray-200">Xây dựng <strong className="text-vn-red-600">Nhà nước XHCN</strong> của nhân dân, do nhân dân và vì nhân dân</div>
                            </div>
                            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border-l-4 border-vn-red-600 hover:shadow-md transition-all">
                                <span className="bg-vn-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                                <div className="text-gray-200">Phát triển lực lượng sản xuất, <strong className="text-vn-red-600">công nghiệp hóa</strong> đất nước theo hướng hiện đại</div>
                            </div>
                            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border-l-4 border-vn-red-600 hover:shadow-md transition-all">
                                <span className="bg-vn-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                                <div className="text-gray-200">Thiết lập <strong className="text-vn-red-600">quan hệ sản xuất</strong> phù hợp với sự phát triển của lực lượng sản xuất</div>
                            </div>
                            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border-l-4 border-vn-red-600 hover:shadow-md transition-all">
                                <span className="bg-vn-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                                <div className="text-gray-200">Tiến hành cách mạng XHCN trên lĩnh vực <strong className="text-vn-red-600">tư tưởng và văn hóa</strong></div>
                            </div>
                            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border-l-4 border-vn-red-600 hover:shadow-md transition-all">
                                <span className="bg-vn-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
                                <div className="text-gray-200">Thực hiện chính sách <strong className="text-vn-red-600">đại đoàn kết các dân tộc</strong></div>
                            </div>
                            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border-l-4 border-vn-red-600 hover:shadow-md transition-all">
                                <span className="bg-vn-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">6</span>
                                <div className="text-gray-200">Xây dựng CNXH và <strong className="text-vn-red-600">bảo vệ Tổ quốc</strong> là hai nhiệm vụ chiến lược</div>
                            </div>
                            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border-l-4 border-vn-red-600 hover:shadow-md transition-all">
                                <span className="bg-vn-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">7</span>
                                <div className="text-gray-200">Xây dựng Đảng <strong className="text-vn-red-600">trong sạch, vững mạnh</strong></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-6 bg-gradient-to-r from-vn-red-600 via-vn-red-700 to-vn-red-600 text-white rounded-xl shadow-2xl">
                        <h5 className="font-bold text-2xl mb-3 text-center flex items-center justify-center">
                            <span className="text-vn-yellow-600 text-3xl mr-2">🎯</span>
                            Mục tiêu tổng quát
                        </h5>
                        <p className="text-lg leading-relaxed text-center italic">
                            "Xây dựng xong về cơ bản những cơ sở kinh tế của CNXH, với kiến trúc thượng tầng về chính trị và tư tưởng, văn hóa phù hợp, làm cho nước ta trở thành một <strong className="text-vn-yellow-600">nước XHCN phồn vinh</strong>"
                        </p>
                    </div>
                </div>

                <div className="mb-8 p-6 md:p-8 bg-gradient-to-br from-vn-yellow-50 via-white to-vn-red-50 rounded-2xl border-4 border-vn-yellow-600 shadow-2xl">
                    <div className="text-center mb-6">
                        <h4 className="text-2xl md:text-3xl font-bold text-vn-yellow-400 mb-2 flex items-center justify-center">
                            <span className="text-4xl mr-3">📊</span>
                            Chiến lược ổn định và phát triển đến năm 2000
                        </h4>
                        <div className="inline-block bg-vn-yellow-600 text-gray-100 px-4 py-2 rounded-full font-semibold mt-2">
                            Văn kiện có tầm nhìn 10 năm - Lần đầu tiên trong lịch sử Đảng
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-l-4 border-vn-red-600">
                            <div className="flex items-center mb-4">
                                <span className="bg-vn-red-600 text-white p-3 rounded-full mr-3">
                                    <span className="text-2xl">🎯</span>
                                </span>
                                <h5 className="font-bold text-xl text-vn-yellow-400">Mục tiêu tổng quát</h5>
                            </div>
                            <ul className="space-y-3 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 font-bold mr-2">✓</span>
                                    <span><strong className="text-vn-red-600">Ra khỏi khủng hoảng</strong>, ổn định tình hình kinh tế - xã hội</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 font-bold mr-2">✓</span>
                                    <span>Phấn đấu <strong className="text-vn-red-600">vượt qua tình trạng nước nghèo</strong> và kém phát triển</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 font-bold mr-2">✓</span>
                                    <span><strong className="text-vn-yellow-400 text-lg">GDP năm 2000 tăng gấp đôi</strong> so với năm 1990</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-l-4 border-vn-yellow-600">
                            <div className="flex items-center mb-4">
                                <span className="bg-vn-yellow-600 text-gray-100 p-3 rounded-full mr-3">
                                    <span className="text-2xl">💡</span>
                                </span>
                                <h5 className="font-bold text-xl text-vn-yellow-400">Quan điểm chỉ đạo</h5>
                            </div>
                            <ul className="space-y-3 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-vn-yellow-600 font-bold text-xl mr-2">•</span>
                                    <span><strong className="text-vn-red-600">Đặt con người vào vị trí trung tâm</strong>, giải phóng sức sản xuất</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-yellow-600 font-bold text-xl mr-2">•</span>
                                    <span><strong className="text-vn-red-600">Khơi dậy mọi tiềm năng</strong> của cá nhân, tập thể và cộng đồng</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-yellow-600 font-bold text-xl mr-2">•</span>
                                    <span>Phát huy ý chí <strong className="text-vn-red-600">tự lực tự cường</strong>, cần kiệm xây dựng Tổ quốc</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-vn-red-600 to-vn-yellow-600 text-white p-6 rounded-xl shadow-xl">
                        <h5 className="font-bold text-xl mb-4 text-center">⚡ Nội dung cốt lõi của Chiến lược</h5>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-gray-800 bg-opacity-20 p-4 rounded-lg">
                                <div className="font-bold mb-2">🏭 Kinh tế</div>
                                <p>Nhiều thành phần kinh tế, vận động theo cơ chế thị trường có sự quản lý của Nhà nước</p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-20 p-4 rounded-lg">
                                <div className="font-bold mb-2">⚖️ Quyền lợi</div>
                                <p>Tự do kinh doanh theo pháp luật, bảo hộ quyền sở hữu và thu nhập hợp pháp</p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-20 p-4 rounded-lg">
                                <div className="font-bold mb-2">💪 Tinh thần</div>
                                <p>Ra sức làm giàu cho mình và cho đất nước</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8 bg-gradient-to-r from-vn-yellow-100 via-orange-50 to-vn-red-100 rounded-2xl border-4 border-vn-yellow-600 shadow-2xl">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-vn-red-600 text-white p-4 rounded-full mr-4">
                            <span className="text-4xl">💡</span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-vn-yellow-400">Tư tưởng Hồ Chí Minh</h4>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-4">
                        <div className="text-center mb-3">
                            <span className="bg-vn-yellow-600 text-gray-100 px-4 py-2 rounded-full font-bold inline-block">
                                🌟 Sự kiện lịch sử đầu tiên
                            </span>
                        </div>
                        <p className="text-gray-100 leading-relaxed text-lg">
                            Lần đầu tiên Đảng <strong className="text-vn-yellow-400">nêu lên khái niệm tư tưởng Hồ Chí Minh</strong>
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-vn-red-600 to-vn-red-700 p-6 rounded-xl text-white shadow-xl">
                        <div className="text-center mb-3">
                            <span className="text-vn-yellow-600 text-3xl">📜</span>
                        </div>
                        <p className="text-center text-lg md:text-xl leading-relaxed italic">
                            <span className="text-vn-yellow-600 text-2xl">"</span>
                            Đảng Cộng sản Việt Nam lấy <strong className="text-vn-yellow-600">chủ nghĩa Mác - Lênin</strong> và
                            <strong className="text-vn-yellow-600"> tư tưởng Hồ Chí Minh</strong> là nền tảng tư tưởng và kim chỉ nam cho hành động...
                            <span className="text-vn-yellow-600 text-2xl">"</span>
                        </p>
                    </div>
                </div>

                <div className="mt-8 p-6 md:p-8 bg-gray-800 rounded-2xl shadow-xl border-l-8 border-vn-red-600">
                    <h4 className="text-2xl font-bold text-vn-yellow-400 mb-6 flex items-center">
                        <span className="bg-vn-red-600 text-white p-3 rounded-full mr-3">
                            <span className="text-2xl">📋</span>
                        </span>
                        Tổng kết 5 năm đổi mới (1986-1991) - Tiếp tục đẩy mạnh
                    </h4>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Cột 1 */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border-t-4 border-vn-red-600">
                            <h5 className="font-bold text-lg text-vn-yellow-400 mb-4 flex items-center">
                                <span className="text-2xl mr-2">🌾</span> Kinh tế
                            </h5>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span>Nông nghiệp là <strong className="text-vn-red-600">mặt trận hàng đầu</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span>Kinh tế hàng hóa nhiều thành phần, <strong className="text-vn-red-600">cơ chế thị trường</strong> có quản lý</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span>Kết hợp phát triển kinh tế với văn hóa, xã hội</span>
                                </li>
                            </ul>
                        </div>

                        {/* ✅ Cột 2 (đã chỉnh lại cho giống cột 1 & 3) */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border-t-4 border-vn-red-600">
                            <h5 className="font-bold text-lg text-vn-yellow-400 mb-4 flex items-center">
                                <span className="text-2xl mr-2">🌏</span> Đối ngoại
                            </h5>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span><strong className="text-vn-red-600">Mở rộng</strong> quan hệ đối ngoại</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span>Hợp tác bình đẳng với <strong className="text-vn-red-600">tất cả các nước</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span>Phấn đấu vì hòa bình, độc lập và phát triển</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cột 3 */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border-t-4 border-vn-red-600">
                            <h5 className="font-bold text-lg text-vn-yellow-400 mb-4 flex items-center">
                                <span className="text-2xl mr-2">🏛️</span> Xây dựng Đảng
                            </h5>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span><strong className="text-vn-red-600">Vững mạnh</strong> về chính trị, tư tưởng, tổ chức</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span>Đổi mới cơ chế quản lý, <strong className="text-vn-red-600">cải cách</strong> bộ máy nhà nước</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-vn-red-600 mr-2">▪</span>
                                    <span>Đổi mới công tác quần chúng</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-vn-red-600 to-vn-red-700 text-white p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="text-vn-yellow-600 text-3xl mr-2">✨</span> Ý nghĩa lịch sử
                </h3>
                <p className="text-lg leading-relaxed">
                    Đại hội VII là <strong className="text-vn-yellow-600">"Đại hội của trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết"</strong>.
                    Đại hội đã hoạch định con đường quá độ lên chủ nghĩa xã hội phù hợp với đặc điểm của Việt Nam
                    và những giải pháp đưa đất nước ra khỏi khủng hoảng kinh tế - xã hội.
                </p>
            </div>
        </div>
    );
};

export default CongressVII;
