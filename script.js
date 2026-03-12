

/*

button
|
|
v

Paramert = number 

IF number <= 0.3 
    returen "paper" 
ELSE IF number >= 0.6
    returen "Rock" 
ELSE
    returen "Scissore"


        <div class="glass-box">
        <button onclick="
            
            let number = Math.random();
            getComputerChoice(number)">Random number </button>
    </div>
*/

/* 

1 - function for computer (actvation auto)
2 - function for human (actvation by User Input)
3 - funcation for PlayGame (win 5 and than restart) (this func beasd on our inputs)

*/

function getComputerChoice(number) {

    if (number <= 0.3) {
        computerChoice = "paper";
    }
    else if (number >= 0.7) {
        computerChoice = "rock";
    }
    else {
        computerChoice = "scissore";
    }

    return set(0, computerChoice);
}


function HumanChoice(HumanChoice) {

    if (HumanChoice == 1) {
        HumanChoice = "rock";
    }
    else if (HumanChoice == 2) {
        HumanChoice = "paper";
    }
    else if (HumanChoice == 3) {
        HumanChoice = "scissore";
    }

    return set(HumanChoice, 0);
}


function set(humanChoice, computerChoice) {

    if (humanChoice == 0)
        humanChoice = " ";
    if (computerChoice == 0)
        computerChoice = " ";

    return playGame(humanChoice, computerChoice);
}


function playGame(HumanChoice, ComputerChoice) {

    if (HumanChoice == "rock" && ComputerChoice == "paper") {
        console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Lose`);
    }
    else if (HumanChoice == "rock" && ComputerChoice == "scissore") {
        console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Win`);
    }
    else if (HumanChoice == "paper" && ComputerChoice == "rock") {
        console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Win`);
    }
    else if (HumanChoice == "paper" && ComputerChoice == "scissore") {
        console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : lose`);
    }
    else if (HumanChoice == "scissore" && ComputerChoice == "paper") {
        console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Win`);
    }
    else if (HumanChoice == "scissore" && ComputerChoice == "rock") {
        console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | You : Win`);
    }
    else if (HumanChoice == ComputerChoice) {
        console.log(`You :${HumanChoice} Conputer : ${ComputerChoice} | Tie`);
    }








/* 

after the user peck one of these Rosk, Paper, Ssissore

maybe we can represent 1, 2, 3 but it is not beatifull in git hub 


*/

