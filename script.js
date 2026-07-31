// 1. Initialize variables
let humanScore = 0;
let computerScore = 0;

// 2. Select the HTML elements we need to interact with
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");

// 3. Keep the computer choice logic intact
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// 4. Refactor playRound to manipulate the DOM and check for game over
function playRound(humanChoice) {
  // If either player has already reached 5 points, stop playing
  if (humanScore >= 5 || computerScore >= 5) {
      return; 
  }

  const computerChoice = getComputerChoice();
  let roundMessage = "";

  // Determine the winner of the round
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

  // Display the round message and running score in the HTML div
  resultsDiv.innerHTML = `
    <p>${roundMessage}</p>
    <p><strong>Score -> Human: ${humanScore} | Computer: ${computerScore}</strong></p>
  `;

  // Announce the overall winner if a score reaches 5
  if (humanScore === 5) {
      resultsDiv.innerHTML += `<h2 style="color: green;">Game Over: You won the match!</h2>`;
  } else if (computerScore === 5) {
      resultsDiv.innerHTML += `<h2 style="color: red;">Game Over: The computer won the match.</h2>`;
  }
}

// 5. Add event listeners to the buttons
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));