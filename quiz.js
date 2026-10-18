console.log("JavaScript is working!");
// OOP
class Question {
  constructor(text, options, correctIndex) {
    this.text = text;
    this.options = options;
    this.correct = correctIndex; // 0 = first answer, 1 = second, 2 = third
  }
}
// Questions are now put in categories
const quizData = { 
  music: [
    new Question(
      "Which music group was Beyonce in?",
      ["Destiny's Child", "The Pussycat Dolls", "TLC"],
      0, // Destiny's Child is correct
    ),
    new Question(
      "How many Grammy awards has Adele won?",
      ["13", "16", "17"],
      1, // 16 is correct
    ),
    new Question(
      "Whats the most popular music genre in South Africa?",
      ["Gqom", "Hip-Hop", "Amampiano"],
      2, // Amampiano is correct
    ),
    new Question(
      "Which band released the song 'Hey Jude'?",
      ["The Beatles", "The Black Eyed Peas", "Queen"],
      0, // The Beatles
    ),
    new Question(
      "Which singer is known as the 'King of Pop'?",
      ["Elvis Presley", "Michael Jackson", "Prince"],
      1, // Michael Jackson is correct
    ],
  movies: [
    new Question(
      "How many movies does Harry Potter have?",
      ["7", "8", "9"],
      0, // 7 is correct
    ),
    new Question(
      "In the Lion King, what is the name of Simba's father?",
      ["Scar", "Mufasa", "Timon"],
      1, // Mufasa is correct
    ),
    new Question(
      "In finding Nemo, what kind of fish is Nemo?",
      ["Tuna", "Shark", "Clownfish"],
      2, // Clownfish is correct
    ),
    new Question(
      "Which actor played Wolverine in the X-Men movies?",
      ["Chris Evans", "Hugh Jackman", "Robert Downey Jr."],
      1, // Hugh Jackman is correct
    ),
    new Question(
      "What is the best-selling movie of all time?",
      ["Avatar", "Titanic", "Star Wars"],
      0, // Avatar is correct
    ),
  ],
  sports: [
    new Question(
      "Which country hosted the 2010 FIFA World Cup?",
      ["Germany", "Brazil", "South Africa"],
      2, // South Africa is correct
    ),
    new Question(
      "Which footballer is famously known as CR7?",
      ["Neymar", "Lionel Messi", "Cristiano Ronaldo"],
      2, // Cristiano Ronaldo is correct
    ),
    new Question(
      "Which basketball player is nicknamed “King James”?",
      ["LeBron James", "Kobe Bryant", "Michael Jordan"],
      0, // Lebron James is correct
    ),
    new Question(
      "Which Jamaican sprinter is famous for world records in the 100 metres and 200 metres?",
      ["Yohan Blake", "Usain Bolt", "Asafa Powell"],
      1, // Usain Bolt is correct
    ),
    new Question(
      "In golf, what does a “hole-in-one” mean?",
      [
        "Getting the ball in the hole with one stroke",
        "Hitting the ball out of bounds",
        "Missing the hole completely",
      ],
      0, // Getting the ball in the hole with one stroke is correct
    ),
  ],
};

// Add variables
let currentTopic = "";
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz(topic) {
  console.log("Topic clicked:", topic);

  if (!quizData[topic]) {
    console.error("Quiz topic not found:", topic);
    return;
  }

  currentTopic = topic;
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;

  document.querySelector(".topics").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("result-box").style.display = "none";

  showQuestion();
}

function showQuestion() {
  const questions = quizData[currentTopic];
  const questionData = questions[currentQuestionIndex];

  document.getElementById("next-btn").disabled = true;

  document.getElementById("q-count").textContent =
    `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  document.getElementById("question-text").textContent =
    questionData.text;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  questionData.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.textContent = option;
    button.className = "answer-option";

    button.addEventListener("click", function () {
      selectAnswer(index);
    });

    optionsContainer.appendChild(button);
  });

  document.getElementById("score").textContent = `Score: ${score}`;

  document.getElementById("progress").style.width =
    `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
}

function selectAnswer(index) {
  const questions = quizData[currentTopic];
  const question = questions[currentQuestionIndex];
  const answerButtons = document.querySelectorAll(".answer-option");

  answerButtons.forEach((button) => {
    button.disabled = true;
  });

  if (index === question.correct) {
    score++;
    answerButtons[index].style.backgroundColor = "#d4edda";
    answerButtons[index].style.color = "#155724";
  } else {
    answerButtons[index].style.backgroundColor = "#f8d7da";
    answerButtons[index].style.color = "#721c24";

    answerButtons[question.correct].style.backgroundColor = "#d4edda";
    answerButtons[question.correct].style.color = "#155724";
  }

  document.getElementById("score").textContent = `Score: ${score}`;
  selectedAnswer = index;
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  const questions = quizData[currentTopic];

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const questions = quizData[currentTopic];
  const percentage = Math.round((score / questions.length) * 100);

  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";

  document.getElementById("final-score").textContent =
    `Your score: ${score} out of ${questions.length}`;

  document.getElementById("final-text").textContent =
    `You scored ${percentage}%.`;

  const review = document.getElementById("review");
  review.innerHTML = "<h3>Answer Review</h3>";

  questions.forEach((question, index) => {
    const item = document.createElement("p");

    item.textContent =
      `${index + 1}. ${question.text} Correct answer: ${question.options[question.correct]}`;

    review.appendChild(item);
  });
}

function restartQuiz() {
  startQuiz(currentTopic);
}

function goHome() {
  document.getElementById("result-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "none";
  document.querySelector(".topics").style.display = "flex";
}





window.startQuiz = startQuiz;



