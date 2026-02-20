import React from "react";
import { useGameLogic } from "./hooks/useGameLogic";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import ResultsScreen from "./components/ResultsScreen";

function App() {
 const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    gameOver,
    selectedAnswer,
    handleAnswer,
    resetGame,
  } = useGameLogic();

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", padding: "1.5rem", color: "#4f46e5" }}>
        Quiz App
      </h1>

      {gameOver ? (
        <ResultsScreen
          score={score}
          totalQuestions={totalQuestions}
          onRestart={resetGame}
        />
      ) : (
        <>
          <ScoreBoard
            score={score}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
          />
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
          />
        </>
      )}
    </div>
  );
}

export default App;
