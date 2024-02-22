// Problem: Create a function that randomly returns rock, paper, or scissors whenever function is called
// Create a function called getComputerChoice with no parameters meaning it just outputs rock,paper,scissors when function is called
// Create a variable that generates RNG so we can randomize our selection (Maybe math.random?)
// Create an if else statement that uses the RNG variable to pick between rock paper scissors
// return output of rock or paper or scissors 
// console.log to check

function getComputerChoice () {

    let randNumber = Math.random() * 100;

    if (randNumber > 66) {
        return `Rock`;
    }
    else if (randNumber > 33) {
        return `Paper`;
    }
    else {
        return `Scissors`;
    }
}

console.log (getComputerChoice());