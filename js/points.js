// Init points
if (localStorage.getItem('points') == null) {
    localStorage.setItem('points', 1700);
}

// Get points from localStorage
function getPoints() {
    return parseInt(localStorage.getItem('points'), 10);
}

// Set points
function setPoints(newPoints) {
    localStorage.setItem('points', newPoints);
}

// Add points
function addPoints(pointsToAdd) {
    const currentPoints = getPoints();
    setPoints(currentPoints + pointsToAdd);
}

// Subtract points
function subtractPoints(pointsToSubtract) {
    const currentPoints = getPoints();
    setPoints(currentPoints - pointsToSubtract);
}

// Update points display on the page
function updatePointsDisplay() {
    const pointsDisplay = document.querySelector('.points-display');
    if (pointsDisplay) {
        pointsDisplay.textContent = `${getPoints()} Points`;
    }

    const pointsProgress = document.querySelector('#pointsBar');
    if (pointsProgress) {
        pointsProgress.value = getPoints();
    }

    const pointsUntilNextAward = document.querySelector('.points-until-next-reward');
    if (pointsUntilNextAward) {
        const nextRewardPoints = 2000; // Hard coded :(
        pointsUntilNextAward.textContent = `${nextRewardPoints - getPoints()} points until your next badge!`;
    }
}

// Init points display on page
document.addEventListener('DOMContentLoaded', updatePointsDisplay);