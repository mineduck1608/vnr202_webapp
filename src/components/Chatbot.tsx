// src/components/HcmAiChatbot.tsx
import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Thêm plugin để hỗ trợ GFM (tables, strikethrough)

export default function HcmAiChatbot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        '🌟 Xin chào! Tôi là AI chuyên về môn **Tư tưởng Hồ Chí Minh (HCM202)**. Tôi có thể giúp bạn:\n\n• Hiểu sâu về tư tưởng và quan điểm của Chủ tịch Hồ Chí Minh\n• Giải thích các lý luận và học thuyết trong chương trình HCM202\n• Phân tích tác phẩm và di sản tinh thần của Bác Hồ\n• Liên hệ tư tưởng HCM với thực tiễn hiện đại\n\nHãy đặt câu hỏi về bất kỳ chủ đề nào trong chương trình học!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Tự động cuộn xuống khi có tin nhắn mới
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Tự động điều chỉnh chiều cao textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API key not found in environment variables');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

      // System prompt cho HCM202
      const systemPrompt = `Bạn là một giảng viên chuyên về môn Tư tưởng Hồ Chí Minh (HCM202). Hãy trả lời câu hỏi một cách học thuật, chính xác và dễ hiểu, tập trung vào:

1. Các quan điểm và tư tưởng cốt lõi của Chủ tịch Hồ Chí Minh
2. Lý luận về độc lập dân tộc, dân chủ và chủ nghĩa xã hội
3. Tư tưởng về đạo đức, văn hóa và giáo dục
4. Quan điểm về đại đoàn kết dân tộc và quốc tế
5. Phương pháp tư duy và lãnh đạo của Bác Hồ
6. Ứng dụng tư tưởng HCM trong thời đại hiện tại

Trả lời bằng tiếng Việt, có cấu trúc rõ ràng và dẫn chứng cụ thể khi cần thiết.

Câu hỏi: ${userMessage}`;

      const result = await model.generateContent(systemPrompt);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Xin lỗi, đã có lỗi xảy ra khi kết nối với AI. Vui lòng kiểm tra API key trong file .env hoặc thử lại sau.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e as any); // Trigger form submit
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content:
          '🌟 Cuộc trò chuyện đã được đặt lại. Hãy tiếp tục hỏi tôi về **Tư tưởng Hồ Chí Minh (HCM202)**! Tôi sẵn sàng hỗ trợ bạn tìm hiểu sâu hơn về di sản tinh thần vĩ đại của Bác Hồ.',
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[70vh] max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-vn-red-700 animate-[fadeIn_0.6s_ease-in]">
      
      {/* Chat Header */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-vn-red-700 to-vn-red-800 text-white shadow-md flex-shrink-0">
        <h2 className="text-xl md:text-2xl font-bold text-vn-yellow-400 flex items-center gap-2">
          <span className="animate-[float_3s_ease-in-out_infinite]">💭</span>
          Hỏi AI về Tư tưởng Hồ Chí Minh
        </h2>
        <button
          onClick={resetChat}
          className="px-4 py-2 bg-white text-vn-red-700 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors shadow"
        >
          Đặt lại
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-100">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`flex items-start gap-3 max-w-[85%] ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow border border-gray-200 text-xl">
                {message.role === 'user' ? '👤' : '🤖'}
              </div>
              <div
                className={`p-3 rounded-lg shadow-md ${
                  message.role === 'user'
                    ? 'bg-vn-red-600 text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                }`}
              >
                {message.role === 'assistant' ? (
                  <ReactMarkdown
                    components={{
                      // @ts-ignore
                      div: ({node, ...props}) => <div className="prose prose-sm max-w-none prose-headings:text-vn-red-600 prose-strong:text-vn-red-700 prose-a:text-vn-red-500 hover:prose-a:text-vn-red-700" {...props} />
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

        {/* Typing Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow border border-gray-200 text-xl">
                🤖
              </div>
              <div className="bg-white text-gray-800 p-3 rounded-lg rounded-bl-none border border-gray-200 shadow-md">
                <div className="flex gap-1.5 items-center">
                  <span className="w-2 h-2 rounded-full bg-vn-red-500 animate-typing"></span>
                  <span className="w-2 h-2 rounded-full bg-vn-red-500 animate-typing animation-delay-[200ms]"></span>
                  <span className="w-2 h-2 rounded-full bg-vn-red-500 animate-typing animation-delay-[400ms]"></span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Form */}
      <form onSubmit={sendMessage} className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
        <div className="flex items-end gap-3 bg-gray-100 rounded-2xl p-2 border-2 border-gray-200 focus-within:border-vn-red-500 transition-colors">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Hỏi về tư tưởng HCM..."
            className="flex-1 border-none bg-transparent py-2 px-3 text-base resize-none outline-none max-h-32 scrollbar-thin scrollbar-thumb-gray-300"
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full border-none bg-vn-red-600 text-white cursor-pointer flex items-center justify-center text-xl transition-all hover:not(:disabled):bg-vn-red-700 hover:not(:disabled):scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed flex-shrink-0"
          >
            {isLoading ? '⏳' : '➤'}
          </button>
        </div>
      </form>
    </div>
  );
}