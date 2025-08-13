// Vocabulary Database
const vocabularyData = [
  {
    id: 1,
    english: "variable",
    portuguese: "variável",
    category: "javascript",
    difficulty: "beginner",
    pronunciation: "ˈvɛriəbəl",
    example: "let name = 'John';",
    explanation: "Uma variável é um container para armazenar dados",
  },
  {
    id: 2,
    english: "function",
    portuguese: "função",
    category: "javascript",
    difficulty: "beginner",
    pronunciation: "ˈfʌŋkʃən",
    example: "function greet() { console.log('Hello!'); }",
    explanation: "Uma função é um bloco de código reutilizável",
  },
  {
    id: 3,
    english: "array",
    portuguese: "array/matriz",
    category: "javascript",
    difficulty: "beginner",
    pronunciation: "əˈreɪ",
    example: "const numbers = [1, 2, 3, 4, 5];",
    explanation: "Um array é uma lista ordenada de elementos",
  },
  {
    id: 4,
    english: "object",
    portuguese: "objeto",
    category: "javascript",
    difficulty: "intermediate",
    pronunciation: "ˈɒbdʒɪkt",
    example: "const person = { name: 'Ana', age: 25 };",
    explanation: "Um objeto é uma coleção de propriedades chave-valor",
  },
  {
    id: 5,
    english: "loop",
    portuguese: "laço/loop",
    category: "general",
    difficulty: "beginner",
    pronunciation: "luːp",
    example: "for (let i = 0; i < 10; i++) { console.log(i); }",
    explanation: "Um loop executa código repetidamente",
  },
  {
    id: 6,
    english: "condition",
    portuguese: "condição",
    category: "general",
    difficulty: "beginner",
    pronunciation: "kənˈdɪʃən",
    example: "if (age >= 18) { console.log('Adult'); }",
    explanation: "Uma condição determina se código deve ser executado",
  },
  {
    id: 7,
    english: "class",
    portuguese: "classe",
    category: "javascript",
    difficulty: "intermediate",
    pronunciation: "klæs",
    example: "class Car { constructor(brand) { this.brand = brand; } }",
    explanation: "Uma classe é um template para criar objetos",
  },
  {
    id: 8,
    english: "method",
    portuguese: "método",
    category: "general",
    difficulty: "intermediate",
    pronunciation: "ˈmeθəd",
    example: "person.getName()",
    explanation: "Um método é uma função que pertence a um objeto",
  },
  {
    id: 9,
    english: "parameter",
    portuguese: "parâmetro",
    category: "general",
    difficulty: "intermediate",
    pronunciation: "pəˈræmɪtər",
    example: "function add(a, b) { return a + b; }",
    explanation: "Parâmetros são valores passados para uma função",
  },
  {
    id: 10,
    english: "return",
    portuguese: "retornar",
    category: "general",
    difficulty: "beginner",
    pronunciation: "rɪˈtɜːrn",
    example: "function multiply(x, y) { return x * y; }",
    explanation: "Return especifica o valor que uma função deve retornar",
  },
  {
    id: 11,
    english: "database",
    portuguese: "banco de dados",
    category: "database",
    difficulty: "intermediate",
    pronunciation: "ˈdeɪtəbeɪs",
    example: "SELECT * FROM users WHERE age > 18;",
    explanation: "Um banco de dados armazena e organiza informações",
  },
  {
    id: 12,
    english: "query",
    portuguese: "consulta",
    category: "database",
    difficulty: "intermediate",
    pronunciation: "ˈkwɪəri",
    example: "SELECT name FROM users;",
    explanation: "Uma query é um comando para buscar dados",
  },
  {
    id: 13,
    english: "API",
    portuguese: "API",
    category: "web",
    difficulty: "intermediate",
    pronunciation: "eɪ piː aɪ",
    example: "fetch('/api/users').then(response => response.json())",
    explanation: "API permite comunicação entre diferentes sistemas",
  },
  {
    id: 14,
    english: "framework",
    portuguese: "framework",
    category: "web",
    difficulty: "advanced",
    pronunciation: "ˈfreɪmwɜːrk",
    example: "React, Vue, Angular são frameworks JavaScript",
    explanation: "Um framework fornece estrutura para desenvolvimento",
  },
  {
    id: 15,
    english: "algorithm",
    portuguese: "algoritmo",
    category: "general",
    difficulty: "advanced",
    pronunciation: "ˈælɡərɪðəm",
    example: "Bubble sort é um algoritmo de ordenação",
    explanation: "Um algoritmo é uma sequência de passos para resolver problemas",
  },
]

