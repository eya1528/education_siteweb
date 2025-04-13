// Quiz Logic
const questions = [
  {
    question: "What is the result of 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HyperText Machine Language", "HighText Markup Language", "None of the above"],
    correct: "HyperText Markup Language"
  },
  {
    question:  "What does CSS stand for?",
    options: [     "Cascading Style Sheets","Colorful Style Sheets","Computer Style Sheets", "Creative Style Sheets"],
    correct:  "Cascading Style Sheets"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["int", "var", "let", "both var and let"],
    correct: "both var and let"
  },
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextQuestionButton = document.getElementById("next-question");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  options.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
  });
}

function checkAnswer(selectedOption)
 {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption.textContent === currentQuestion.correct) {
    alert("Correct Answer!");
  } else {
    alert("Wrong Answer. Try again!");
  }
}

options.forEach(option => {
  option.addEventListener("click", function() {
    checkAnswer(this);
  });
});

nextQuestionButton.addEventListener("click", function() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  displayQuestion();
});

displayQuestion();

// Comment Section Logic
const commentBox = document.getElementById("comment-box");
const submitCommentButton = document.getElementById("submit-comment");
const commentList = document.getElementById("comment-list");

submitCommentButton.addEventListener("click", function() {
  const commentText = commentBox.value;
  if (commentText) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.textContent = commentText;
    commentList.appendChild(commentElement);
    commentBox.value = "";
  } else {
    alert("Please enter a comment!");
  }
});
