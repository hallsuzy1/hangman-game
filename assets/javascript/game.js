

//----------------------------------- Variables --------------------------------------

// Array list of options for hangman game
var options = ["beyonce", "flawless", "slay", "lemonade",];


//sets global variables to call empty divs and then fill with new information for functions below
var updatedWins = document.getElementById("wins").innerHTML=0;

var w = 9;
var updatedGuessesLeft = document.getElementById("guessesLeft");
updatedGuessesLeft.innerHTML=w;


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
      var letterPressed = String.fromCharCode(event.keyCode).toLowerCase(); // this captures the key pressed and saves as a variable
                console.log(letterPressed);
            w--;  // this counts down the number of guesses
            updatedGuessesLeft.innerHTML=w;  // this updates the countdown on the page
      var newDiv = document.createElement("div");
            newDiv.innerHTML = letterPressed;
            updatedLettersGuessed.append(newDiv);
      if( w===0) {
        alert("Game is over, refresh the page to play again");
      }

      for(var j=0; j<computerRandom.length; j++){
      // console.log("counter is " + j);
      // console.log("type of computerRandom is: " + typeof computerRandom)
      // console.log("computerRandom letter is " + computerRandom.charAt(j));
      console.log("word is:" + computerRandom);
      if (letterPressed === computerRandom.charAt(j)) {
          // j = letterPressed;
        updatedComputerChoice.innerHTML=initialOptions[j];

          console.log("charAt" + computerRandom.charAt(j));
          console.log("updated comp choice variable:" + updatedComputerChoice);
          // var removed = initialOptions.splice(j,1,letterPressed);
          // console.log("if processed!")
          // console.log("removed" + removed);
      } else {
        // var newDiv = document.createElement("div");
        // newDiv.innerHTML = letterPressed;
        // updatedLettersGuessed.append(newDiv);

      }
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
