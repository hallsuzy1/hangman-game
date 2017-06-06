

//----------------------------------- Variables --------------------------------------

// Array list of options for hangman game
var options = ["beyonce", "flawless", "slay", "lemonade",];


//sets global variables to call empty divs and then fill with new information for functions below
var updatedWins = document.getElementById("wins").innerHTML=0;

var updatedGuessesLeft = document.getElementById("guessesLeft");
updatedGuessesLeft.innerHTML=9;

var updatedLettersGuessed = document.getElementById("lettersGuessed");
updatedLettersGuessed.innerHTML="";


var computerRandom = options[Math.floor(Math.random()*options.length)];
var initialOptions = [];
var updatedWord = [];
var updatedComputerChoice = document.getElementById("computerChoice");
var s;


// ---------------------------------------- Functions ----------------------------------

// function to randomly select word from options array, change to dashes, then use .join to change into a string

function randomize (){

  for(var i = 0; i < computerRandom.length; i++) {
    initialOptions[i] = "  ___  ";
    }
    s=initialOptions.join(" ");
      updatedComputerChoice.innerHTML=s;

}


  document.onkeyup = function(event) {
      var letterPressed = String.fromCharCode(event.key).toLowerCase();
      for(var i=0; i<computerRandom.length; i++)
      if (letterPressed === computerRandom[i]) {
          letterPressed = initialOptions[i];
      } else {
        var newDiv = document.getElementById("guessesLeft");
        newDiv.innerHTML = "hi Suzy";
        updatedLettersGuessed.appendChild(newDiv);
        updatedGuessesLeft--;
      }
  }


// run this function whenever user presses a key, to record and document user guess

//   function gamePlay () {
//       for(var i=0; i <computerRandom.length; i++) {
//         document.onkeyup = function(event){
//       if (computerRandom[i] === userGuess) {
//           initialOptions[i] = userGuess;
//           guess.appendChild(updatedLettersGuessed);
//           s=initialOptions.join(" ");
//           updatedComputerChoice.innerHTML=s;
// }
// }
// }
// }
//  gamePlay ();

        //   initialOptions[i] = " ___ ";
        //   updatedComputerChoice.innerHTML=initialOptions;
        // }else {
        //   updatedLettersGuessed.appendChild = guess;


      // newword[i] = guess;
      // updatedWins ++;
    // } else {


// function wordLength () {
//   return this.options.length;
// }
//
// function initialWord() {
//   var dashes = " ";
//   for (var i=0; i < this.wordLength(); i++) {
//     dashes + "_";
//   }
//
//   this.updatedComputerChoice = dashes;
//   return dashes;
// }
//
// initialWord();

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

randomize ();
// gamePlay ();
