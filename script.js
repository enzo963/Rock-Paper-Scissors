

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



function getComputerChoice(number) {

    if (number <= 0.3) {
        return console.log("paper");
    }
    else if (number >= 0.7) {
        return console.log("Rock");
    }
    else {
        return console.log("Scissore");
    }
}