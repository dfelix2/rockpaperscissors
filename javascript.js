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

function playerSelection(input) {
if (input === 'rock' && getComputerChoice(rndInt) === 'Paper') {
    return 'You lose! Paper beats Rock.';
} else if (input === 'paper' && getComputerChoice(rndInt) === 'Rock') {
    return 'You win! Paper beats Rock.';  
} else if (input === 'scissors' && getComputerChoice(rndInt) === 'Paper') {
    return 'You win! Scissors beats paper.';
} else if (input === 'scissors' && getComputerChoice(rndInt) === 'Rock') {
    return 'You lose! Rock beats scissors.';
} else if (input === 'rock' && getComputerChoice(rndInt) === 'Scissors') {
    return 'You win! Rock beats scissors.';
} else {
    return 'You tied!';
}
}