/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var diceMin = 1, diceMax = 6, roundNumber = 0;

class Player {
    currentScore = 0;
    totalScore = 0;
    turn = true;
    hold = false;

    constructor(name){
        this.name = name;
    }

    updateScore(diceRoll) {
        if (diceRoll == 1){
            this.currentScore = 0;
            this.turn = false;
        } 
        else {
            this.currentScore += diceRoll;
        }
    }

    hold() {
        hold = true;
        this.totalScore += this.currentScore;
    }
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startNewGame(){
    player1 = new Player("Player 1");
    player2 = new Player("Player 2");
}

function rollDice(player){
    // get random number between 1 and 6
    let diceRollValue = randomNumber(diceMin, diceMax);
    player.updateScore(diceRollValue);
    console.log("You rolled " + diceRollValue + "!\n" + "Player name: " + player.name + "\nCurrent score: " + player.currentScore + "\nStill your turn?: " + player.turn);
}