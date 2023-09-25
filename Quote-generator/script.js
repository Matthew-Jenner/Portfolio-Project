const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
let apiQuotes = []

// show new quote
function newQuote(){
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
//    check if author field is blank and replace it with 'unknown'
if(!quote.author) {
    authorText.textContent = 'Unknown'
} else {
    authorText.textContent = quote.author
}
// check quote length to determine styling
if (quote.text.length > 75) {
    quoteText.classList.add('long-quote')
} else {
    quoteText.classList.remove('long-quote')
}
    quoteText.textContent = quote.text;
}

// get quotes from api
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {

        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote();
    } catch (error) {
        // catch error here
    }

}

// tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}
// event listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)
// on load
getQuotes()