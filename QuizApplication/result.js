const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get('score'), 10);
const totalMarks = 10;
const percentage = (score / totalMarks) * 100;

const resultContainer = document.getElementById('resultContainer');
let comment = '';

if (percentage >= 70) {
    comment = 'We have a genius.';
} else if (percentage >= 50) {
    comment = 'Good but can do better.';
} else {
    comment = 'Start learning!';
}

resultContainer.innerHTML = `
    <h2>${comment}</h2>
    <p>Total Marks: ${score} / ${totalMarks}</p>
    <p>Percentage: ${percentage}%</p>
`;

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

const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];

document.getElementById('checkAnswers').addEventListener('click', function() {
    localStorage.setItem('questions', JSON.stringify(questions));
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    window.location.href = 'answers.html';
});