


import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import ResultsScreen from "./components/ResultsScreen";

function App() {


  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", padding: "1.5rem", color: "#4f46e5" }}>
        🧠 Quiz App
      </h1>

      {gameOver ? (
        <ResultsScreen

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
