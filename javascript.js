
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

const playerSelection = "paper";
const computerSelection = computerPlay();

function playRound(computerSelection, playerSelection) {

    const rockAgainstScissors = 'You lose! Rock beats scissors.';
    const paperAgainstRock = 'You lose! Paper beats rock.';
    const scissorsAgainstPaper = 'You lose! Scissors beat paper';
    const rockAndRock = 'It is a tie! Rock and Rock.';
    const paperAndPaper = 'It is a tie! Paper and paper';
    const scissorsAndScissors = 'It is a tie! Scissors and scissors';
    const scissorsAgainstRock = 'You won! Rock beats scissors';
    const rockAgainstPaper = 'You won! Paper beats rock';
    const paperAgainstScissors = 'You won! Scissors beat paper';


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
