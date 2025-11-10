// src/components/BubbleChatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BubbleChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "🌟 Xin chào! Tôi là AI chuyên về **Lịch sử Đảng - Chương 3 (1986-nay)**. Tôi có thể giúp bạn:\n\n• Hiểu rõ đường lối của Đảng qua các kỳ Đại hội\n• Phân tích bối cảnh và nội dung công cuộc Đổi Mới\n• Hệ thống hóa thành tựu và kinh nghiệm CNH, HĐH\n• Trả lời các câu hỏi về bất kỳ chủ đề nào!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey =
        (typeof import.meta !== "undefined" &&
          import.meta.env?.VITE_GEMINI_API_KEY) ||
        process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey) throw new Error("API key not found");

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

      const systemPrompt = `Bạn là một giảng viên AI chuyên về **Lịch sử Đảng Cộng sản Việt Nam – Chương 3, Phần II: Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)**.

**PHẠM VI KIẾN THỨC CHUYÊN MÔN:**

**I. Giai đoạn 1986-1996: Đổi mới toàn diện, đưa đất nước ra khỏi khủng hoảng**

1. **Đại hội VI (12/1986) - Khởi xướng đổi mới:**
   - Bối cảnh: Khủng hoảng kinh tế-xã hội (lạm phát 774%, tăng trưởng 1,6%)
   - 4 bài học lớn: Lấy dân làm gốc, xuất phát từ thực tế, kết hợp sức mạnh dân tộc với thời đại, xây dựng Đảng
   - Nội dung đổi mới: Kinh tế (3 chương trình lớn), quốc phòng-an ninh, đối ngoại, hệ thống chính trị
   - Tổng Bí thư: Nguyễn Văn Linh

2. **Đại hội VII (6/1991) - Thể chế hóa đổi mới:**
   - Bối cảnh: Sụp đổ XHCN Đông Âu, bao vây cấm vận
   - **Cương lĩnh 1991:** 5 bài học kinh nghiệm, 6 đặc trưng XHCN, 7 phương hướng xây dựng
   - Chiến lược đến 2000: Ra khỏi khủng hoảng, GDP tăng gấp đôi
   - Kinh tế hàng hóa nhiều thành phần, cơ chế thị trường có định hướng XHCN
   - Đối ngoại: "Việt Nam muốn là bạn với tất cả các nước"
   - Tổng Bí thư: Đỗ Mười

**QUY TẮC TRẢ LỜI QUAN TRỌNG:**

1. **KIỂM TRA TÍNH LIÊN QUAN TRƯỚC KHI TRẢ LỜI:**
   - Nếu câu hỏi KHÔNG liên quan đến Lịch sử Đảng (1986-nay), Đại hội Đảng, công cuộc đổi mới, CNH-HĐH, chính sách kinh tế-xã hội-đối ngoại của Việt Nam từ 1986 → TRẢ LỜI:
   
   "😊 Tôi là AI chuyên về **Lịch sử Đảng giai đoạn 1986-nay**. Câu hỏi của bạn dường như nằm ngoài phạm vi chuyên môn của tôi.
   
   Tôi có thể giúp bạn về:
   • Đại hội VI, VII và các Đại hội sau đó
   • Bối cảnh, nội dung công cuộc Đổi Mới
   • Thành tựu CNH, HĐH và hội nhập quốc tế
   • Các chính sách kinh tế-xã hội từ 1986 đến nay
   
   Bạn có câu hỏi nào về các chủ đề này không? 🇻🇳"

2. **XỬ LÝ THÔNG MINH CÁC TRƯỜNG HỢP ĐẶC BIỆT:**
   - Câu hỏi quá chung chung, mơ hồ (vd: "ngu", "ok", "ừ", "hello") → Gợi ý câu hỏi cụ thể
   - Câu hỏi về các giai đoạn TRƯỚC 1986 → Nhắc nhở phạm vi và gợi ý liên hệ với giai đoạn 1986-nay
   - Từ ngữ không phù hợp → Lịch sự nhắc nhở và chuyển hướng
   - Câu hỏi về chủ đề khác (thể thao, giải trí, công nghệ...) → Từ chối lịch sự và đưa ra gợi ý

3. **CHỈ TRẢ LỜI CHI TIẾT KHI:**
   - Câu hỏi RÕ RÀNG liên quan đến Lịch sử Đảng 1986-nay
   - Người dùng hỏi về các khái niệm, sự kiện, nhân vật, chính sách trong phạm vi
   - Yêu cầu phân tích, so sánh, giải thích trong phạm vi chuyên môn

4. **PHONG CÁCH TRẢ LỜI:**
   - Học thuật nhưng thân thiện, dễ hiểu
   - Cấu trúc rõ ràng với bullet points khi cần
   - Trích dẫn số liệu, khẩu hiệu cụ thể khi có thể
   - Luôn khuyến khích người dùng đặt câu hỏi sâu hơn trong phạm vi

Câu hỏi của người dùng: "${userMessage}"

**BƯỚC 1: Phân tích xem câu hỏi có liên quan đến Lịch sử Đảng (1986-nay) không?**
**BƯỚC 2: Nếu KHÔNG liên quan → Từ chối lịch sự + gợi ý. Nếu CÓ liên quan → Trả lời chi tiết.**`;

      const result = await model.generateContent(systemPrompt);
      const text = result.response.text();

      setMessages((prev) => [...prev, { role: "assistant", content: text }]);
      
      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❗ Xin lỗi, đã có lỗi xảy ra. Vui lòng kiểm tra API key hoặc thử lại sau.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "🌟 Cuộc trò chuyện đã được đặt lại. Hãy tiếp tục hỏi tôi về **Lịch sử Đảng (1986–nay)**!",
      },
    ]);
  };

  return (
    <>
      {/* Chatbot Window */}
      <div
        className={`fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border-2 border-red-700 flex flex-col transition-all duration-300 z-50 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-t-2xl flex-shrink-0">
          <h3 className="text-lg font-bold text-yellow-400 flex items-center gap-2">
            <span>💭</span>
            AI Lịch sử Đảng
          </h3>
          <div className="flex gap-2">
            <button
              onClick={resetChat}
              className="px-3 py-1 bg-white text-red-700 rounded-md text-xs font-medium hover:bg-gray-100 transition-colors"
            >
              Đặt lại
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center bg-white text-red-700 rounded-full hover:bg-gray-100 transition-colors font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start gap-2 max-w-[85%] ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow border border-gray-200 text-sm">
                  {message.role === "user" ? "👤" : "🤖"}
                </div>
                <div
                  className={`p-2.5 rounded-lg shadow-sm text-sm ${
                    message.role === "user"
                      ? "bg-red-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <ReactMarkdown
                      components={{
                        div: ({ children }) => (
                          <div className="prose prose-sm max-w-none prose-headings:text-red-600 prose-strong:text-red-700">
                            {children}
                          </div>
                        ),
                      }}
                      remarkPlugins={[remarkGfm]}
                    >
                      {message.content}
                    </ReactMarkdown>
                  ) : (
                    <span className="whitespace-pre-wrap">{message.content}</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white shadow border border-gray-200 text-sm">
                  🤖
                </div>
                <div className="bg-white p-2.5 rounded-lg rounded-bl-none border border-gray-200 shadow-sm">
                  <div className="flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-200 rounded-b-2xl flex-shrink-0">
          <div className="flex items-end gap-2 bg-gray-100 rounded-xl p-2 border border-gray-200 focus-within:border-red-500 transition-colors">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Hỏi về Lịch sử Đảng..."
              className="flex-1 border-none bg-transparent py-1 px-2 text-sm resize-none outline-none max-h-24 text-gray-800 placeholder-gray-400"
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-lg transition-all hover:not(:disabled):bg-red-700 hover:not(:disabled):scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed flex-shrink-0"
            >
              {isLoading ? "⏳" : "➤"}
            </button>
          </div>
        </div>
      </div>

      {/* Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-all duration-300 z-50 border-4 border-yellow-400 hover:shadow-red-500/50"
      >
        {isOpen ? (
          "✕"
        ) : (
          <>
            <span className="animate-pulse">💬</span>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 text-red-800 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </>
        )}
      </button>
    </>
  );
}