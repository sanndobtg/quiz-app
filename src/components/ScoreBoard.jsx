import React from "react";

const ScoreBoard = ({ score, currentIndex, totalQuestions }) => {
  return (
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
      <span>
        Score : <strong>{score}</strong>
      </span>
    </div>
  );
};

export default ScoreBoard;