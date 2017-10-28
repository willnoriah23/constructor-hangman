var letter = require('./letter.js');
var wordBank = ["haiku", "kiosk", "yacht", "oxygen", "pixel"];


var word = function word() {
	this.chosenWrd = wordBank[Math.floor(Math.random()* wordBank.length)];
	this.splitWord = this.chosenWrd.split("");
	//console.log(this.chosenWrd);
	//console.log(this.splitWord);
	this.guesses = 10;
	this.guessedLets = [];
	
	this.rightGuess = function rightGuess(thing) {
			// Checks to see if the letter input by user is in the array aka already chosen
		if (this.guessedLets.indexOf(thing) === -1)	{
			// Checks to see if letter input by user is a letter in the chosen word
			if (this.splitWord.indexOf(thing) === -1 ) {
				this.guesses--;
				console.log("\nThat wasn't it..\n");
				console.log("\nYou have " + this.guesses + " remaining.\n");
				} else {
					console.log("\nThat's correct!\n");
				}
				this.guessedLets.push(thing);
			} else {
				console.log("\nYou guessed that already!\n")
				console.log("\nLet's try that again\n");
			} 
		}
	};

module.exports = {word:word};