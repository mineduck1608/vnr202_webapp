import React, { useState, useEffect, useRef } from 'react';
import '../styles/Crossword.css';

interface CrosswordTeacherProps {
  gameStarted: boolean;
  timeLimit: number;
  onStartGame: () => void;
  onBack: () => void;
  onTimeLimitChange: (time: number) => void;
}

interface Cell {
  letter: string;
  number?: number;
  isBlack: boolean;
  row: number;
  col: number;
}

const CrosswordTeacher: React.FC<CrosswordTeacherProps> = ({
  gameStarted,
  timeLimit,
  onStartGame,
  onBack,
  onTimeLimitChange,
}) => {
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [questionTimer, setQuestionTimer] = useState<number>(60);
  const [isQuestionActive, setIsQuestionActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Định nghĩa các từ giống như trong CrosswordStudent
  const wordsDefinition = [
    // ACROSS (Ngang)
    { word: 'HOINHAP', row: 1, col: 3, direction: 'across', number: 3, clue: 'Quá trình mở rộng quan hệ hợp tác quốc tế' },
    { word: 'LUONGTHUC', row: 2, col: 12, direction: 'across', number: 5, clue: 'Mặt hàng từng khan hiếm, đến năm 1989 đã đủ ăn, có dự trữ và xuất khẩu' },
    { word: 'THITRUONG', row: 4, col: 6, direction: 'across', number: 7, clue: 'Cơ chế vận hành nền kinh tế có sự quản lý của Nhà nước' },
    { word: 'LAMPHAT', row: 5, col: 19, direction: 'across', number: 9, clue: 'Tình trạng giá cả tăng cao kỷ lục 774% vào năm 1986' },
    { word: 'KINHTE', row: 6, col: 0, direction: 'across', number: 10, clue: 'Lĩnh vực trọng tâm hàng đầu của công cuộc đổi mới' },
    { word: 'NONGNGHIEP', row: 7, col: 14, direction: 'across', number: 11, clue: 'Ngành được xác định là "mặt trận hàng đầu" trong giai đoạn đầu đổi mới' },
    { word: 'DANCHU', row: 9, col: 3, direction: 'across', number: 13, clue: 'Khẩu hiệu "Dân biết, dân bàn, dân làm, dân kiểm tra" thể hiện tinh thần này' },
    { word: 'SANGTAO', row: 12, col: 21, direction: 'across', number: 15, clue: 'Động lực quan trọng để phát triển, đi liền với việc tiếp thu cái mới' },
    { word: 'DAIHOI', row: 16, col: 22, direction: 'across', number: 16, clue: 'Sự kiện quan trọng nhất của Đảng, nơi thông qua các nghị quyết lớn' },
    // DOWN (Dọc)
    { word: 'DOANKET', row: 0, col: 4, direction: 'down', number: 1, clue: 'Bài học lớn, yêu cầu phải củng cố toàn Đảng, toàn dân và dân tộc' },
    { word: 'CUONGLINH', row: 0, col: 14, direction: 'down', number: 2, clue: 'Văn kiện nền tảng xác định mục tiêu, con đường xây dựng CNXH' },
    { word: 'HOCHIMINH', row: 1, col: 7, direction: 'down', number: 4, clue: 'Tư tưởng cùng với Chủ nghĩa Mác - Lênin được xác định là nền tảng của Đảng' },
    { word: 'XUATKHAU', row: 3, col: 11, direction: 'down', number: 6, clue: 'Một trong 3 chương trình kinh tế lớn, cùng lương thực và hàng tiêu dùng' },
    { word: 'PHAPQUYEN', row: 4, col: 23, direction: 'down', number: 8, clue: 'Mô hình Nhà nước lần đầu được khẳng định chủ trương xây dựng tại Hội nghị giữa nhiệm kỳ 1994' },
    { word: 'CAMVAN', row: 8, col: 4, direction: 'down', number: 12, clue: 'Một trong những biện pháp mà các thế lực thù địch sử dụng để chống phá Việt Nam' },
    { word: 'DOIMOI', row: 11, col: 27, direction: 'down', number: 14, clue: 'Đường lối cải cách toàn diện bắt đầu từ năm 1986' },
  ];

  // Khởi tạo grid
  const initializeGrid = (): Cell[][] => {
    const grid: Cell[][] = [];
    const ROWS = 17;
    const COLS = 28;
    
    for (let i = 0; i < ROWS; i++) {
      grid[i] = [];
      for (let j = 0; j < COLS; j++) {
        grid[i][j] = {
          letter: '',
          isBlack: false,
          row: i,
          col: j,
        };
      }
    }

    // Điền các từ vào grid
    wordsDefinition.forEach(({ word, row, col, direction, number }) => {
      for (let i = 0; i < word.length; i++) {
        const currentRow = direction === 'across' ? row : row + i;
        const currentCol = direction === 'across' ? col + i : col;
        
        if (currentRow < ROWS && currentCol < COLS) {
          grid[currentRow][currentCol].letter = word[i];
          if (i === 0) {
            grid[currentRow][currentCol].number = number;
          }
        }
      }
    });

    // Đánh dấu ô đen
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (grid[i][j].letter === '') {
          grid[i][j].isBlack = true;
        }
      }
    }

    return grid;
  };

  const [grid] = useState<Cell[][]>(initializeGrid());

  // Timer cho câu hỏi 60s
  useEffect(() => {
    if (isQuestionActive && questionTimer > 0) {
      timerRef.current = setInterval(() => {
        setQuestionTimer(prev => {
          if (prev <= 1) {
            setIsQuestionActive(false);
            setSelectedWord(null);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isQuestionActive, questionTimer]);

  const handleCellClick = (row: number, col: number) => {
    const cell = grid[row][col];
    if (cell.isBlack || !cell.number) return;

    // Tìm từ tương ứng với số này
    const word = wordsDefinition.find(w => w.number === cell.number);
    if (word) {
      setSelectedWord(word.number);
      setIsQuestionActive(true);
      setQuestionTimer(60);
    }
  };

  const handleCloseQuestion = () => {
    setIsQuestionActive(false);
    setSelectedWord(null);
    setQuestionTimer(60);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const getCurrentWord = () => {
    return wordsDefinition.find(w => w.number === selectedWord);
  };

  const isCellInSelectedWord = (row: number, col: number): boolean => {
    if (!selectedWord) return false;
    
    const word = wordsDefinition.find(w => w.number === selectedWord);
    if (!word) return false;

    for (let i = 0; i < word.word.length; i++) {
      const currentRow = word.direction === 'across' ? word.row : word.row + i;
      const currentCol = word.direction === 'across' ? word.col + i : word.col;
      
      if (currentRow === row && currentCol === col) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="crossword-teacher">
      <div className="teacher-header">
        <button className="back-button" onClick={onBack}>
          ← Quay lại
        </button>
        <h1 className="teacher-title">🎓 Chế độ Giáo viên</h1>
      </div>

      <div className="teacher-instructions">
        <p>💡 <strong>Hướng dẫn:</strong> Click vào số câu hỏi trên bảng để hiển thị câu hỏi với thời gian 60 giây</p>
      </div>

      {/* Crossword Grid */}
      <div className="teacher-crossword-container">
        <div className="teacher-crossword-grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="crossword-row">
              {row.map((cell, colIndex) => {
                const isSelected = isCellInSelectedWord(rowIndex, colIndex);
                const isClickable = !cell.isBlack && cell.number;

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`crossword-cell teacher-cell ${cell.isBlack ? 'black-cell' : ''} ${isSelected ? 'selected-word-cell' : ''} ${isClickable ? 'clickable-cell' : ''}`}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {!cell.isBlack && (
                      <>
                        {cell.number && (
                          <span className="cell-number teacher-cell-number">{cell.number}</span>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Question Modal */}
      {isQuestionActive && getCurrentWord() && (
        <div className="question-modal-overlay" onClick={handleCloseQuestion}>
          <div className="question-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseQuestion}>
              ✕
            </button>
            
            <div className="question-header">
              <div className="question-number-badge">
                Câu {getCurrentWord()!.number}
              </div>
              <div className="question-direction-badge">
                {getCurrentWord()!.direction === 'across' ? 'NGANG' : 'DỌC'}
              </div>
            </div>

            <div className="question-timer-display">
              <div className="timer-circle">
                <div className={`timer-value-large ${questionTimer <= 10 ? 'timer-critical' : questionTimer <= 30 ? 'timer-warning' : ''}`}>
                  {questionTimer}s
                </div>
              </div>
            </div>

            <div className="question-content">
              <h3 className="question-title">Câu hỏi:</h3>
              <p className="question-text">
                {getCurrentWord()!.clue}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrosswordTeacher;
