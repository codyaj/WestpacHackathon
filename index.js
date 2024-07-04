document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById('sendButton');
    const inputText = document.getElementById('inputText');
    const myText = document.querySelector('.myText');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();

        const newText = inputText.value.trim();
        if (newText) {
            myText.innerHTML += "You > " + newText + '<br>';
        }

        // Hard Coded Outputs :(
        if (newText == "How much should I have in my savings?") {
            myText.innerHTML += "Bot > Based on your weekly essential spending including your rental payments, food spending, fitness costs, etc. A 6 month emergency fund for you would be $9400!" + '<br>';
        } else if (newText == "What is a credit score?") {
            myText.innerHTML += "Bot > A credit score is a numerical representation of an individual's creditworthiness, ranging from 300 to 850, used by lenders to assess repayment likelihood. It is influenced by payment history, credit utilization, credit history length, types of credit, and recent inquiries. Higher scores lead to better loan terms and can affect rental agreements and employment. Improving a credit score involves timely payments, reducing debt, avoiding excessive credit applications, and monitoring credit reports for errors." + '<br>';
        }

        inputText.value = '';
    });
});