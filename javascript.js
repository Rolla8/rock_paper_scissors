
function computerPlay() {

    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';

    let result = Math.floor(Math.random()*100);

    if (result <= 34) {
        return rock;
    } else if (result <= 67) {
        return paper;
    } else {
        return scissors;
    }
}





function playRound(computerSelection, playerSelection) {

    const rockAgainstScissors = 'You lose! Rock beats scissors.';
    const paperAgainstRock = 'You lose! Paper beats rock.';
    const scissorsAgainstPaper = 'You lose! Scissors beat paper.';
    const rockAndRock = 'It is a tie! Rock and Rock.';
    const paperAndPaper = 'It is a tie! Paper and paper.';
    const scissorsAndScissors = 'It is a tie! Scissors and scissors.';
    const scissorsAgainstRock = 'You won! Rock beats scissors!';
    const rockAgainstPaper = 'You won! Paper beats rock!';
    const paperAgainstScissors = 'You won! Scissors beat paper!';


    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return rockAgainstScissors;
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return paperAgainstRock;
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return scissorsAgainstPaper;
    } else if (computerSelection == 'rock' && playerSelection == 'rock') {
        return rockAndRock;
    } else if (computerSelection == 'paper' && playerSelection == 'paper') {
        return paperAndPaper;
    } else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
        return scissorsAndScissors;
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        return scissorsAgainstRock;
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        return rockAgainstPaper;
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        return paperAgainstScissors;
    }
}

let computerSelection = computerPlay();
const playerRock = 'rock';
const playerPaper = 'paper';
const playerScissors = 'scissors';

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {console.log(playRound(computerSelection, playerRock))});
const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {console.log(playRound(computerSelection, playerPaper))});
const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {console.log(playRound(computerSelection, playerScissors))});




/*

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (i=0; i<5; i++) {
        let playerSelection = prompt('Let\'s play! Write your choice: rock, paper or scissors!').toLowerCase();
        let computerSelection = computerPlay();
        let round = playRound(computerSelection, playerSelection)
        console.log(playRound(computerSelection, playerSelection));
        if (round == 'You lose! Rock beats scissors.' || round == 'You lose! Paper beats rock.' || round ==  'You lose! Scissors beat paper.') {
            computerScore += 1;
            console.log(`It is computer round! Score ${computerScore} - ${playerScore}`);
        } else if (round == 'You won! Rock beats scissors!' || round == 'You won! Paper beats rock!' || round ==  'You won! Scissors beat paper!') {
            playerScore += 1;
            console.log(`Congrats! This round is yours! Score ${computerScore} - ${playerScore}`);
        } else {
            console.log(`Tie for now. Score ${computerScore} - ${playerScore}`)
        }
    }
    if (computerScore > playerScore) {
        return console.log(`Game over. Final score ${computerScore} - ${playerScore}`);
    } else if (computerScore < playerScore) {
        return console.log(`You won the game! Final score ${computerScore} - ${playerScore}`);
    } else {
        return console.log(`Tough spot. It is a tie. Final score ${computerScore} - ${playerScore}`);
    }
}
*/




