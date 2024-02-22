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

let myPick = prompt(`Choose rock, paper, or scissors`);
console.log(myPick);

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
function playRound (playerSelection, computerSelection) {
    console.log(`I chose ${playerSelection}`);
    console.log(`Your opponent chose ${computerSelection}`);

    if (playerSelection == `rock`) {
        if (computerSelection == `rock`) {
            return `You tie :/`;
        }else if (computerSelection == `paper`){
            return `You lose :(`;
        }else {
            return `You win!`;
        }
    }
    else if (playerSelection == `paper`) {
        if (computerSelection == `rock`) {
            return `You win!`;
        }else if (computerSelection == `paper`){
            return `You tie :/`;;
        }else {
            return `You lose :(`;
        }
    }
    else {
        if (computerSelection == `rock`) {
            return `You lose :(`;
        }else if (computerSelection == `paper`){
            return `You win!`;
        }else {
            return `You tie :/`;
        }
    }
}

//Output winner or loser of rock, paper, scissors game and prints it into the console

console.log(playRound(getMyChoice(), getComputerChoice()));


// Problem: Create a function that plays 5 games of rock, paper, scissors, and keeps track of the score
// So far I already created a function that returns the results of one singular game 
// Most likely have to implement a loop and some kind of counter variable to keep track of game
// Create a loop where i = 0, i < 5, i++ and this should loop 5 times simulating 5 games
// Create a variable or expression that keeps track of wins and losses (Maybe if else statement)
// Create an if else statement that displays the winner after 5 rounds

for (let i = 0; i < 5; i++) {
   let result = playRound(getMyChoice(), getComputerChoice())

    if (result == `You win!`) {

    }
}
