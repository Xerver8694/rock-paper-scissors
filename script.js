let humanScore=0;
let computerScore=0;

function getPlayerChoice() {
  let userInput = prompt("Please choose: rock, paper, or scissors");
  return userInput.toLowerCase();
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice())

getComputerChoice()

function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}.`);
    return; 
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; 
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } 
  
  else {
    computerScore++; 
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }

  console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}

const humanChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`--- ROUND ${i + 1} ---`);

    const humanSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
  }

    console.log("=== GAME OVER ===");
  if (humanScore > computerScore) {
    console.log(`Final Result: You won the match ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`Final Result: The computer won the match ${computerScore} to ${humanScore}!`);
  } else {
    console.log(`Final Result: It's a true overall tie at ${humanScore} points each.`);
  }
}

playGame();
