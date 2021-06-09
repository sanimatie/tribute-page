const Quotes = [
"Ik heb honger.",
"Het is koud buiten, doe er wat aan.",
"Nee.",
"Geef aandacht.",
"IK ZIE NIKS.",
"Hoe bedoel je er staat nog eten???", 
"Mrauw",
"Miauw!",
"Grrrrrrrr",
"prrrrr",
"Miauw?"
]

let previousQuote;
// genereer een willekeurig indexnummer

function newQuote() {
const randomQuote = Math.floor(Math.random()*(Quotes.length));
const quoteText = document.getElementById('quote-text');

//zorg dat nooit direct na elkaar dezelfde quote verschijnt

if (randomQuote !== previousQuote){
	quoteText.innerHTML = '"' + Quotes[randomQuote] + '"';
	previousQuote = randomQuote;
	console.log(previousQuote);
	console.log(randomQuote);
} else {
	newQuote();
}
}

newQuote();
