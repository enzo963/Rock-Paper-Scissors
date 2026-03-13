

function getComputerChoice() {

    let number = Math.random();

    if (number <= 0.33) { return "rock"; }
    if (number <= 0.66) { return "paper"; }

    return "scissors";
}


let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();

    // console.log(`Humane  : ${humanChoice}`);
    // console.log(`Computr : ${computerChoice}`)

    if (humanChoice === computerChoice)
        alert(`You : ${humanChoice} - Tie|Tie - ${computerChoice} : Computer`);
    else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {

        humanScore++;
        alert(`You : ${humanChoice} - Win | Score: ${humanScore} - ${computerScore} : Computer`);

        if (humanScore >= 5) {
            alert(`You won the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
            humanScore = 0;
            computerScore = 0;
        }

    }
    else {
        computerScore++;
        alert(`You : ${humanChoice} - Lose | Score: ${humanScore} - ${computerScore} : Computer`);

        if (computerScore >= 5) {
            alert(`Computer won the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
            humanScore = 0;
            computerScore = 0;
        }
    }










// function playRound(HumanChoice, ComputerChoice) {

//     if (HumanChoice == "rock" && ComputerChoice == "paper") {
//         console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Lose`);
//     }
//     else if (HumanChoice == "rock" && ComputerChoice == "scissore") {
//         console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Win`);
//     }
//     else if (HumanChoice == "paper" && ComputerChoice == "rock") {
//         console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Win`);
//     }
//     else if (HumanChoice == "paper" && ComputerChoice == "scissore") {
//         console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : lose`);
//     }
//     else if (HumanChoice == "scissore" && ComputerChoice == "paper") {
//         console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Win`);
//     }
//     else if (HumanChoice == "scissore" && ComputerChoice == "rock") {
//         console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : lose`);
//     }
//     else if (HumanChoice == ComputerChoice) {
//         console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | Tie`);
//     }


/* 

after the user peck one of these Rosk, Paper, Ssissore

maybe we can represent 1, 2, 3 but it is not beatifull in git hub 


*/

