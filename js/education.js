function openQuiz(element) {
    const modal = document.getElementById('quizModal');
    modal.style.display = 'block';
    modal.dataset.reward = element.dataset.reward;
}

function closeQuiz() {
    const modal = document.getElementById('quizModal');
    modal.style.display = 'none';
}

function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'Paris') {
        const modal = document.getElementById('quizModal');
        const rewardPoints = parseInt(modal.dataset.reward, 10);
        addPoints(rewardPoints);
        updatePointsDisplay();
        closeQuiz();
        removeCompletedClass(modal);
    } else {
        alert('Wrong answer, please try again.');
    }
}

function removeCompletedClass(modal) {
    const classElement = document.querySelector(`.class[data-reward="${modal.dataset.reward}"]`);
    if (classElement) {
        classElement.parentElement.removeChild(classElement);
    }
}
