// function to get computer choice
function getComputerChoice() {

    let compChoice = Math.floor(Math.random() * 3);

    switch (compChoice) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }

    // alternative method using ARRAYS
    // const choices = ['rock', 'paper', 'scissors'];
    // const randomIndex = Math.floor(Math.random() * choices.length);
    // return choices[randomIndex];

}

// function to get human choice
function getHumanChoice() {
    let userChoice = prompt("Rock Paper Scissors SHOOT: ");

    userChoice.toLowerCase();

    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        return 'Invalid choice!';
    }
}

let humanScore = 0;
let computerScore = 0;

// play one round of the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! You both chose " + humanChoice;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else if(
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }

}

// function to play the game
function playGame() {
    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        console.log("Human:    " + humanSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer: " + computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        console.log("Score: Human " + humanScore + " - Computer " + computerScore);
        console.log('------------------------------');
    }

    if (humanScore === computerScore) {
    return "\nIT'S A TIE! GAME OVER.";
    } else if (humanScore > computerScore) {
    return '\nYOU WIN! GAME OVER.';
    } else return '\nTHE COMPUTER WINS! GAME OVER.';    
}

console.log(playGame());