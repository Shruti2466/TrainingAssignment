document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${userName}!`;
    }

    loadQuestion();
    startTimer();
});

const questions = [
    {
        question: "Which JavaScript method is used to write on the browser's console?",
        options: ["console.write()", "console.log()", "console.output()"],
        answer: 1
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
        answer: 0
    },
    {
        question: "How do you call a function named 'myFunction' in JavaScript?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()"],
        answer: 1
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        options: ["if i == 5 then", "if (i == 5)", "if i = 5 then"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let timer = 900; // 15 minutes in seconds

function loadQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
        <h3>${questions[currentQuestion].question}</h3>
        ${questions[currentQuestion].options.map((option, index) => `
            <div>
                <input type="radio" name="option" value="${index}">
                <label>${option}</label>
            </div>
        `).join('')}
    `;
    quizContainer.appendChild(questionElement);
    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(interval);
            alert('Time is up! The test is auto-submitted.');
            submitQuiz();
        } else {
            timer--;
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}

function submitQuiz() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === questions[currentQuestion].answer) {
        score += 2;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        window.location.href = `result.html?score=${score}`;
    }
}

document.getElementById('submitQuiz').addEventListener('click', submitQuiz);