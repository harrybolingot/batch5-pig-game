// functions to build program:

// roll dice()
// check dice()
// reset if 1 ()
// check roll score()
// add roll score()
// hold()
// add score to total()
// check player()

const playerName1 = document.getElementById('name-0');
const playerScore1 = document.getElementById('score-0');
const playerCurrentScore1 = document.getElementById('current-0');
const playerName2 = document.getElementById('name-1');
const playerScore2 = document.getElementById('score-1');
const playerCurrentScore2 = document.getElementById('current-1');
let turnCount;

function addPlayerScore(player) {
    if(turn != 0) {
        //add diceRoll score to playerScore
        playerName1.innerHTML = player.Name;
        playerScore1.innerHTML = player.score;
        playerCurrentScore1.innerHTML = player.currentScore;
    } else {
        //add diceRoll score to playerScore
        playerName2.innerHTML = player.Name;
        playerScore2.innerHTML = player.score;
        playerCurrentScore2.innerHTML = player.currentScore;
    }
}

function holdScore(player) {
    //add playerScore to totalScore
    //display totalScore
    return player;
}


