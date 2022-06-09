const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

function computerPlay() {
    let result = Math.floor(Math.random()*100);

    if (result <= 34) {
        return rock;
    } else if (result <= 67) {
        return paper;
    } else {
        return scissors;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

function playRound(computerSelection, playerSelection) {
    

   
}
