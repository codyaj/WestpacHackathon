document.addEventListener('DOMContentLoaded', function() {
    updatePointsDisplay();
    displayBadges();
});

function purchaseReward(cost, rewardId) {
    if (getPoints() >= cost) {
        subtractPoints(cost);
        document.getElementById(rewardId).style.display = 'none';
        alert('Reward purchased successfully!');
        updatePointsDisplay();
    } else {
        alert('Not enough points to purchase this reward.');
    }
}

function displayBadges() {
    // Example badges data
    const badges = [
        'Beginner Saver',
        'Intermediate Saver',
        'Advanced Saver'
    ];
    const badgesDisplay = document.querySelector('.badges-display');
    if (badgesDisplay) {
        badgesDisplay.textContent = badges.join(', ');
    }
}
