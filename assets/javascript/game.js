
//----------------------------------- Variables --------------------------------------

// Array of words spelled out for hangman game


// Array list of options for hangman game
var options = ["beyonce", "flawless", "slay", "lemonade",];


// Randomly choose a word from options variable to use in the game
var computerRandom = options[Math.floor(Math.random()*options.length)];


//sets a new variable to call empty divs and then fill with new information for functions below
var updatedWins = document.getElementById("wins").innerHTML=0;

var updatedComputerChoice = document.getElementById("computerChoice");
updatedComputerChoice.innerHTML=computerRandom;


var updatedGuessesLeft = document.getElementById("guessesLeft");
updatedGuessesLeft.innerHTML=9;

var updatedLettersGuessed = document.getElementById("lettersGuessed");
updatedLettersGuessed.innerHTML="";





// ---------------------------------------- Functions ----------------------------------

// maybe move updatedComputerChoice variable here

// show word as only dashes


// run this function whenever user presses a key, to record and document user guess
// document.onkeyup = function(event) {

function wordLength () {
  return this.options.length;
}

function initialWord() {
  var dashes = " ";
  for (var i=0; i < this.wordLength(); i++) {
    dashes + "_";
  }

  this.updatedComputerChoice = dashes;
  return dashes;
}

initialWord();

//
//   //determine which key was pressed
//  // search string for index of that letter, use var res = str.charAt(i); to show letter
//   var userGuess = event.key;
//
//
// };

// compare user key pressed to letters in chosen word

// loop for what to do, if key pressed matches show the letter, if not document letter in updatedLettersGuessed



// loop if word is guessed, add one to wins column, run win message, after 9 guesses if word not guessed, run lost message



//------------------------------------------------Processes
