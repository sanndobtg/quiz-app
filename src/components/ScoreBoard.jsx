import React from "react";
import Timer from "./Timer";

// Vérifie bien cette ligne précise :
const ScoreBoard = ({ score, currentIndex, totalQuestions, selectedAnswer, isTransitioning, onTimeUp }) => {  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "#f5f5f54f",
        borderBottom: "1px solid #ddd",
      }}
    >
      <span>
        Question {currentIndex + 1} / {totalQuestions}
      </span>
      <Timer 
        initialTime={10} // Tu peux changer la durée ici (ex: 10 secondes)
        resetKey={currentIndex} 
        isPaused={selectedAnswer !== null || isTransitioning}
        onTimeUp={onTimeUp} 
      />
      <span>
        Score : <strong>{score}</strong>
      </span>
    </div>
  );
};

export default ScoreBoard;