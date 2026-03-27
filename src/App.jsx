import { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { getSigns, buildQuiz } from './data/signs';
import './index.css';

const DEFAULT_CONFIG = {
  mode: 'asl-to-english',
  category: 'alphabet',
  quizLength: 10,
  livesEnabled: true,
};

export default function App() {
  const [screen, setScreen] = useState('home');
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [quiz, setQuiz] = useState([]);
  const [result, setResult] = useState(null);

  function handleConfigChange(key, value) {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }

  function handleStart() {
    const signs = getSigns(config.category);
    const built = buildQuiz(signs, config.quizLength);
    setQuiz(built);
    setResult(null);
    setScreen('quiz');
  }

  function handleFinish(res) {
    setResult(res);
    setScreen('result');
  }

  function handlePracticeAgain() {
    const signs = getSigns(config.category);
    const built = buildQuiz(signs, config.quizLength);
    setQuiz(built);
    setResult(null);
    setScreen('quiz');
  }

  function handleChangeSettings() {
    setScreen('home');
  }

  return (
    <>
      {screen === 'home' && (
        <HomeScreen
          config={config}
          onConfigChange={handleConfigChange}
          onStart={handleStart}
        />
      )}
      {screen === 'quiz' && (
        <QuizScreen
          quiz={quiz}
          mode={config.mode}
          livesEnabled={config.livesEnabled}
          onFinish={handleFinish}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          result={result}
          onPracticeAgain={handlePracticeAgain}
          onChangeSettings={handleChangeSettings}
        />
      )}
    </>
  );
}