// Game State
const gameState = {
  currentScreen: "home",
  user: {
    name: "Jogador",
    level: 1,
    xp: 0,
    streak: 0,
    termsLearned: 0,
    achievements: [],
    lastPlayDate: null,
  },
  quiz: {
    questions: [],
    currentQuestion: 0,
    score: 0,
    timeLeft: 30,
    timer: null,
  },
  flashcards: {
    cards: [],
    currentCard: 0,
    isFlipped: false,
  },
  dailyChallenge: {
    type: "quiz",
    target: 10,
    progress: 0,
    completed: false,
  },
}

// Achievements System
const achievements = [
  {
    id: "first_quiz",
    name: "Primeiro Quiz",
    description: "Complete seu primeiro quiz",
    icon: "🎯",
    unlocked: false,
    xpReward: 50,
  },
  {
    id: "streak_3",
    name: "Sequência de 3",
    description: "Mantenha uma sequência de 3 dias",
    icon: "🔥",
    unlocked: false,
    xpReward: 100,
  },
  {
    id: "terms_50",
    name: "Vocabulário Básico",
    description: "Aprenda 50 termos",
    icon: "📚",
    unlocked: false,
    xpReward: 200,
  },
  {
    id: "perfect_quiz",
    name: "Perfeição",
    description: "Acerte 100% em um quiz",
    icon: "⭐",
    unlocked: false,
    xpReward: 150,
  },
  {
    id: "level_5",
    name: "Nível 5",
    description: "Alcance o nível 5",
    icon: "🏆",
    unlocked: false,
    xpReward: 300,
  },
]

// Initialize Game
function initGame() {
  loadUserData()
  updateUI()
  generateDailyChallenge()
  showScreen("home")
}

// Local Storage Functions
function saveUserData() {
  localStorage.setItem("codelingoUser", JSON.stringify(gameState.user))
}

function loadUserData() {
  const savedUser = localStorage.getItem("codelingoUser")
  if (savedUser) {
    gameState.user = { ...gameState.user, ...JSON.parse(savedUser) }
  }

  // Load achievements
  const savedAchievements = localStorage.getItem("codelingoAchievements")
  if (savedAchievements) {
    const achievementData = JSON.parse(savedAchievements)
    achievements.forEach((achievement) => {
      const saved = achievementData.find((a) => a.id === achievement.id)
      if (saved) achievement.unlocked = saved.unlocked
    })
  }
}

// Screen Management
function showScreen(screenName) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active")
  })
  document.getElementById(screenName + "-screen").classList.add("active")
  gameState.currentScreen = screenName
}

function goHome() {
  showScreen("home")
}

// UI Updates
function updateUI() {
  // Update navigation stats
  document.getElementById("user-level").textContent = gameState.user.level
  document.getElementById("user-xp").textContent = gameState.user.xp
  document.getElementById("user-streak").textContent = gameState.user.streak

  // Update profile stats
  document.getElementById("profile-level").textContent = gameState.user.level
  document.getElementById("profile-xp").textContent = gameState.user.xp
  document.getElementById("profile-streak").textContent = gameState.user.streak
  document.getElementById("profile-terms").textContent = gameState.user.termsLearned

  // Update level progress
  const xpForNextLevel = gameState.user.level * 100
  const currentLevelXP = gameState.user.xp % 100
  const progressPercent = (currentLevelXP / 100) * 100

  const progressBars = document.querySelectorAll("#level-progress")
  progressBars.forEach((bar) => {
    bar.style.width = progressPercent + "%"
  })

  document.getElementById("level-progress-text").textContent = `${currentLevelXP}/100 XP`
}

// XP and Level System
function addXP(amount) {
  gameState.user.xp += amount

  const newLevel = Math.floor(gameState.user.xp / 100) + 1
  if (newLevel > gameState.user.level) {
    gameState.user.level = newLevel
    showLevelUp(newLevel)
    checkAchievements()
  }

  saveUserData()
  updateUI()
}

function showLevelUp(level) {
  // Simple alert for now - could be enhanced with a modal
  setTimeout(() => {
    alert(`🎉 Parabéns! Você alcançou o nível ${level}!`)
  }, 500)
}

// Achievements System
function checkAchievements() {
  achievements.forEach((achievement) => {
    if (!achievement.unlocked) {
      let shouldUnlock = false

      switch (achievement.id) {
        case "first_quiz":
          shouldUnlock = gameState.user.xp > 0
          break
        case "streak_3":
          shouldUnlock = gameState.user.streak >= 3
          break
        case "terms_50":
          shouldUnlock = gameState.user.termsLearned >= 50
          break
        case "level_5":
          shouldUnlock = gameState.user.level >= 5
          break
      }

      if (shouldUnlock) {
        unlockAchievement(achievement)
      }
    }
  })
}

