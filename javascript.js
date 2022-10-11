const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const possibleChoices = document.querySelectorAll('button');
const displayPlayerWins = document.createElement('h1');
const displayComputerWins = document.createElement('h1');
const displayTies = document.createElement('h1');
const displayResult = document.createElement('h1')
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay, displayPlayerWins, displayComputerWins, displayTies, displayResult);

let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = 'User choice ' + userChoice;
    generateComputerChoice();
    playRound(userChoice, computerChoice);
    displayWins();
}))

const choices = ['rock', 'paper', 'scissors'];

function generateComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random()* choices.length)];
    computerChoice = randomChoice;
    computerChoiceDisplay.textContent = 'Computer choice: ' + computerChoice;
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(userChoice, computerChoice) {
    if(playerScore === 5 || computerScore === 5){
        return
    }
    if(
    (userChoice === 'rock' && computerChoice === 'paper') || 
    (userChoice === 'paper' && computerChoice === 'scissors') || 
    (userChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore++;
        resultDisplay.textContent = 'You lose! ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ' beats ' + userChoice + '.';
    } else if(
    (userChoice === 'paper' && computerChoice === 'rock') || 
    (userChoice === 'scissors' && computerChoice === 'paper') || 
    (userChoice === 'rock' && computerChoice === 'scissors')) {
        playerScore++;
        resultDisplay.textContent = 'You win! ' + userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + ' beats ' + computerChoice + '.';;  
    } else if(userChoice === computerChoice)  {
        tieScore++;
        resultDisplay.textContent = 'You tie!';
    } else {
        resultDisplay.textContent = 'Error';
    }
} 
/*
function playerWins() {
    displayPlayerWins.textContent = 'Your score: ' + playerScore;
}

function computerWins() {
    displayComputerWins.textContent = 'Computer score: ' + computerScore;
}

function ties() {
    displayTies.textContent = 'Ties: ' + tieScore;
}*/

function displayWins() {
    displayPlayerWins.textContent = 'Your score: ' + playerScore;
    displayComputerWins.textContent = 'Computer score: ' + computerScore;
    displayTies.textContent = 'Ties: ' + tieScore;

   if(playerScore === 5) {
    displayResult.textContent = 'Game Over! You Win!'
   } else if(computerScore === 5) {
    displayResult.textContent = 'Game Over! Computer Wins!'
   } else {

   }
}

