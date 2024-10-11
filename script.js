let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
  let number = Math.random()
  if (number <= 0.33) {
    return "rock"
  } 
  if (number > 0.33 && number <= 0.66) {
    return "paper"
  }
  return "scissors"
}

function getHumanChoice() {
  let message = "Choose one of rock, paper, scissors: "
  let userChoice = prompt(message)
  return userChoice
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++
    console.log("You lose! Scissors beat paper")
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++
    console.log("You win! Paper beats rock")
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
    console.log("You win! Rock beats paper")
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++
    console.log("You lose! Scissors beat paper")
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++
    console.log("You win! Paper beats rock")
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++
    console.log("You lose! Scissors beat paper")
  } else {
    console.log("It's a tie!")
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice().toLowerCase()
    let computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
  }

  console.log(`Your Score: ${humanScore}`)
  console.log(`Computer Score: ${computerScore}`)

  if (humanScore > computerScore) {
    console.log("You Win!")
  } else if (computerScore > humanScore) {
    console.log("You Lose!")
  } else {
    console.log("Its a Tie!")
  }
}

playGame()


