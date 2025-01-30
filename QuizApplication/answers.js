const questions = JSON.parse(localStorage.getItem('questions')) || [];
const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];

const answersContainer = document.getElementById('answersContainer');
answersContainer.innerHTML = '';

questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question', 'p-3', 'mb-3');
    questionElement.innerHTML = `
        <h4>${question.question}</h4>
        ${question.options.map((option, i) => `
            <div class="option ${i === question.answer ? 'correct-answer' : ''} ${userAnswers[index] === i && userAnswers[index] !== question.answer ? 'incorrect-answer' : ''} ${userAnswers[index] === i && userAnswers[index] === question.answer ? 'user-correct-answer' : ''}">
                <input type="radio" name="option${index}" value="${i}" ${userAnswers[index] === i ? 'checked' : ''} disabled>
                <label>${option}</label>
            </div>
        `).join('')}
    `;
    answersContainer.appendChild(questionElement);
});