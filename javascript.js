function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 3)
  console.log(rndInt)

function getComputerChoice(rndInt) {
    if (rndInt === 1) {
        return 'Rock';
    } else if (rndInt === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

let input = window.prompt("Rock, paper, or scissors?");

let str = input.toLowerCase();


function playerSelection(str) {
if (str === 'rock' && getComputerChoice(rndInt) === 'Paper') {
    return 'You lose! Paper beats Rock.';
} else if (str === 'paper' && getComputerChoice(rndInt) === 'Rock') {
    return 'You win! Paper beats Rock.';  
} else if (str === 'paper' && getComputerChoice(rndInt) === 'Scissors') {
    return 'You lose! Scissors beats Paper.';
} else if (str === 'scissors' && getComputerChoice(rndInt) === 'Paper') {
    return 'You win! Scissors beats Paper.';
} else if (str === 'scissors' && getComputerChoice(rndInt) === 'Rock') {
    return 'You lose! Rock beats Scissors.';
} else if (str === 'rock' && getComputerChoice(rndInt) === 'Scissors') {
    return 'You win! Rock beats Scissors.';
} else {
    return 'You tied!';
}
}