function unlockAchievement(achievement) {
  achievement.unlocked = true
  addXP(achievement.xpReward)

  // Save achievements
  localStorage.setItem("codelingoAchievements", JSON.stringify(achievements))

  // Show achievement notification
  setTimeout(() => {
    alert(`🏆 Conquista desbloqueada: ${achievement.name}!\n+${achievement.xpReward} XP`)
  }, 1000)
}

// Daily Challenge System
function generateDailyChallenge() {
  const today = new Date().toDateString()
  const savedChallenge = localStorage.getItem("dailyChallenge")
  const savedDate = localStorage.getItem("dailyChallengeDate")

  if (savedDate === today && savedChallenge) {
    gameState.dailyChallenge = JSON.parse(savedChallenge)
  } else {
    // Generate new challenge
    const challenges = [
      { type: "quiz", target: 10, title: "Quiz Master", desc: "Complete 10 perguntas de quiz" },
      { type: "flashcards", target: 20, title: "Flashcard Hero", desc: "Revise 20 flashcards" },
      { type: "terms", target: 5, title: "Explorador", desc: "Aprenda 5 novos termos" },
    ]

    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)]
    gameState.dailyChallenge = {
      ...randomChallenge,
      progress: 0,
      completed: false,
    }

    localStorage.setItem("dailyChallenge", JSON.stringify(gameState.dailyChallenge))
    localStorage.setItem("dailyChallengeDate", today)
  }

  updateDailyChallengeUI()
}

function updateDailyChallengeUI() {
  document.getElementById("daily-challenge-title").textContent = gameState.dailyChallenge.title
  document.getElementById("daily-challenge-desc").textContent = gameState.dailyChallenge.desc

  const progressPercent = (gameState.dailyChallenge.progress / gameState.dailyChallenge.target) * 100
  document.getElementById("daily-progress").style.width = progressPercent + "%"
  document.getElementById("daily-progress-text").textContent =
    `${gameState.dailyChallenge.progress}/${gameState.dailyChallenge.target}`
}

function updateDailyChallengeProgress(type, amount = 1) {
  if (gameState.dailyChallenge.type === type && !gameState.dailyChallenge.completed) {
    gameState.dailyChallenge.progress += amount

    if (gameState.dailyChallenge.progress >= gameState.dailyChallenge.target) {
      gameState.dailyChallenge.completed = true
      addXP(100) // Bonus XP for completing daily challenge
      alert("🎉 Desafio diário completado! +100 XP")
    }

    localStorage.setItem("dailyChallenge", JSON.stringify(gameState.dailyChallenge))
    updateDailyChallengeUI()
  }
}

// Quiz System
function startQuiz() {
  generateQuizQuestions()
  gameState.quiz.currentQuestion = 0
  gameState.quiz.score = 0
  gameState.quiz.timeLeft = 30
  showScreen("quiz")
  displayQuestion()
  startTimer()
}

function startDailyChallenge() {
  if (gameState.dailyChallenge.type === "quiz") {
    startQuiz()
  } else if (gameState.dailyChallenge.type === "flashcards") {
    startFlashcards()
  }
}

function generateQuizQuestions() {
  const shuffled = [...vocabularyData].sort(() => 0.5 - Math.random())
  gameState.quiz.questions = shuffled.slice(0, 10).map((term) => {
    const questionTypes = ["translation", "definition", "example"]
    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)]

    let question, correctAnswer, options

    switch (questionType) {
      case "translation":
        question = `Qual é a tradução de "${term.english}"?`
        correctAnswer = term.portuguese
        options = generateTranslationOptions(term)
        break
      case "definition":
        question = `O que significa "${term.english}"?`
        correctAnswer = term.explanation
        options = generateDefinitionOptions(term)
        break
      case "example":
        question = `Qual termo se relaciona com este código: ${term.example}`
        correctAnswer = term.english
        options = generateExampleOptions(term)
        break
    }

    return {
      question,
      options: shuffleArray(options),
      correctAnswer,
      term,
    }
  })
}

function generateTranslationOptions(correctTerm) {
  const options = [correctTerm.portuguese]
  const otherTerms = vocabularyData.filter((t) => t.id !== correctTerm.id)

  while (options.length < 4) {
    const randomTerm = otherTerms[Math.floor(Math.random() * otherTerms.length)]
    if (!options.includes(randomTerm.portuguese)) {
      options.push(randomTerm.portuguese)
    }
  }

  return options
}

