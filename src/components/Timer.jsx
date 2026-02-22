import React, { useState, useEffect, useRef } from "react";

const Timer = ({ initialTime, onTimeUp, resetKey, isPaused }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const hasFired = useRef(false);
  const onTimeUpRef = useRef(onTimeUp);

  // Met à jour la ref à chaque render sans causer de re-déclenchement
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  });

  // Reset à chaque nouvelle question
  useEffect(() => {
    setTimeLeft(initialTime);
    hasFired.current = false;
  }, [resetKey, initialTime]);

  // Gère le compte à rebours
  useEffect(() => {
    if (isPaused || timeLeft === 0) {
      if (timeLeft === 0 && !isPaused && !hasFired.current) {
        hasFired.current = true;
        onTimeUpRef.current(); // ← on appelle via la ref, pas via la prop
      }
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isPaused]); // ← onTimeUp retiré des dépendances

  return (
    <div style={{
      fontWeight: "bold",
      color: timeLeft <= 3 ? "#f44336" : "inherit"
    }}>
      ⏱️ {timeLeft}s
    </div>
  );
};

export default Timer;