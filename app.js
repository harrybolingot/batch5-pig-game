/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var diceMin = 1;
var diceMax = 6;

class Player {
    constructor(name){
        this.playerName = name;
    }

    get currentScore() {
        return this.calcCurrentScore(diceNumber);
    }

    get totalScore(){
        return this.totalScore;
    }

    calcCurrentScore(diceNumber) {
        this.currentScore += diceNumber;
    }

    calcTotalScore() {
        this.totalScore += currentScore;
    }
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startNewGame(){
    var player1 = new Player("Player 1");
    var player2 = new Player("Player 2");

    // Ensure scores are 0
    player1.currentScore = 0;
    player1.totalScore = 0;
    player2.currentScore = 0;
    player2.totalScore = 0;
}

function rollDice(player){
    // get random number between 1 and 6
    let diceRollValue = randomNumber(diceMin, diceMax);

    if(diceRoll == 1) {
        // If dice roll value is 1, player loses all round score (=0)
        player.currentScore() = 0;
    }
    else {
        // Else, add dice roll value to player's current score
        player.currentScore(diceRollValue);
    }
}