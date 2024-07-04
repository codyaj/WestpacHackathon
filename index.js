document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById('sendButton');
    const inputText = document.getElementById('inputText');
    const myText = document.querySelector('.myText');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        myText.textContent = myText.textContent + "\nYou > " + inputText.value;
        // ADD CODE HERE FOR TEXTBOT FUNCTIONALITY
        inputText.value = '';
    });
});