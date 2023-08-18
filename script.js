let computerScore = 0;
let playerScore = 0;
const scoreBoard = document.querySelector("#scoreBoard");
const currentScore = document.querySelector("#currentScore");
const finalResult = document.querySelector("#finalResult");
const computerScoreBoard = document.querySelector("#computerScoreBoard");
const playerScoreBoard = document.querySelector("#playerScoreBoard");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

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

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
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

console.log(rock, paper, scissors);

rock.addEventListener("click", () => {
  const result = playRound("rock");
  updateDivResult(result);
  updateCurrentScore();
  updateFinalScore();
});
paper.addEventListener("click", () => {
  const result = playRound("paper");
  updateDivResult(result);
  updateCurrentScore();
  updateFinalScore();
});

scissors.addEventListener("click", () => {
  const result = playRound("scissors");
  updateDivResult(result);
  updateCurrentScore();
  updateFinalScore();
});

function updateDivResult(text) {
  scoreBoard.textContent = text;
}
function updateCurrentScore() {
  computerScoreBoard.textContent = computerScore;
  playerScoreBoard.textContent = playerScore;
}
function finalResultFunction(playerScore, computerScore) {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      disableBtn();
      return "Congratulations, you win!";
    } else if (computerScore > playerScore) {
      disableBtn();
      return "what a bummer, you loose!";
    }
  }
  return;
}
function updateFinalScore() {
  const result = finalResultFunction(playerScore, computerScore);
  finalResult.textContent = result;
}
function disableBtn() {
  const buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}