function generateDefinitionOptions(correctTerm) {
  const options = [correctTerm.explanation]
  const otherTerms = vocabularyData.filter((t) => t.id !== correctTerm.id)

  while (options.length < 4) {
    const randomTerm = otherTerms[Math.floor(Math.random() * otherTerms.length)]
    if (!options.includes(randomTerm.explanation)) {
      options.push(randomTerm.explanation)
    }
  }

  return options
}

function generateExampleOptions(correctTerm) {
  const options = [correctTerm.english]
  const otherTerms = vocabularyData.filter((t) => t.id !== correctTerm.id && t.category === correctTerm.category)

  while (options.length < 4 && otherTerms.length > 0) {
    const randomTerm = otherTerms[Math.floor(Math.random() * otherTerms.length)]
    if (!options.includes(randomTerm.english)) {
      options.push(randomTerm.english)
    }
  }

  // Fill with any terms if not enough in same category
  const allOtherTerms = vocabularyData.filter((t) => t.id !== correctTerm.id)
  while (options.length < 4) {
    const randomTerm = allOtherTerms[Math.floor(Math.random() * allOtherTerms.length)]
    if (!options.includes(randomTerm.english)) {
      options.push(randomTerm.english)
    }
  }

  return options
}

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function displayQuestion() {
  const question = gameState.quiz.questions[gameState.quiz.currentQuestion]
  document.getElementById("quiz-question").textContent = question.question
  document.getElementById("quiz-question-count").textContent = `${gameState.quiz.currentQuestion + 1}/10`

  const progressPercent = ((gameState.quiz.currentQuestion + 1) / 10) * 100
  document.getElementById("quiz-progress").style.width = progressPercent + "%"

  const optionsContainer = document.getElementById("quiz-options")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, index) => {
    const button = document.createElement("button")
    button.className = "quiz-option"
    button.textContent = option
    button.onclick = () => selectAnswer(option)
    optionsContainer.appendChild(button)
  })
}

function selectAnswer(selectedAnswer) {
  const question = gameState.quiz.questions[gameState.quiz.currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  // Visual feedback
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.onclick = null // Disable further clicks
    if (option.textContent === question.correctAnswer) {
      option.classList.add("correct")
    } else if (option.textContent === selectedAnswer && !isCorrect) {
      option.classList.add("incorrect")
    }
  })

  if (isCorrect) {
    gameState.quiz.score++
    addXP(10)
  }

  clearInterval(gameState.quiz.timer)

  setTimeout(() => {
    nextQuestion()
  }, 1500)
}

function nextQuestion() {
  gameState.quiz.currentQuestion++

  if (gameState.quiz.currentQuestion >= gameState.quiz.questions.length) {
    endQuiz()
  } else {
    gameState.quiz.timeLeft = 30
    displayQuestion()
    startTimer()
  }
}

function startTimer() {
  gameState.quiz.timer = setInterval(() => {
    gameState.quiz.timeLeft--
    document.getElementById("quiz-timer").textContent = gameState.quiz.timeLeft + "s"

    if (gameState.quiz.timeLeft <= 0) {
      selectAnswer("") // Time's up, wrong answer
    }
  }, 1000)
}

function endQuiz() {
  clearInterval(gameState.quiz.timer)

  const accuracy = Math.round((gameState.quiz.score / 10) * 100)
  const xpGained = gameState.quiz.score * 10

  // Update daily challenge
  updateDailyChallengeProgress("quiz", 10)

  // Check for perfect score achievement
  if (accuracy === 100) {
    const perfectAchievement = achievements.find((a) => a.id === "perfect_quiz")
    if (perfectAchievement && !perfectAchievement.unlocked) {
      unlockAchievement(perfectAchievement)
    }
  }

  // Update results screen
  document.getElementById("final-score").textContent = `${gameState.quiz.score}/10`
  document.getElementById("final-accuracy").textContent = accuracy + "%"
  document.getElementById("xp-gained").textContent = "+" + xpGained

  showScreen("results")
}

// Flashcards System
function startFlashcards() {
  gameState.flashcards.cards = [...vocabularyData].sort(() => 0.5 - Math.random()).slice(0, 20)
  gameState.flashcards.currentCard = 0
  gameState.flashcards.isFlipped = false
  showScreen("flashcards")
  displayFlashcard()
}

