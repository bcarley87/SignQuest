export default function HomeScreen({ config, onConfigChange, onStart }) {
  const { mode, category, quizLength, livesEnabled } = config;

  function card(active, onClick, children) {
    return (
      <button
        onClick={onClick}
        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-left w-full
          ${active
            ? 'border-indigo-500 ring-2 ring-indigo-300 bg-indigo-50 scale-[1.02]'
            : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'
          }`}
      >
        {children}
      </button>
    );
  }

  function pill(active, onClick, label) {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-2 rounded-full border-2 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full text-center
          ${active
            ? 'border-indigo-500 bg-indigo-500 text-white ring-2 ring-indigo-300'
            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
          }`}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🤟</div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">SignQuest</h1>
          <p className="text-gray-500 mt-2 text-base">Practice ASL, one sign at a time</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 flex flex-col gap-6">
          {/* Practice Mode */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Practice Mode</p>
            <div className="grid grid-cols-2 gap-3">
              {card(mode === 'asl-to-english', () => onConfigChange('mode', 'asl-to-english'),
                <>
                  <span className="text-2xl">👁️</span>
                  <span className="font-bold text-gray-800 text-sm">ASL → English</span>
                  <span className="text-xs text-gray-500">See a sign, pick the English word</span>
                </>
              )}
              {card(mode === 'english-to-asl', () => onConfigChange('mode', 'english-to-asl'),
                <>
                  <span className="text-2xl">✋</span>
                  <span className="font-bold text-gray-800 text-sm">English → ASL</span>
                  <span className="text-xs text-gray-500">See an English word, pick the correct sign</span>
                </>
              )}
            </div>
          </section>

          {/* Category */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Category</p>
            <div className="grid grid-cols-3 gap-3">
              {card(category === 'alphabet', () => onConfigChange('category', 'alphabet'),
                <>
                  <span className="text-2xl">🔤</span>
                  <span className="font-bold text-gray-800 text-xs text-center">Alphabet</span>
                </>
              )}
              {card(category === 'words', () => onConfigChange('category', 'words'),
                <>
                  <span className="text-2xl">💬</span>
                  <span className="font-bold text-gray-800 text-xs text-center">Common Words</span>
                </>
              )}
              {card(category === 'both', () => onConfigChange('category', 'both'),
                <>
                  <span className="text-2xl">🌟</span>
                  <span className="font-bold text-gray-800 text-xs text-center">Both</span>
                </>
              )}
            </div>
          </section>

          {/* Quiz Length */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Quiz Length</p>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 20, 30].map((n) => pill(quizLength === n, () => onConfigChange('quizLength', n), `${n}`))}
            </div>
          </section>

          {/* Lives */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Lives</p>
            <div className="flex gap-3 justify-center">
              {pill(livesEnabled, () => onConfigChange('livesEnabled', true), '❤️ 3 Lives')}
              {pill(!livesEnabled, () => onConfigChange('livesEnabled', false), '∞ No Lives')}
            </div>
          </section>

          {/* Start Button */}
          <button
            onClick={onStart}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 hover:shadow-lg"
          >
            Start Practice 🚀
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Sign media from{' '}
          <a href="https://www.lifeprint.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">lifeprint.com</a>
        </p>
      </div>
    </div>
  );
}
