# rock_paper_scissors
Project: Rock Paper Scissors game
Game against computer;
It should contain 5 rounds;
At the end who scored more rounds win;

Game
Computer randomly return either rock, paper or scissors;
User select either rock, paper or scissors;
Single round should compare both selections and give user a massage with result;
It should be 5 rounds game that keeps score and report winner or loser at the  end;

Steps:
Create function computerGame() that would randomly  return either rock, paper or scissors;
Create variables computerSelection and playerSelection (playerSelection parameter is case-insensitive);
Use prompt function to get playerSelection parameter;
Create function playRound(), this function takes two parameters - playerSelection and computerSelection - compares it and then return a string that declares the winner of the  round;
Create function game() that would keep score and report winner or loser  at the end (use loop);