function displayFlashcard() {
  const card = gameState.flashcards.cards[gameState.flashcards.currentCard]

  document.getElementById("flashcard-term").textContent = card.english
  document.getElementById("flashcard-category").textContent = card.category
  document.getElementById("flashcard-translation").textContent = card.portuguese
  document.getElementById("flashcard-example").textContent = card.example

  document.getElementById("flashcard-count").textContent = `${gameState.flashcards.currentCard + 1}/20`

  // Reset card flip
  document.getElementById("flashcard").classList.remove("flipped")
  gameState.flashcards.isFlipped = false
}

function flipCard() {
  const flashcard = document.getElementById("flashcard")
  flashcard.classList.toggle("flipped")
  gameState.flashcards.isFlipped = !gameState.flashcards.isFlipped
}

function markDifficulty(difficulty) {
  // Add XP based on difficulty
  const xpRewards = { easy: 5, medium: 8, hard: 12 }
  addXP(xpRewards[difficulty])

  // Update daily challenge
  updateDailyChallengeProgress("flashcards", 1)

  nextFlashcard()
}

function nextFlashcard() {
  gameState.flashcards.currentCard++

  if (gameState.flashcards.currentCard >= gameState.flashcards.cards.length) {
    alert("🎉 Flashcards completados! Bom trabalho!")
    goHome()
  } else {
    displayFlashcard()
  }
}

function playAudio() {
  const card = gameState.flashcards.cards[gameState.flashcards.currentCard]

  // Use Web Speech API for pronunciation
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(card.english)
    utterance.lang = "en-US"
    utterance.rate = 0.8
    speechSynthesis.speak(utterance)
  } else {
    alert("Áudio não disponível neste navegador")
  }
}

// Dictionary System
function openDictionary() {
  showScreen("dictionary")
  displayTerms(vocabularyData)
}

function searchTerms() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase()
  const categoryFilter = document.getElementById("category-filter").value
  const difficultyFilter = document.getElementById("difficulty-filter").value

  const filteredTerms = vocabularyData.filter((term) => {
    const matchesSearch =
      term.english.toLowerCase().includes(searchTerm) || term.portuguese.toLowerCase().includes(searchTerm)
    const matchesCategory = !categoryFilter || term.category === categoryFilter
    const matchesDifficulty = !difficultyFilter || term.difficulty === difficultyFilter

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  displayTerms(filteredTerms)
}

function filterTerms() {
  searchTerms() // Reuse search logic
}

function displayTerms(terms) {
  const termsList = document.getElementById("terms-list")
  termsList.innerHTML = ""

  terms.forEach((term) => {
    const termElement = document.createElement("div")
    termElement.className = "term-item"
    termElement.innerHTML = `
            <div class="term-header">
                <span class="term-name">${term.english}</span>
                <span class="term-category">${term.category}</span>
            </div>
            <div class="term-translation">${term.portuguese}</div>
            <div class="term-example">${term.example}</div>
        `
    termsList.appendChild(termElement)
  })
}

// Profile System
function openProfile() {
  showScreen("profile")
  displayAchievements()
  displayLeaderboard()
}

function displayAchievements() {
  const achievementsGrid = document.getElementById("achievements-grid")
  achievementsGrid.innerHTML = ""

  achievements.forEach((achievement) => {
    const achievementElement = document.createElement("div")
    achievementElement.className = `achievement-item ${achievement.unlocked ? "unlocked" : ""}`
    achievementElement.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.description}</div>
        `
    achievementsGrid.appendChild(achievementElement)
  })
}

function displayLeaderboard() {
  // Mock leaderboard data
  const leaderboardData = [
    { name: "Ana Silva", score: 2500 },
    { name: "João Santos", score: 2200 },
    { name: "Maria Costa", score: 1800 },
    { name: gameState.user.name, score: gameState.user.xp },
    { name: "Pedro Lima", score: 1200 },
  ].sort((a, b) => b.score - a.score)

  const leaderboard = document.getElementById("leaderboard")
  leaderboard.innerHTML = ""

  leaderboardData.forEach((player, index) => {
    const playerElement = document.createElement("div")
    playerElement.className = "leaderboard-item"
    if (player.name === gameState.user.name) {
      playerElement.style.background = "rgba(107, 124, 50, 0.1)"
    }
    playerElement.innerHTML = `
            <span class="leaderboard-rank">#${index + 1}</span>
            <span class="leaderboard-name">${player.name}</span>
            <span class="leaderboard-score">${player.score} XP</span>
        `
    leaderboard.appendChild(playerElement)
  })
}

// Initialize game when page loads
document.addEventListener("DOMContentLoaded", initGame)
