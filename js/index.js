document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById('sendButton');
    const inputText = document.getElementById('inputText');
    const myText = document.querySelector('.myText');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();

        const newText = inputText.value.trim();
        if (newText) {
            myText.innerHTML += "You > " + newText + '<br><br>';
        }

        // Hard Coded Outputs :(
        if (newText == "How much should I have in my savings?") {
            myText.innerHTML += "Bot > Based on your weekly essential spending including your rental payments, food spending, fitness costs, etc. A 6 month emergency fund for you would be $9400!" + '<br><br>';
        } else if (newText == "What is a credit score?") {
            myText.innerHTML += "Bot > A credit score is a numerical representation of an individual's creditworthiness, ranging from 300 to 850, used by lenders to assess repayment likelihood. It is influenced by payment history, credit utilization, credit history length, types of credit, and recent inquiries. Higher scores lead to better loan terms and can affect rental agreements and employment. Improving a credit score involves timely payments, reducing debt, avoiding excessive credit applications, and monitoring credit reports for errors." + '<br><br>';
        } else if (newText == "What is an emergency fund?") {
            myText.innerHTML += "Bot > An emergency fund is a savings account set aside for unexpected expenses or financial emergencies, such as medical bills, car repairs, or job loss. It provides a financial safety net, helping to avoid debt and maintain stability during unforeseen events." + "<br><br>";
        } else if (newText == "How long will it take to save up for my vacation based on my income?") {
            myText.innerHTML += "Bot > It will take you approximately 4 and a half months based on your current income!" + '<br></br>';
        }

        inputText.value = '';
    });
});