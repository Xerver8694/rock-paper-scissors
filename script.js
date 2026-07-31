let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) {
      return; 
  }

  const computerChoice = getComputerChoice();
  let roundMessage = "";

  if (humanChoice === computerChoice) {
    roundMessage = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; 
    roundMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++; 
    roundMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  resultsDiv.innerHTML = `
    <p>${roundMessage}</p>
    <p><strong>Score -> Human: ${humanScore} | Computer: ${computerScore}</strong></p>
  `;

  if (humanScore === 5) {
      resultsDiv.innerHTML += `<h2 style="color: green;">Game Over: You won the match!</h2>`;
  } else if (computerScore === 5) {
      resultsDiv.innerHTML += `<h2 style="color: red;">Game Over: The computer won the match.</h2>`;
  }
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));