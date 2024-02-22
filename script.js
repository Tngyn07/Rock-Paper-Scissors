// Problem: Create a function that randomly returns rock, paper, or scissors whenever function is called
// Create a function called getComputerChoice with no parameters meaning it just outputs rock,paper,scissors when function is called
// Create a variable that generates RNG so we can randomize our selection (Maybe math.random?)
// Create an if else statement that uses the RNG variable to pick between rock paper scissors
// return output of rock or paper or scissors 
// console.log to check

function getComputerChoice () {

    let randNumber = Math.random() * 100;

    if (randNumber > 66) {
        return `rock`;
    }
    else if (randNumber > 33) {
        return `paper`;
    }
    else {
        return `scissors`;
    }
}

console.log (getComputerChoice());


//Problem: Create a function that takes two parameters and compares them for rock, paper, scissors
// 
function playGame (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == `rock`) {
        if (computerSelection == `rock`) {
            return `You tie`;
        }else if (computerSelection == `paper`){
            return `You lose`;
        }else {
            return `You win`;
        }
    }
    else if (playerSelection == `paper`) {
        if (computerSelection = `rock`) {
            return `You win`;
        }else if (computerSelection = `paper`){
            return `You tie`;
        }else {
            return `You lose`;
        }
    }
    else {
        if (computerSelection = `rock`) {
            return `You lose`;
        }else if (computerSelection = `paper`){
            return `You win`;
        }else {
            return `You tie`;
        }
    }
}

console.log(playGame(`ROCK`, getComputerChoice));