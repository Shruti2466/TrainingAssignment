document.getElementById('startQuiz').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    if (userName.trim() !== '') {
        localStorage.setItem('userName', userName);
        window.location.href = 'quiz.html';
    } else {
        alert('Please enter your name.');
    }
});