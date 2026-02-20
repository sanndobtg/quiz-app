import React from "react";

const ResultsScreen = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage >= 80) return "Excellent ! Tu es un champion du quiz !";
    if (percentage >= 50) return "Pas mal ! Tu peux faire encore mieux !";
    return "Continue à t'entraîner, tu y arriveras !";
  };

  return (
    <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <h1>Résultats</h1>
      <p style={{ fontSize: "3rem", margin: "1rem 0" }}>
        {score} / {totalQuestions}
      </p>
      <p style={{ fontSize: "1.25rem", color: "#555" }}>{getMessage()}</p>
      <button
        onClick={onRestart}
        style={{
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Rejouer
      </button>
    </div>
  );
};

export default ResultsScreen;
