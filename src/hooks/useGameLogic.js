import { useState, useCallback } from "react";
import { questions } from "../data/questions";

export const useGameLogic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleAnswer = useCallback(
    (answer) => {
      if (selectedAnswer !== null || isTransitioning) return;
      setSelectedAnswer(answer);
      setIsTransitioning(true);
      if (answer === currentQuestion.answer) {
        setScore((prev) => prev + 1);
      }
      setTimeout(() => {
        if (currentIndex + 1 >= totalQuestions) {
          setGameOver(true);
          setIsTransitioning(false);
        } else {
          setCurrentIndex((prev) => prev + 1);
          setSelectedAnswer(null);
          setTimeout(() => {
            setIsTransitioning(false); // ← libéré 100ms après le reset du Timer
          }, 100);
        }
      }, 1000);
    },
    [currentIndex, currentQuestion, selectedAnswer, isTransitioning, totalQuestions]
  );

  const handleTimeUp = useCallback(() => {
    handleAnswer("Temps écoulé");
  }, [handleAnswer]);

  const resetGame = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setGameOver(false);
    setSelectedAnswer(null);
    setIsTransitioning(false);
  }, []);

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    gameOver,
    selectedAnswer,
    handleAnswer,
    handleTimeUp,
    resetGame,
    isTransitioning,
  };
};