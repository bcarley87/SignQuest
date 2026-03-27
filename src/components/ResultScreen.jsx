const MAX_LIVES = 3;

function getRating(accuracy) {
  if (accuracy === 100) return { emoji: '🏆', label: 'Perfect!' };
  if (accuracy >= 80) return { emoji: '🌟', label: 'Excellent!' };
  if (accuracy >= 60) return { emoji: '👍', label: 'Good job!' };
  if (accuracy >= 40) return { emoji: '💪', label: 'Keep going!' };
  return { emoji: '📖', label: 'Keep practicing!' };
}

export default function ResultScreen({ result, onPracticeAgain, onChangeSettings }) {
  const { score, total, livesLeft } = result;
  const accuracy = Math.round((score / total) * 100);
  const rating = getRating(accuracy);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm flex flex-col gap-6 animate-slideUp">
        {/* Rating */}
        <div className="text-center">
          <div className="text-7xl mb-2">{rating.emoji}</div>
          <h2 className="text-3xl font-extrabold text-gray-900">{rating.label}</h2>
          <p className="text-gray-500 mt-1 text-sm">Quiz complete!</p>
        </div>

        {/* Score card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 flex flex-col gap-5">
          {/* Score */}
          <div className="text-center">
            <span className="text-6xl font-extrabold text-indigo-600">{score}</span>
            <span className="text-3xl font-bold text-gray-400">/{total}</span>
            <p className="text-gray-400 text-sm mt-1">questions correct</p>
          </div>

          {/* Accuracy */}
          <div>
            <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
              <span>Accuracy</span>
              <span className="text-indigo-600">{accuracy}%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-1000"
                style={{ width: `${accuracy}%` }}
              />
            </div>
          </div>

          {/* Lives */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-sm font-semibold text-gray-500">Lives remaining</span>
            <div className="flex gap-1">
              {Array.from({ length: MAX_LIVES }).map((_, i) => (
                <span key={i} className={`text-xl ${i < livesLeft ? 'opacity-100' : 'opacity-20 grayscale'}`}>❤️</span>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onPracticeAgain}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-base shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Practice Again 🔄
          </button>
          <button
            onClick={onChangeSettings}
            className="w-full py-3 rounded-2xl border-2 border-gray-200 bg-white text-gray-700 font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 hover:border-indigo-300"
          >
            Change Settings
          </button>
        </div>
      </div>
    </div>
  );
}
