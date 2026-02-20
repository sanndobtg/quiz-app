import React, { useState, useEffect } from "react";

const Timer = ({ initialTime, onTimeUp, resetKey, isPaused }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Se déclenche à chaque fois que "resetKey" (l'index de la question) change
  useEffect(() => {
    setTimeLeft(initialTime);
  }, [resetKey, initialTime]);

  // Gère le compte à rebours
  useEffect(() => {
    // Si le timer est en pause ou à 0, on arrête de compter
    if (isPaused || timeLeft === 0) {
      if (timeLeft === 0 && !isPaused) {
        onTimeUp(); // Déclenche l'action de fin de temps
      }
      return;
    }

    // Enlève 1 seconde toutes les 1000 millisecondes
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // Nettoyage pour éviter les bugs de mémoire
    return () => clearInterval(timerId);
  }, [timeLeft, isPaused, onTimeUp]);

  return (
    <div style={{ 
      fontWeight: "bold", 
      color: timeLeft <= 3 ? "#f44336" : "inherit" // Devient rouge s'il reste 3s ou moins
    }}>
      ⏱️ {timeLeft}s
    </div>
  );
};

export default Timer;