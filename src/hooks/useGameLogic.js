import { useState, useCallback } from "react";
import { questions } from "../data/questions";

export const useGameLogic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleAnswer = useCallback(
    (answer) => {
      if (selectedAnswer !== null) return;
      setSelectedAnswer(answer);
      if (answer === currentQuestion.answer) {
        setScore((prev) => prev + 1);
      }
      setTimeout(() => {
        if (currentIndex + 1 >= totalQuestions) {
          setGameOver(true);
        } else {
          setCurrentIndex((prev) => prev + 1);
          setSelectedAnswer(null);
        }
      }, 1000);
    },
    [currentIndex, currentQuestion, selectedAnswer, totalQuestions],
  );
};
