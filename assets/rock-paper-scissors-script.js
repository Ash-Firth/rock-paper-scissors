'use strict';

console.log ('Hello World!')

// Prompt for player's choice
function getPlayerSelection() {
    const playerSelection = prompt('Rock, Paper, or Scissors?');
    if (playerSelection === 'rock') {
        return 'rock';
    } else if (playerSelection === 'paper') {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Computer picks rock, paper or scissors
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return 'rock'; 
    } if (randomNumber <= 0.66) {
        return 'paper';
    }
        return 'scissors'
}


// Code to calculate who wins.
function battleCalculator (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It"s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'Player 1 Wins!';
    } else {
        return 'Computer Wins!';
    }
}

// Function that runs the code above into a round of Rock, Paper, Scissors
function playRound() {
    const playerChoice = getPlayerSelection();
    const computerChoice = getComputerChoice();
    alert(playerChoice);
    alert(computerChoice);
    alert(battleCalculator(playerChoice, computerChoice));
}

playRound();