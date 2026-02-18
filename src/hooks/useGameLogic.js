import { useState, useCallback } from "react";
import { questions } from "../data/questions";

export const useGameLogic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
};
