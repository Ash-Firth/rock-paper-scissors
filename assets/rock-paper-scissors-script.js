'use strict';

document.addEventListener('DOMContentLoaded', function() {
  console.log('Hello World!');

  // Select the result container element
  const resultContainer = document.getElementById('result-container');

  document.getElementById('rock-btn').addEventListener('click', function() {
      const playerChoice = getPlayerChoice('rock');
      const computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
  });

  document.getElementById('paper-btn').addEventListener('click', function() {
      const playerChoice = getPlayerChoice('paper');
      const computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
  });

  document.getElementById('scissors-btn').addEventListener('click', function() {
      const playerChoice = getPlayerChoice('scissors');
      const computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
  });

  function getComputerChoice() {
      const randomNumber = Math.random();
      if (randomNumber <= 0.33) {
          return 'rock';
      } else if (randomNumber <= 0.66) {
          return 'paper';
      } else {
          return 'scissors';
      }
  }

  function getPlayerChoice(playerSelection) {
      console.log('Player choice:', playerSelection);
      resultContainer.textContent = 'Player choice: ' + playerSelection;
      return playerSelection;
  }

  function playRound(playerChoice, computerChoice) {
      console.log('Computer choice:', computerChoice);

      // Implement your game logic
      if (playerChoice === computerChoice) {
          console.log('It\'s a tie!');
          resultContainer.textContent = 'It\'s a tie!';
      } else if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'paper' && computerChoice === 'rock') ||
          (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
          console.log('Player wins!');
          resultContainer.textContent = 'Player wins!';
      } else {
          console.log('Computer wins!');
          resultContainer.textContent = 'Computer wins!';
      }
  }

});
