const playerName1 = document.getElementById('name-0');
const playerScore1 = document.getElementById('score-0');
const playerCurrentScore1 = document.getElementById('current-0');
const playerName2 = document.getElementById('name-1');
const playerScore2 = document.getElementById('score-1');
const playerCurrentScore2 = document.getElementById('current-1');

var diceMin = 1, diceMax = 6, roundNumber = 0;
class Player {
    currentScore = 0;
    totalScore = 0;
    turn = true;
    hold = false;

    constructor(name){
        this.name = name;
    }

    updateScore(diceValue) {
        this.currentScore += diceValue;
    }

    playerHold() {
        this.totalScore += this.currentScore;
    }
}

let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

startNewGame();

console.log(player1.turn)
console.log(player2.turn)

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startNewGame(){
    player1.currentScore = 0;
    player2.currentScore = 0;
    player1.totalScore = 0;
    player2.totalScore = 0;
    player2.turn = false;
    playerScore1.innerHTML = 0;
    playerScore2.innerHTML = 0;
    playerCurrentScore1.innerHTML = 0;
    playerCurrentScore2.innerHTML = 0;
}

function rollDice(){
    // get random number between 1 and 6
    let diceRollValue = randomNumber(diceMin, diceMax);
    console.log(diceRollValue);
    if(player1.turn === true) {
        if(diceRollValue === 1) {
            player1.currentScore = 0;
            changeTurn();
        } else {
            player1.updateScore(diceRollValue);
        }
        console.log('PLAYER SCORE: ' + player1.currentScore);
        playerScore1.innerHTML = player1.currentScore;
    } else {
        if(diceRollValue === 1) {
            player2.currentScore = 0;
            changeTurn();
        } else {
            player2.updateScore(diceRollValue);
        }
        console.log('PLAYER SCORE: ' + player2.currentScore);
        playerScore2.innerHTML = player2.currentScore;
    } 
    // console.log("You rolled " + diceRollValue + "!\n" + "Player name: " + player.name + "\nCurrent score: " + player.currentScore + "\nStill your turn?: " + player.turn);
}

function holdScore() {
    if(player1.turn === true) {
        player1.playerHold();
        player1.currentScore = 0;
        console.log('PLAYER HELD: ' + player1.totalScore)
        playerCurrentScore1.innerHTML = player1.totalScore;
    } else {
        player2.playerHold();
        player2.currentScore = 0;
        console.log('PLAYER HELD: ' + player2.totalScore)
        playerCurrentScore2.innerHTML = player2.totalScore;
    }
    changeTurn();
}
function changeTurn() {
    player1.turn = !player1.turn;
    player2.turn = !player2.turn;
}