const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "You are never too old to set another goal or to dream a new dream.",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById('quote')


function generateQuote() {
    if (usedIndexes.size === quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIndex)) {
            continue
        }
        const quote = quotes[randomIndex]
        quoteElement.innerText = quote 
        usedIndexes.add(randomIndex)
        break   
    }
   
}