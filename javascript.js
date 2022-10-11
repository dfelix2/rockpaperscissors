const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const possibleChoices = document.querySelectorAll('button');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = 'User choice ' + userChoice;
    generateComputerChoice();
    playRound(userChoice, computerChoice);
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



