export const questions = [
    {
    id: 1,
    category: "Science",
    difficulty: "easy",
    question: "Quelle est la formule chimique de l'eau ?",
    options: ["H2O", "CO2", "O2", "H2SO4"],
    answer: "H2O",
  },

  {
    id: 2,
    category: "Histoire",
    difficulty: "easy",
    question: "En quelle année a eu lieu la Révolution française ?",
    options: ["1789", "1815", "1776", "1804"],
    answer: "1789",
  },
];

export const categories = [...new Set(questions.map((q) => q.category))];

export const getQuestionsByCategory = (category) =>
  questions.filter((q) => q.category === category);

export const getQuestionsByDifficulty = (difficulty) =>
  questions.filter((q) => q.difficulty === difficulty);