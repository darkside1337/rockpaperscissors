let playerChoice = "scissors";
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;
// ** //
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else if (randomNum === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "You both choose rock, It's a draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You loose, paper wraps rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win, rock smashes scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win, paper wraps scissors!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "You both choose paper, It's a draw!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You loose, scissors cuts paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You loose, rock smashes scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win, scissors cut paper!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "You both pick scissors, It's a draw!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let result = playRound(prompt("Pick your weapon?"), computerSelection);
    console.log(result);
  }
  if (playerScore > computerScore) {
    return "Congratulations, you win!";
  } else if (computerScore > playerScore) {
    return "what a bummer, you loose!";
  }
}
game();
