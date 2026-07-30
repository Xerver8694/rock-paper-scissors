let humanScore=0;
let computerScore=0;

function getPlayerChoice() {
  let userInput = prompt("Please choose: rock, paper, or scissors");
  return userInput.toLowerCase();
}

getPlayerChoice()

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
