const Quotes = [
"Ik heb honger.",
"Het is koud buiten, doe er wat aan.",
"Nee.",
"Geef aandacht.",
"IK ZIE NIKS.",
"Hoe bedoel je er staat nog eten???"
]

function newQuote() {
// genereer een willekeurig indexnummer
const randomQuote = Math.floor(Math.random()*(Quotes.length));
document.getElementById("quote-text").innerHTML = '"' + Quotes[randomQuote] + '"';
}

newQuote();