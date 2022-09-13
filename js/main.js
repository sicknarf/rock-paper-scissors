//rock paper scissors, best 2 out of 3!
let pScore = 0;
let npcScore = 0;
let playerHistory = [];
let npcHistory = [];
let pInput = 1;  //Input that will choose an array
const playerElements = {
  roll: [1, 5, 11],
  //rock 1, paper 5, scissors 11
  //the object that will provide the playable values for rock, paper and scissors for the NPC
};
const npcElements = {
    roll: [-1, -5, -11], 
  //rock -1, paper -5, scissors -11
};
const pChoice = {
  lapis: playerElements.roll[0],
  papyrus: playerElements.roll[1],
  scalpellus: playerElements.roll[2]
}; //variable that points to the element in an array
const npcChoice = {
  lapis: npcElements.roll[0],
  papyrus: npcElements.roll[1],
  scalpellus: npcElements.roll[2]
}; //variable that points to the element in an array
let randomNo = Math.floor(Math.random() * 3);
let playerObject = Object.keys(pChoice)[pInput]; //dictates what player choice was
let npcObject = Object.keys(npcChoice)[randomNo]; //dictates what NPC choice was
let pPlay = playerElements.roll[pInput]; //value to go into the equation for winning/losing
let npcPlay = npcElements.roll[randomNo]; //value to go into the equation for winning/losing
let match = pPlay + npcPlay; //the equation to determine win/lose
let gameState = false; //prevents the game from auto-starting by setting a state.

// DOM & Event Listeners
document.getElementsByClassName('game')[0].style.visibility='hidden'
document.querySelector('#buttTime').onclick = hidePregame;
document.querySelector('#rock').onclick = chooseRock;
document.querySelector('#paper').onclick = choosePaper;
document.querySelector('#scissors').onclick = chooseScissors;
document.querySelector('#newgame').onclick = resetBoard;

// functions
function gamePause(){
  gameState = false;
  }; //changes the state back to false to end a round

function endGame() {
  playerHistory = [];
  npcHistory = [];
  pScore = 0;
  npcScore = 0;
  } //this resets the arrays and scores.
function finalScore(){
  return "wins: "+pScore+", losses: "+npcScore;
  } //lists the final score of the game. this is for the end.

function playTime() {
  if (gameState == true) {
    if (pScore <2 && npcScore <2) {
      if (match === 4 || match === 6 || match === -10) {
        pMatchWin();
        winConditions();
        gamePause();
        //nested if statement for the NPC wins
      } else if (match === -4 || match === -6 || match === 10) {
        pMatchLose();
        winConditions();
        gamePause();
        //nested if statement for a draw
      } else if(match === 0) {
        drawConditions();
        gamePause();
      }
    }
  }
}

function reCord() {
  playerHistory.push(String(playerObject));
  npcHistory.push(String(npcObject)); 
  }//records player history and adds to array

function pMatchWin() {
  document.querySelector('h2').innerText= "YOU WON by playing "+playerObject+" and your opponent played "+npcObject;
  pScore++;
  randomNo = Math.floor(Math.random() * 3);
}//what happens when a match is won
function scoreBoard() {
  document.querySelector('.score').innerText =pScore+":"+npcScore;
  }//"the current score is x"

function pMatchLose() {
  document.querySelector('h2').innerText= "YOU LOST by playing "+playerObject+" and your opponent played "+npcObject;
  scoreBoard()
  npcScore++;
  randomNo = Math.floor(Math.random() * 3);
}//what happens when a match is lost

function pGameWin(){
  document.querySelector('.score').innerText =pScore+":"+npcScore;
  document.querySelector('.matchresults').innerText = "CONGRATULATIONS! You've won the whole game with the score at "+pScore+":"+npcScore+"!";
  document.querySelector('.history').innerText ="You played "+playerHistory+". While your opponent played "+npcHistory;
}//what happens when you win 2 out of 3

function pGameLose() {
  scoreBoard();
  document.querySelector('.matchresults').innerText= "GAME OVER, you played "+playerObject+" and your opponent played "+npcObject;
  document.querySelector('.history').innerText ="You played "+playerHistory+". While your opponent played "+npcHistory;
  }//what happens when you lose 2 out of 3

function itsTied(){
  scoreBoard()
  }//what happens when the game is tied

function winConditions() {
  reCord();
  //nested nested if statement for reading whether the player has won the game or not
  if(pScore === 2) {
    pGameWin();
    document.querySelector('h4').innerText = 'The results of your last game are '+finalScore();
    endGame();
    //reads if we are at a tie
  } else if (npcScore === 2) {
    pGameLose();
    document.querySelector('h4').innerText = 'The results of your last game are '+finalScore();
    endGame();
  } else if(pScore === 1 && npcScore ==1){
    itsTied();
  } else {
    //lists the score if no determination has been made.
    scoreBoard();
      }
  }//reads for whether or not you won, and what steps to take after

function drawConditions() {
  document.querySelector('h2').innerText= "IT'S A DRAW! You both chose "+playerObject;
  scoreBoard();
  randomNo = Math.floor(Math.random() * 3);
  reCord();
  }//what happens when you both roll the same hand.

function failSafe() {
  pScore = 9999;
  }//old failsafe function to protect me from infinite loops.

function chooseRock(){
  pInput = 0;
  gameState = true;
  playTime();
  }; //chooses rock and sets the game state to True

function choosePaper(){
  pInput = 1;
  gameState = true;
  playTime();
  }; //chooses paper and sets the game state to True

function chooseScissors(){
  pInput = 2;
  gameState = true;
  playTime();
  }; //chooses scissors and sets the game state to True

/*
// 0 is a tie 
// 4 is win
// 6 is win
//-10 is win
//-4 is lose
//-6 is lose
// 10 is lose
*/
function resetBoard(){
  endGame();
  document.querySelector('.score').innerText =pScore+":"+npcScore;
  document.querySelector('.matchresults').innerText = "";
  document.querySelector('.gamewin').innerText = "";
  document.querySelector('.history').innerText = "";
  document.querySelector('h2').innerText = "Good Luck!";
  document.querySelector('h4').innerText = "";
}//resets the game to 0

function hidePregame() {
  //placeholder, hide pregame class, show game class
  document.getElementsByClassName('pregame')[0].style.display='none';
  document.getElementsByClassName('game')[0].style.visibility='visible'  
  console.log('ran pregame')
}//code to hide the instructions once "I understand is clicked"

