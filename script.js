const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" }
];

const quoteBox = document.getElementById('quote-box');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const button = document.getElementById('new-quote-btn');

function getNewQuote() {
    quoteBox.classList.add('fade');

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const nextQuote = quotes[randomIndex];

        quoteText.textContent = `"${nextQuote.text}"`;
        quoteAuthor.textContent = `- ${nextQuote.author}`;

        quoteBox.classList.remove('fade');
    }, 300);
}

button.addEventListener('click', getNewQuote);
