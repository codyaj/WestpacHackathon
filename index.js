document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById('sendButton');
    const inputText = document.getElementById('inputText');
    const myText = document.querySelector('.myText');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();

        const newText = "You > " + inputText.value.trim();
        if (newText) {
            myText.innerHTML += newText + '<br>';
        }

        // Hard Coded Outputs :(

        inputText.value = '';
    });
});