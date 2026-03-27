import { useState, useEffect } from 'react';
import SignImage from './SignImage';

const MAX_LIVES = 3;

export default function QuizScreen({ quiz, mode, livesEnabled = true, onFinish }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'

  const current = quiz[index];
  const total = quiz.length;

  useEffect(() => {
    if (!answered) return;
    const timer = setTimeout(() => {
      const newLives = (livesEnabled && feedback === 'wrong') ? lives - 1 : lives;
      const newScore = feedback === 'correct' ? score + 1 : score;
      const outOfLives = livesEnabled && newLives <= 0;
      if (index + 1 >= total || outOfLives) {
        onFinish({ score: newScore, total, livesLeft: Math.max(0, newLives) });
      } else {
        setLives(newLives);
        setScore(newScore);
        setIndex((i) => i + 1);
        setSelected(null);
        setAnswered(false);
        setFeedback(null);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [answered]);

  function handleChoice(choice) {
    if (answered) return;
    setSelected(choice.id);
    setAnswered(true);
    setFeedback(choice.id === current.correct.id ? 'correct' : 'wrong');
  }

  function choiceStateClass(choice) {
    if (!answered) return 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50';
    if (choice.id === current.correct.id) return 'border-green-400 bg-green-50 text-green-700';
    if (choice.id === selected) return 'border-red-400 bg-red-50 text-red-700 animate-shake';
    return 'border-gray-100 bg-gray-50 opacity-40';
  }

  const modeLabel = mode === 'asl-to-english' ? '👁️ ASL → English' : '✋ English → ASL';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      {/* Sticky header */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-1 min-w-[72px]">
          {livesEnabled
            ? Array.from({ length: MAX_LIVES }).map((_, i) => (
                <span key={i} className={`text-xl transition-all duration-300 ${i < lives ? 'opacity-100' : 'opacity-20 grayscale'}`}>❤️</span>
              ))
            : <span className="text-xs font-semibold text-gray-400">No lives</span>
          }
        </div>
        <span className="text-xs font-semibold text-gray-500">{modeLabel}</span>
        <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
          <span>⭐</span>
          <span>{score}</span>
        </div>
      </header>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-100">
        <div
          className="h-2 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-500"
          style={{ width: `${((index) / total) * 100}%` }}
        />
      </div>
      <div className="text-center text-xs text-gray-400 mt-1 font-medium">{index + 1} / {total}</div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 pb-24 gap-6">
        {mode === 'asl-to-english' ? (
          <ASLtoEnglish current={current} answered={answered} onChoice={handleChoice} choiceStateClass={choiceStateClass} />
        ) : (
          <EnglishToASL current={current} answered={answered} onChoice={handleChoice} choiceStateClass={choiceStateClass} />
        )}
      </main>

      {/* Bottom feedback banner */}
      {answered && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-30 py-4 px-6 text-center font-bold text-lg animate-slideUp
            ${feedback === 'correct' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
        >
          {feedback === 'correct'
            ? '✅ Correct!'
            : `❌ It was "${current.correct.word}"`}
        </div>
      )}
    </div>
  );
}

function ASLtoEnglish({ current, answered, onChoice, choiceStateClass }) {
  return (
    <>
      <div className="animate-bounceIn">
        <SignImage sign={current.correct} size="xl" className="rounded-2xl shadow-md" />
      </div>
      <p className="text-lg font-semibold text-gray-600">What sign is this?</p>
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {current.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoice(choice)}
            className={`p-4 rounded-2xl border-2 font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${choiceStateClass(choice)}`}
          >
            {choice.word}
          </button>
        ))}
      </div>
    </>
  );
}

function EnglishToASL({ current, answered, onChoice, choiceStateClass }) {
  return (
    <>
      <div className="bg-white rounded-2xl border-2 border-indigo-200 shadow-md px-10 py-6 animate-bounceIn">
        <p className="text-3xl font-extrabold text-indigo-700 tracking-tight">{current.correct.word}</p>
        <p className="text-sm text-gray-400 mt-1">{current.correct.hint}</p>
      </div>
      <p className="text-lg font-semibold text-gray-600">Find the sign for <span className="text-indigo-600">"{current.correct.word}"</span></p>
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {current.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoice(choice)}
            className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${choiceStateClass(choice)}`}
          >
            <SignImage sign={choice} size="md" />
            {answered && (
              <span className="text-xs font-semibold text-gray-600 animate-fadeIn">{choice.word}</span>
            )}
          </button>
        ))}
      </div>
    </>
  );
}
