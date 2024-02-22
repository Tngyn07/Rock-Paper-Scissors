// Problem: Create a function that randomly returns rock, paper, or scissors whenever function is called
// Create a function called getComputerChoice with no parameters meaning it just outputs rock,paper,scissors when function is called
// Create a variable that generates RNG so we can randomize our selection (Maybe math.random?)
// Create an if else statement that uses the RNG variable to pick between rock paper scissors
// return output of rock or paper or scissors 
// console.log to check

//function that makes the opposing player generate rock, paper, or scissors
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

// function that generates my players pick of rock, paper, or scissors
function getMyChoice () {

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

// console.log (getComputerChoice());



// function that compares my players selection to opposing players selection
function playGame (playerSelection, computerSelection) {
    console.log(`I chose ${playerSelection}`);
    console.log(`Your opponent chose ${computerSelection}`);

    if (playerSelection == `rock`) {
        if (computerSelection == `rock`) {
            console.log(`You tie`);
        }else if (computerSelection == `paper`){
            console.log(`You lose`);
        }else {
            console.log(`You win`);
        }
    }
    else if (playerSelection == `paper`) {
        if (computerSelection == `rock`) {
            console.log(`You win`);
        }else if (computerSelection == `paper`){
            console.log(`You tie`);
        }else {
            console.log(`You lose`);
        }
    }
    else {
        if (computerSelection == `rock`) {
            console.log(`You lose`);
        }else if (computerSelection == `paper`){
            console.log(`You win`);
        }else {
            console.log(`You tie`);
        }
    }
}

//Output winner or loser of rock, paper, scissors game

playGame(getMyChoice(), getComputerChoice())