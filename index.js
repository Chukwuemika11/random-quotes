// Sample quotes - you can add more quotes to this array
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll"
];

document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    newQuoteButton.addEventListener('click', function () {
        // Get a random quote from the array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        
        // Display the random quote
        quoteElement.textContent = randomQuote;
    });
});

