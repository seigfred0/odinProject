let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor']
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function playRound() {
    const computerSelection = getComputerChoice();
    let playerSelection = window.prompt("What do you choose?");
    playerSelection = playerSelection.toLowerCase()

   if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor')) {
    console.log("Invalid Choice, choose wiser");
    return
   }

   console.log("Computer: " + computerSelection);
   console.log("Human: " + playerSelection)

    if (playerSelection === computerSelection) {
        console.log("It's a Tie! Both have chosen rock " + playerSelection);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection  === 'paper' && computerSelection === 'rock')
    ) {
        humanScore++;
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    } else {
        computerScore = computerScore + 1;
        console.log("You Lose " + computerSelection + " beats " + playerSelection);
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }

    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (humanScore < computerScore) {
        console.log("Computer Won")
    } else {
        console.log("It's a Tie!")
    }

    console.log("Final Score - Computer: " + computerScore + " You " + humanScore)
}


game()


