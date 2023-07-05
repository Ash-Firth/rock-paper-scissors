'use strict';

console.log ('Hello World!')

function getComputerChoice () {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return 'rock';
    } else if (randomNumber <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playerSelection() {
    let playerSelection = prompt('Rock, Paper, or Scissors?');
    if (playerSelection === 'rock') {
        console.log('rock');
    } else if (playerSelection === 'paper') {
        console.log('paper');
    } else {
        console.log('scissors');
    }
}

function playRound(playerSelection, getComputerChoice) {

}

function battleCalculator(playerSelection, getComputerChoice) {
    if (playerSelection === getComputerChoice) {
        return 'It"s a tie!';
    } else if (
        (playerSelection === 'rock' && getComputerChoice === 'scissors') ||
        (playerSelection === 'scissors' && getComputerChoice === 'paper') ||
        (playerSelection === 'paper' && getComputerChoice === 'rock')
    ) {
        return 'Player 1 Wins!';
    } else {
        return 'Computer Wins!';
    }
}