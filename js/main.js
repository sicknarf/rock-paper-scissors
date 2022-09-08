//rock paper scissors, best 2 out of 3!

//the below was commented out- as it was old code.
/*

//this logs the computer's choices, make sure to modify it to use the npcChoice object
let npcInput1 = npcFirst;
let npcInput2 = "placeholder paper";
let npcInput3 = "placeholder scissors";

*/

console.log("=======THIS IS HERE TO NOTATE THE START OF A CONSOLE RUN=======")
let pScore = 0;
let npcScore = 0;
let playerHistory = [];
let npcHistory = [];
let failProtect = 0;
/*
function pFrontInput(){
  pInput = 1;
  }; //placeholder function
*/
let gameState = false; //prevents the game from auto-starting by setting a state.
function gamePause(){
  gameState = false;
  }; //changes the state back to false to end a round
let pInput = 1;  //Input that will choose an array
/*
function gameStart(){
  gameState = true;
  console.log("game starts the state at "+gameState)
  } (old unnecessary code)
 */
/*
the object that will provide the playable values for rock, paper and scissors for the player.
I am using math so that player and enemy player (NPC) values will add to specific values that will determine win or lose
*/
const playerElements = {
  roll: [1, 5, 11],
  //rock 1, paper 5, scissors 11
  //the object that will provide the playable values for rock, paper and scissors for the NPC
  };//an object that has rock, paper, scissors, and corresponding values.
const npcElements = {
    roll: [-1, -5, -11], 
  //rock -1, paper -5, scissors -11
  };//the same for the NPC
/* below an object that should tie player inputs to the winning/losing values. The followig code could have been simplified to the commented block below and eliminate the above two objects:

  let pChoice = {
    rock:1,
    paper:5,
    scissors:11,
  }
  //
  
  but I am leaving it as is to demonstrate pointing to keys and values in anoter object
  *///comments on complications of these objects/arrays
function endGame() {
  playerHistory = [];
  npcHistory = [];
  pScore = 0;
  npcScore = 0;
  console.log("endGame function was run here.");
  }//this resets the arrays and scores.
function finalScore(){
  return "wins: "+pScore+", losses: "+npcScore;
  }//lists the final score of the game. this is for the end.
function playTime() {
  let pChoice = {
  lapis: playerElements.roll[0],
  papyrus: playerElements.roll[1],
  scalpellus: playerElements.roll[2]
  };//variable that points to the element in an array
  let npcChoice = {
  lapis: npcElements.roll[0],
  papyrus: npcElements.roll[1],
  scalpellus: npcElements.roll[2]
  };//variable that points to the element in an array
  let randomNo = Math.floor(Math.random() * 3);
  function randomizer() {
  randomNo = Math.floor(Math.random() * 3)
  }//RNG
  let playerObject = Object.keys(pChoice)[pInput];//dictates what player choice was
  let npcObject = Object.keys(npcChoice)[randomNo];//dictates what NPC choice was
  /*
console.log(npcElements.roll[randomNo]);  
//this will take the player input and modify the object below, make sure to modify it to use the playerChoice object
  let pInput1 = "placeholder rock";
  let pInput2 = "placeholder paper";
  let pInput3 = "placeholder scissors";
  *///Old Code  
  let pPlay = playerElements.roll[pInput];//value to go into the equation for winning/losing
  let npcPlay = npcElements.roll[randomNo];//value to go into the equation for winning/losing
  let match = pPlay + npcPlay;//the equation to determine win/lose
  function reCord() {
  playerHistory.push(String(playerObject));
  npcHistory.push(String(npcObject)); 
  }//records player history and adds to array
  function pMatchWin() {
    document.querySelector('h2').innerText= "YOU WON by playing "+playerObject+" and your opponent played "+npcObject;
    pScore++;
    randomizer();
    }//what happens when a match is won
  function scoreBoard() {
  document.querySelector('.score').innerText =pScore+":"+npcScore;
  }//"the current score is x"
  function pMatchLose() {
  document.querySelector('h2').innerText= "YOU LOST by playing "+playerObject+" and your opponent played "+npcObject;
  scoreBoard()
  npcScore++;
  randomizer();
  }//what happens when a match is lost
  function compareChoices() {
  
  }//placeholder
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
  console.log("The match is tied at "+pScore+":"+npcScore+"!");
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
  /*
  //I originally had separate win and lose condition functions. I've combined them all under winConditions().
  function loseConditions() {
    npcMatchWin();
    reCord();
    //nested nested if statement for reading whether the NPC has won the game or not
    if(npcScore === 2){
      pGameLose();
      //reads if we are at a tie
    } else if(pScore === 1 && npcScore === 1){
        itsTied();
        pFrontInput();
      //provides the score if there is no lcear winer yet.
    } else {
        scoreBoard();
        pFrontInput();
      }
  }
  *///old code
  function drawConditions() {
  document.querySelector('h2').innerText= "IT'S A DRAW! You both chose "+playerObject;
  scoreBoard();
  randomizer();
  reCord();
  }//what happens when you both roll the same hand.
  function failSafe() {
  console.log("the game broke");
  pScore = 9999;
  console.log("the pScore is "+ pScore);
  console.log("pScore "+pScore);
  console.log("npcScore "+npcScore);
  console.log("pPlay should match playerObject: "+pPlay+" "+playerObject);
  console.log("npcPlay should match npcObject: "+npcPlay+" "+npcObject);
  console.log("match value is "+match);
  }//old failsafe function to protect me from infinite loops.
  if(gameState == true) {
    console.log("You chose "+playerObject)
    console.log("Your opponent chose " + npcObject);
  if(pScore <2 && npcScore <2) {
    failProtect++;
  if(match === 4 || match === 6 || match === -10) {
    pMatchWin();
    winConditions();
    gamePause();
    //nested if statement for the NPC wins
  } else if(match === -4 || match === -6 || match === 10) {
    pMatchLose();
    winConditions();
    gamePause();
    //nested if statement for a draw
  } else if(match === 0) {
    drawConditions();
    gamePause();
  } else {
    failsafe();
  }
  //failsafe for infinite loops
  if (failProtect>100){
    failSafe();
  }
  //below closes the while loop for the scores
}
//
  }
}
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
//
// 0 is a tie 
// 4 is win
// 6 is win
//-10 is win
//-4 is lose
//-6 is lose
// 10 is lose
*///explanation of game mechanics
function resetBoard(){
  endGame();
  document.querySelector('.score').innerText =pScore+":"+npcScore;
  document.querySelector('.matchresults').innerText = "";
  document.querySelector('.gamewin').innerText = "";
  document.querySelector('.history').innerText = "";
  document.querySelector('h2').innerText = "Good Luck!";
  document.querySelector('h4').innerText = "";
}//resets the game to 0

document.getElementsByClassName('game')[0].style.visibility='hidden' 

function hidePregame() {
  //placeholder, hide pregame class, show game class
  document.getElementsByClassName('pregame')[0].style.display='none';
  document.getElementsByClassName('game')[0].style.visibility='visible'  
  console.log('ran pregame')
}//code to hide the instructions once "I understand is clicked"

//button functionality
document.querySelector('#buttTime').onclick = hidePregame;
document.querySelector('#rock').onclick = chooseRock;
document.querySelector('#paper').onclick = choosePaper;
document.querySelector('#scissors').onclick = chooseScissors;
document.querySelector('#newgame').onclick = resetBoard;

console.log("^v^v^v^THIS IS HERE TO NOTATE THE END OF A CONSOLE RUN^v^v^v^");