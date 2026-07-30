function getPlayerChoice() {
  let userInput = prompt("Please choose: rock, paper, or scissors");
  return userInput.toLowerCase();
}

getPlayerChoice

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice())

getComputerChoice()
