

    function computerPlay(){
        let values = ['rock', 'paper', 'scissors'],
       valueToUse = values [Math.floor(Math.random()* values.length)];
       return valueToUse;
       };


let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

 function playRound() {

    const computerSelection = computerPlay();
    const playerSelection = window.prompt("Rock, paper, or scissors?").toLowerCase();
    console.log ('You chose ' + playerSelection + '. ' + 'Computer chose ' + computerSelection + '.');

        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            console.log('You lose! Paper beats Rock.');
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            console.log('You win! Paper beats Rock.');  
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            console.log('You lose! Scissors beats Paper.');
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            console.log('You win! Scissors beats Paper.');
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            console.log('You lose! Rock beats Scissors.');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            console.log('You win! Rock beats Scissors.');
        } else {
            tieScore++;
            console.log('You tied!');
        }
    }
   
    console.log(playRound());

    function game() {
        for (let i = 0; i < 4; i++) {
            console.log(playRound());
    } if (playerScore > computerScore) {
        console.log('Player won!');
    } else if (computerScore > playerScore) {
        console.log('Computer won!');
    } else {
        console.log('No winner');
    }
    }

const computerSelection = computerPlay();
const playerSelection = window.prompt("Rock, paper, or scissors?").toLowerCase();   
console.log(game());