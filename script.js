const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  }
];

function generateQuote() {
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const quoteBox = document.getElementById('quote-box');

  // Fade out
  quoteBox.style.opacity = 0;

  setTimeout(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${random.text}"`;
    authorElement.textContent = `– ${random.author}`;

    // Fade in
    quoteBox.style.opacity = 1;
  }, 400);
}
