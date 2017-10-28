var inquirer = require('inquirer');
var letter = require('./letter.js');
var word = require("./word.js");
var chosenWord;
var letObj = [];
var displayStr = "";

var game = function game(chosenWord) {
	if (chosenWord.guesses > 0) { 
	inquirer
	.prompt([
		{	
		type:"input",
		name:"guess",
		message:"Guess a letter."
		}
		]).then(function(answer){
			chosenWord.rightGuess(answer.guess);
			createLetterObj();
			displayWord();
		if (displayStr.indexOf("_") === -1) {	
			chosenWord = new word.word();	
			game(chosenWord);
		} else {
			game(chosenWord);
			}
		})
	}
};

//Creating a empty string to display the split word properly, with letters and spaces
function createLetterObj() {
	letObj = [];
	for (var i = 0; i < chosenWord.splitWord.length; i++) {
		letObj.push(new letter.letter(chosenWord.splitWord[i], chosenWord.guessedLets));
		//console.log(letObj[i]);

	}
};

function displayWord() {
	displayStr = "";
	for (var i = 0; i < letObj.length; i++) {
		displayStr = displayStr + letObj[i].letterRender() + " ";
	}
		console.log(displayStr);
}

inquirer
	.prompt([
	{
	  type: "confirm",
      message: "Do you want to play a difficult game of Hangman?",
      name: "game",
      default: true
     } 
		]).then(function(startGame){
			if (startGame.game === true) {		
			chosenWord = new word.word();
			//console.log(chosenWord.guesses);
			//console.log(chosenWord);
			game(chosenWord);
			}  
		});

// Function to start game
// Ask user to guess a letter, allow for input
// Game loops through an array to find a word to guess, display underscore
// Display number of guesses left
// Loop through letters of word to guess
// Display correct number of letters to guess
// Allow user to input letter, tell if user is correct/incorrect