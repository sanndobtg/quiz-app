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

  {
    id: 3,
    category: "Géographie",
    difficulty: "easy",
    question: "Quelle est la capitale de l'Australie ?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
  },
  {
    id: 4,
    category: "Science",
    difficulty: "medium",
    question: "Combien de chromosomes possède un être humain ?",
    options: ["23", "46", "48", "44"],
    answer: "46",
  },
  {
    id: 5,
    category: "Informatique",
    difficulty: "easy",
    question: "Que signifie l'acronyme HTML ?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText Machine Language",
      "HyperTransfer Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
];

export const categories = [...new Set(questions.map((q) => q.category))];

export const getQuestionsByCategory = (category) =>
  questions.filter((q) => q.category === category);

export const getQuestionsByDifficulty = (difficulty) =>
  questions.filter((q) => q.difficulty === difficulty);