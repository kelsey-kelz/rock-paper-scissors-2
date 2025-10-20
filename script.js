const app = document.createElement("div");
app.setAttribute("style", "font-family: Arial, sans-serif; text-align: center; margin-top: 50px;");
document.body.appendChild(app);

const title = document.createElement("h1");
title.textContent = "Rock Paper Scissors SHOOT!";
app.appendChild(title);

let playerScore = 0;
let computerScore = 0;

const scoreDiv = document.createElement("div");
scoreDiv.innerHTML = `
        <strong>Player:</strong> <span id="playerScore">0</span>
        <strong>Computer:</strong> <span id="computerScore">0</span>
`;
scoreDiv.setAttribute("style", "font-size: 20px; margin-bottom: 20px;");
app.appendChild(scoreDiv);

const resultDiv = document.createElement("div");
resultDiv.id = "results";
resultDiv.setAttribute("style", "font-size: 18px; margin: 20px 0;");
app.appendChild(resultDiv);

const choices = ["rock", "paper", "scissors"];
const buttonContainer = document.createElement("div");

choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
    button.id = choice;
    button.setAttribute("style", "margin: 10px; padding: 10px 20px; font-size: 16px; cursor: pointer;");

    button.addEventListener("click", () => {
        playRound(choice, computerPlay());
    });
    buttonContainer.appendChild(button);
});

app.appendChild(buttonContainer);

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let resultMessage = "";

    if (playerSelection === computerSelection) {
        resultMessage = "it's a draw! you both chose " + playerSelection + ".";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        resultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    resultDiv.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}.${resultMessage}`;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// // function to get computer choice
// function getComputerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }
// console.log(getComputerChoice());

// // function to get human choice
// function getHumanChoice() {
//     let userChoice = prompt("Rock Paper Scissors SHOOT: ");

//     userChoice.toLowerCase();

//     if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
//         return userChoice;
//     } else {
//         return 'Invalid choice!';
//     }
// }

// let humanScore = 0;
// let computerScore = 0;

// // play one round of the game
// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//         return "It's a tie! You both chose " + humanChoice;
//     } else if (
//         (humanChoice === 'rock' && computerChoice === 'scissors') ||
//         (humanChoice === 'paper' && computerChoice === 'rock') ||
//         (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         humanScore++;
//         return "You win! " + humanChoice + " beats " + computerChoice;
//     } else if(
//         (computerChoice === 'rock' && humanChoice === 'scissors') ||
//         (computerChoice === 'paper' && humanChoice === 'rock') ||
//         (computerChoice === 'scissors' && humanChoice === 'paper')
//     ) {
//         computerScore++;
//         return "You lose! " + computerChoice + " beats " + humanChoice;
//     }

// }

// const btndiv = document.querySelector("div");

// const rockbtn = document.createElement('button');
// rockbtn.textContent = 'Rock';
// rockbtn.addEventListener('click', () => {
//     playRound('rock', getComputerChoice());
// });
// const paperbtn = document.createElement('button');
// paperbtn.textContent = 'Paper';
// paperbtn.addEventListener('click', () => {
//     playRound('paper', getComputerChoice);
// })
// const scissorsbtn = document.createElement('button');
// scissorsbtn.textContent = 'Scissors';
// scissorsbtn.addEventListener('click', () => {
//     playRound('scissors', getComputerChoice);
// })

// btndiv.appendChild(rockbtn);
// btndiv.appendChild(paperbtn);
// btndiv.appendChild(scissorsbtn);

// // // function to play the game
// // // function playGame() {
// // //     for (let round = 1; round <= 5; round++) {
// // //         const humanSelection = getHumanChoice();
// // //         console.log("Human:    " + humanSelection);
// // //         const computerSelection = getComputerChoice();
// // //         console.log("Computer: " + computerSelection);
// // //         console.log(playRound(humanSelection, computerSelection));
// // //         console.log("Score: Human " + humanScore + " - Computer " + computerScore);
// // //         console.log('------------------------------');
// // //     }

// // //     if (humanScore === computerScore) {
// // //     return "\nIT'S A TIE! GAME OVER.";
// // //     } else if (humanScore > computerScore) {
// // //     return '\nYOU WIN! GAME OVER.';
// // //     } else return '\nTHE COMPUTER WINS! GAME OVER.';    
// // // }


// //     if (humanChoice === computerChoice) {
// //         return "It's a tie! You both chose " + humanChoice;
// //     } else if (
// //         (humanChoice === 'rock' && computerChoice === 'scissors') ||
// //         (humanChoice === 'paper' && computerChoice === 'rock') ||
// //         (humanChoice === 'scissors' && computerChoice === 'paper')
// //     ) {
// //         humanScore++;
// //         return "You win! " + humanChoice + " beats " + computerChoice;
// //     } else if(
// //         (computerChoice === 'rock' && humanChoice === 'scissors') ||
// //         (computerChoice === 'paper' && humanChoice === 'rock') ||
// //         (computerChoice === 'scissors' && humanChoice === 'paper')
// //     ) {
// //         computerScore++;
// //         return "You lose! " + computerChoice + " beats " + humanChoice;
// //     }

// // }
// // )
// // })




// // // console.log(playGame());