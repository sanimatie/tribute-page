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

let copyQuote = [...Quotes];
let finalQuote;

function newQuote() {
	//genereer een willekeurig indexnummer
	const randomQuote = Math.floor(Math.random()*(copyQuote.length));
	const quoteText = document.getElementById('quote-text');
		//reset de array als alle opties geweest zijn
		if (copyQuote.length == 1){
		copyQuote = [...Quotes];
		}
//voorkom herhaling van dezelfde quote na het resetten van de array	
if (finalQuote !== copyQuote[randomQuote]){
//plaats de quote in het html block
finalQuote = copyQuote[randomQuote];
quoteText.innerHTML = '"' + finalQuote + '"';
//haal quote uit de array
copyQuote.splice(randomQuote, 1);
} else {
	//herhaal de functie als de nieuwe quote hetzelfde was als de vorige
	newQuote();
} 
}

newQuote();
