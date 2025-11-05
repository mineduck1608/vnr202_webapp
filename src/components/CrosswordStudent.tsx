import React, { useState, useRef } from 'react';
import '../styles/Crossword.css';

interface CrosswordStudentProps {
  onTeacherAccess: () => void;
}

interface Cell {
  letter: string;
  number?: number;
  isBlack: boolean;
  userInput: string;
  row: number;
  col: number;
}

const CrosswordStudent: React.FC<CrosswordStudentProps> = ({ onTeacherAccess }) => {
  // Định nghĩa các từ dựa trên hình ảnh crossword (tọa độ bắt đầu từ 0)
  const wordsDefinition = [
    // ACROSS (Ngang)
    { word: 'HOINHAP', row: 1, col: 3, direction: 'across', number: 3},
    { word: 'LUONGTHUC', row: 2, col: 12, direction: 'across', number: 5 },
    { word: 'THITRUONG', row: 4, col: 6, direction: 'across', number: 7 },
    { word: 'LAMPHAT', row: 5, col: 19, direction: 'across', number: 9 },
    { word: 'KINHTE', row: 6, col: 0, direction: 'across', number: 10 },
    { word: 'NONGNGHIEP', row: 7, col: 14, direction: 'across', number: 11 },
    { word: 'DANCHU', row: 9, col: 3, direction: 'across', number: 13 },    
    { word: 'SANGTAO', row: 12, col: 21, direction: 'across', number: 15 },
    { word: 'DAIHOI', row: 16, col: 22, direction: 'across', number: 16 },
    // DOWN (Dọc)
    { word: 'DOANKET', row: 0, col: 4, direction: 'down', number: 1 },
    { word: 'CUONGLINH', row: 0, col: 14, direction: 'down', number: 2 },
    { word: 'HOCHIMINH', row: 1, col: 7, direction: 'down', number: 4 },
    { word: 'XUATKHAU', row: 3, col: 11, direction: 'down', number: 6 },
    { word: 'PHAPQUYEN', row: 4, col: 23, direction: 'down', number: 8 },
    { word: 'CAMVAN', row: 8, col: 4, direction: 'down', number: 12 },
    { word: 'DOIMOI', row: 11, col: 27, direction: 'down', number: 14 },
  ];

  // Khởi tạo grid dựa trên layout trong hình
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
          userInput: '',
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

    // Đánh dấu ô đen (ô không có chữ)
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (grid[i][j].letter === '') {
          grid[i][j].isBlack = true;
        }
      }
    }

    return grid;
  };

  const [grid, setGrid] = useState<Cell[][]>(initializeGrid());
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [direction, setDirection] = useState<'across' | 'down'>('across');
  const [correctWords, setCorrectWords] = useState<Set<number>>(new Set());
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleCellClick = (row: number, col: number) => {
    if (!grid[row][col].isBlack) {
      if (selectedCell && selectedCell.row === row && selectedCell.col === col) {
        // Toggle direction nếu click vào ô đang chọn
        setDirection(prev => prev === 'across' ? 'down' : 'across');
      } else {
        setSelectedCell({ row, col });
      }
    }
  };

  const handleInputChange = (row: number, col: number, value: string) => {
    if (value.length <= 1 && /^[A-Za-z]?$/.test(value)) {
      const newGrid = [...grid];
      newGrid[row][col].userInput = value.toUpperCase();
      setGrid(newGrid);

      // Tự động chuyển sang ô tiếp theo
      if (value) {
        moveToNextCell(row, col);
      }
    }
  };

  const moveToNextCell = (row: number, col: number) => {
    const ROWS = 17;
    const COLS = 28;
    let nextRow = row;
    let nextCol = col;

    if (direction === 'across') {
      nextCol += 1;
      while (nextCol < COLS && grid[nextRow] && grid[nextRow][nextCol] && grid[nextRow][nextCol].isBlack) {
        nextCol += 1;
      }
      if (nextCol >= COLS) return;
    } else {
      nextRow += 1;
      while (nextRow < ROWS && grid[nextRow] && grid[nextRow][nextCol] && grid[nextRow][nextCol].isBlack) {
        nextRow += 1;
      }
      if (nextRow >= ROWS) return;
    }

    setSelectedCell({ row: nextRow, col: nextCol });
    const key = `${nextRow}-${nextCol}`;
    inputRefs.current[key]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (e.key === 'Backspace' && !grid[row][col].userInput) {
      // Di chuyển về ô trước khi xóa
      let prevRow = row;
      let prevCol = col;

      if (direction === 'across') {
        prevCol -= 1;
        while (prevCol >= 0 && grid[prevRow][prevCol].isBlack) {
          prevCol -= 1;
        }
        if (prevCol >= 0) {
          setSelectedCell({ row: prevRow, col: prevCol });
          const key = `${prevRow}-${prevCol}`;
          inputRefs.current[key]?.focus();
        }
      } else {
        prevRow -= 1;
        while (prevRow >= 0 && grid[prevRow][prevCol].isBlack) {
          prevRow -= 1;
        }
        if (prevRow >= 0) {
          setSelectedCell({ row: prevRow, col: prevCol });
          const key = `${prevRow}-${prevCol}`;
          inputRefs.current[key]?.focus();
        }
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const COLS = 28;
      let nextCol = col + 1;
      while (nextCol < COLS && grid[row][nextCol] && grid[row][nextCol].isBlack) nextCol++;
      if (nextCol < COLS && grid[row][nextCol]) {
        setSelectedCell({ row, col: nextCol });
        setDirection('across');
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      let nextCol = col - 1;
      while (nextCol >= 0 && grid[row][nextCol] && grid[row][nextCol].isBlack) nextCol--;
      if (nextCol >= 0 && grid[row][nextCol]) {
        setSelectedCell({ row, col: nextCol });
        setDirection('across');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const ROWS = 17;
      let nextRow = row + 1;
      while (nextRow < ROWS && grid[nextRow] && grid[nextRow][col] && grid[nextRow][col].isBlack) nextRow++;
      if (nextRow < ROWS && grid[nextRow] && grid[nextRow][col]) {
        setSelectedCell({ row: nextRow, col });
        setDirection('down');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      let nextRow = row - 1;
      while (nextRow >= 0 && grid[nextRow] && grid[nextRow][col] && grid[nextRow][col].isBlack) nextRow--;
      if (nextRow >= 0 && grid[nextRow] && grid[nextRow][col]) {
        setSelectedCell({ row: nextRow, col });
        setDirection('down');
      }
    }
  };

  // Kiểm tra một từ có đúng hoàn toàn không
  const isWordCorrect = (wordDef: typeof wordsDefinition[0]): boolean => {
    const { word, row, col, direction } = wordDef;
    const ROWS = 17;
    const COLS = 28;
    
    for (let i = 0; i < word.length; i++) {
      const currentRow = direction === 'across' ? row : row + i;
      const currentCol = direction === 'across' ? col + i : col;
      
      if (currentRow >= ROWS || currentCol >= COLS) {
        return false;
      }
      
      if (grid[currentRow][currentCol].userInput !== word[i]) {
        return false;
      }
    }
    return true;
  };

  // Kiểm tra xem một ô có thuộc từ nào đã đúng không
  const isCellInCorrectWord = (row: number, col: number): boolean => {
    for (const wordDef of wordsDefinition) {
      if (correctWords.has(wordDef.number)) {
        const { word, row: startRow, col: startCol, direction } = wordDef;
        
        for (let i = 0; i < word.length; i++) {
          const currentRow = direction === 'across' ? startRow : startRow + i;
          const currentCol = direction === 'across' ? startCol + i : startCol;
          
          if (currentRow === row && currentCol === col) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const checkAnswers = () => {
    const newCorrectWords = new Set<number>();
    let correctWordsCount = 0;
    let totalWords = wordsDefinition.length;

    // Kiểm tra từng từ
    wordsDefinition.forEach((wordDef) => {
      if (isWordCorrect(wordDef)) {
        newCorrectWords.add(wordDef.number);
        correctWordsCount++;
      }
    });

    setCorrectWords(newCorrectWords);

    const percentage = Math.round((correctWordsCount / totalWords) * 100);
    alert(`Kết quả: ${correctWordsCount}/${totalWords} câu đúng (${percentage}%)`);
  };

  const clearGrid = () => {
    const newGrid = grid.map(row =>
      row.map(cell => ({ ...cell, userInput: '' }))
    );
    setGrid(newGrid);
    setCorrectWords(new Set());
  };

  return (
    <div className="crossword-student">
      <div className="student-header">
        <div className="header-left">
          <h1 
            className="student-title-main" 
            onDoubleClick={onTeacherAccess}
            title="Double-click để truy cập trang giáo viên"
          >
            🎯 TRÒ CHƠI Ô CHỮ
          </h1>
          <p className="student-subtitle">Lịch sử Đảng Cộng Sản Việt Nam</p>
        </div>
        <div className="student-controls">
          <button className="control-button check-button" onClick={checkAnswers}>
            ✓ Kiểm tra
          </button>
          <button className="control-button clear-button" onClick={clearGrid}>
            ✗ Làm lại
          </button>
        </div>
      </div>

      <div className="crossword-grid-container">
        <div className="crossword-grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="crossword-row">
              {row.map((cell, colIndex) => {
                const key = `${rowIndex}-${colIndex}`;
                const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                const isCorrect = isCellInCorrectWord(rowIndex, colIndex);

                return (
                  <div
                    key={key}
                    className={`crossword-cell ${cell.isBlack ? 'black-cell' : ''} ${isSelected ? 'selected-cell' : ''} ${isCorrect ? 'correct-cell' : ''}`}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {!cell.isBlack && (
                      <>
                        {cell.number && (
                          <span className="cell-number">{cell.number}</span>
                        )}
                        <input
                          ref={(el) => {
                            inputRefs.current[key] = el;
                          }}
                          type="text"
                          maxLength={1}
                          value={cell.userInput}
                          onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                          className="cell-input"
                          disabled={cell.isBlack}
                        />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="instructions">
        <h3>Hướng dẫn:</h3>
        <ul>
          <li>Click vào ô để chọn và nhập chữ</li>
          <li>Click lại vào ô đã chọn để đổi hướng (ngang/dọc)</li>
          <li>Sử dụng phím mũi tên để di chuyển</li>
          <li>Nhấn "Kiểm tra" để xem kết quả</li>
        </ul>
      </div>
    </div>
  );
};

export default CrosswordStudent;
