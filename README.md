# Quiz App

> Application web de quiz multithème développée en React + Vite.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-Workflow-181717?logo=github&logoColor=white)

---

## Description du projet

**Quiz App** est une application web interactive permettant aux utilisateurs de tester leurs connaissances dans différentes catégories (Science, Histoire, Géographie, Informatique...).

L'utilisateur répond à une série de questions à choix multiples, chaque bonne réponse rapportant des points. À la fin de la partie, un écran de résultats affiche le score final accompagné d'un message personnalisé selon la performance.

### Fonctionnalités principales

-  Questions à choix multiples par catégorie et niveau de difficulté
-  Suivi du score en temps réel
-  Feedback visuel immédiat (bonne/mauvaise réponse)
-  Écran de résultats avec message personnalisé
-  Rejouer une nouvelle partie

---

## Équipe de développement

| Rôle | Nom & Prénom | Responsabilités |
|------|-------------|-----------------|
|  Game Logic | `[Olabiyi ELEGBEDE]` | Logique du jeu, gestion de l'état, hook `useGameLogic` |
|  Data | `[Sanndo BATENGUE]` | Banque de questions, catégories, niveaux de difficulté |
|  UI / Interface | `[Mouad BRAHMI]` | Composants React, affichage, écran de résultats |

---

## Installation & Lancement

### Prérequis

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-organisation/quiz-app.git
cd quiz-app

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application est accessible sur [http://localhost:5173](http://localhost:5173)

### Build de production

```bash
npm run build
npm run preview
```

---

## Structure du projet

```
quiz-app/
├── public/
├── src/
│   ├── components/
│   │   ├── GameEngine.jsx      # Orchestration du jeu
│   │   ├── QuestionCard.jsx    # Affichage d'une question + réponses
│   │   ├── ScoreBoard.jsx      # Barre de score et progression
│   │   └── ResultsScreen.jsx   # Écran de fin de partie
│   ├── data/
│   │   └── questions.js        # Banque de questions
│   ├── hooks/
│   │   └── useGameLogic.js     # Hook custom — état global du jeu
│   ├── App.jsx                 # Composant racine
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```


## Stack technique

| Technologie | Rôle |
|-------------|------|
| [React 18](https://react.dev/) | Framework UI par composants |
| [Vite 5](https://vitejs.dev/) | Bundler et serveur de développement |
| JavaScript ES6+ | Langage principal |
| CSS natif | Mise en forme des composants |

---

## Licence

Projet universitaire — usage éducatif uniquement.
