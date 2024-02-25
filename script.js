const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Rome"],
        answer: "A"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "B"
    },
    // Add more questions here
];

const questionContainer = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const answerForm = document.getElementById("answer-form");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const current = questions[currentQuestion];
    questionContainer.textContent = current.question;
    optionA.textContent = current.options[0];
    optionB.textContent = current.options[1];
    optionC.textContent = current.options[2];
    optionD.textContent = current.options[3];
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultContainer.textContent = `You scored ${score} out of ${questions.length}.`;
    resultContainer.style.display = "block";
    answerForm.style.display = "none";
}

answerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }
    checkAnswer(selectedAnswer.value);
});

loadQuestion();
