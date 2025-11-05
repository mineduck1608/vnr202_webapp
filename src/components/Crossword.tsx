import React, { useState, useEffect } from 'react';
import CrosswordTeacher from './CrosswordTeacher';
import CrosswordStudent from './CrosswordStudent';
import '../styles/Crossword.css';

const Crossword: React.FC = () => {
  const [view, setView] = useState<'student' | 'teacher'>('student');
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLimit, setTimeLimit] = useState(30); // phút
  const [showTeacherPrompt, setShowTeacherPrompt] = useState(false);
  const [password, setPassword] = useState('');

  // Phím tắt Ctrl+Shift+T để mở prompt giáo viên
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        setShowTeacherPrompt(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleBackToStudent = () => {
    setView('student');
    setGameStarted(false);
  };

  const handleTeacherLogin = () => {
    // Mật khẩu đơn giản: "giaovien" hoặc có thể thay đổi
    if (password.toLowerCase() === 'mchacchansebietpass' || password === 'mdbietpassdau') {
      setView('teacher');
      setShowTeacherPrompt(false);
      setPassword('');
    } else {
      alert('Mật khẩu không đúng!');
      setPassword('');
    }
  };

  const handleClosePrompt = () => {
    setShowTeacherPrompt(false);
    setPassword('');
  };

  if (view === 'teacher') {
    return (
      <CrosswordTeacher
        gameStarted={gameStarted}
        timeLimit={timeLimit}
        onStartGame={handleStartGame}
        onBack={handleBackToStudent}
        onTimeLimitChange={setTimeLimit}
      />
    );
  }

  return (
    <>
      <CrosswordStudent
        onTeacherAccess={() => setShowTeacherPrompt(true)}
      />
      
      {/* Modal đăng nhập giáo viên */}
      {showTeacherPrompt && (
        <div className="teacher-modal-overlay" onClick={handleClosePrompt}>
          <div className="teacher-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="teacher-modal-title">🔐 Truy cập Giáo viên</h2>
            <p className="teacher-modal-subtitle">Nhập mật khẩu để vào trang điều khiển</p>
            
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleTeacherLogin()}
              className="teacher-password-input"
              autoFocus
            />
            
            <div className="teacher-modal-buttons">
              <button className="teacher-modal-button login-button" onClick={handleTeacherLogin}>
                Đăng nhập
              </button>
              <button className="teacher-modal-button cancel-button" onClick={handleClosePrompt}>
                Hủy
              </button>
            </div>
            
            <p className="teacher-modal-hint">
              💡 Mẹo: Nhấn Ctrl + Shift + T để mở nhanh
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Crossword;
