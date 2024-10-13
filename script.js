// Node.js allows you to run JavaScript outside of a wdb environment
const displayDiv = document.createElement("div");
displayDiv.classList.add("display-div");
const messageDiv = document.createElement("div");
messageDiv.classList.add("message-div");
const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score-div");

let humanScore = 0;
let computerScore = 0;
let isOver = false;

const getComputerChoice = () => {
  let number = Math.random();
  if (number <= 0.33) {
    return "rock";
  } 
  if (number > 0.33 && number <= 0.66) {
    return "paper";
  }
  return "scissors";
}

function getHumanChoice() {
  let message = "Choose one of rock, paper, scissors: ";
  let userChoice = prompt(message);
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    messageDiv.textContent = "You lose! Scissors beat paper";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    messageDiv.textContent = "You win! Paper beats rock";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    messageDiv.textContent = "You win! Rock beats scissors";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    messageDiv.textContent = "You lose! Paper beats rock";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    messageDiv.textContent = "You win! Scissors beats paper";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    messageDiv.textContent = "You lose! Rock beats scissors";
  } else {
    messageDiv.textContent = "It's a tie!"
  }

  scoreDiv.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

  if (humanScore == 5 && computerScore == 5) {
    isOver = true;
    alert("It's a tie")
  } else if (computerScore >= 5) {
    isOver = true;
    alert("Computer Wins!");
  } else if (humanScore >= 5) {
    isOver = true;
    alert("You Win!")
  }

  if (isOver) {
    messageDiv.textContent = "";
    scoreDiv.textContent = "";
    humanScore = 0;
    computerScore = 0;
    isOver = false;
  }
}

// create three buttons
document.querySelector("#rock-btn").addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});
document.querySelector("#paper-btn").addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});
document.querySelector("#scissor-btn").addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});

displayDiv.appendChild(messageDiv);
displayDiv.appendChild(scoreDiv);
document.querySelector("body").appendChild(displayDiv);


