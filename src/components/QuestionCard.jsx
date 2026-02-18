import React from "react";

const QuestionCard = ({ question, onAnswer, selectedAnswer }) => {
  if (!question) return null;

  const getOptionStyle = (option) => {
    if (selectedAnswer === null) return {};
    if (option === question.answer) return { backgroundColor: "#4caf50", color: "white" };
    if (option === selectedAnswer) return { backgroundColor: "#f44336", color: "white" };
    return { opacity: 0.5 };
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <span style={{ fontSize: "0.85rem", color: "#888" }}>
        {question.category} · {question.difficulty}
      </span>
      <h2 style={{ margin: "1rem 0" }}>{question.question}</h2>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            disabled={selectedAnswer !== null}
            style={{
              padding: "0.75rem 1rem",
              border: "2px solid #ddd",
              borderRadius: "8px",
              cursor: selectedAnswer ? "default" : "pointer",
              textAlign: "left",
              fontSize: "1rem",
              transition: "all 0.3s",
              ...getOptionStyle(option),
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
