'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//score
let score = 20;
let highScore = 0;

//display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//display score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //again button
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });

  //game functionality
  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 correct number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = score;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess  is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too Low! 📉');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high! 📈' : 'Too Low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});
