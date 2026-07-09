

function getComputerChoice() {

    let number = Math.random();

    if (number <= 0.33) { return "rock"; }
    if (number <= 0.66) { return "paper"; }

    return "scissors";
}

let humanScore = 0;
let computerScore = 0;

const humanScoreElement = document.querySelector(".you-score");
const computerScoreElement = document.querySelector(".computer-score");
const resultElement = document.querySelector(".text-score");


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);

    updateScore(result);
    updateUI(result);
    checkWinner();
}


function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie";
    }

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        return "Win";
    }

    return "Lose";
}

function updateScore(result) {
    if (result === "Win") {
        humanScore++;
    } else if (result === "Lose") {
        computerScore++;
    }
}

function updateUI(result) {
    if (result === "Win") {
        humanScoreElement.textContent = humanScore;
        resultElement.textContent = "You Win!";
    } else if (result === "Lose") {
        computerScoreElement.textContent = computerScore;
        resultElement.textContent = "You Lose!";
    } else {
        resultElement.textContent = "It's a Tie!";
    }
}

function checkWinner() {
    if (humanScore >= 5) {
        resultElement.textContent = "You won the game!";
        resetGame();
    } else if (computerScore >= 5) {
        resultElement.textContent = "Computer won the game!";
        resetGame();
    }

}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}














