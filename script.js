'use strict';

console.log(document.querySelector('.message').textContent);

let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
let score = Number(document.querySelector('.score').textContent);
console.log(score, typeof score);
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  console.log('function started');
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score > 1) {
    if (guess == secretNum) {
      document.querySelector(
        '.message'
      ).textContent = `🎉You guessed correct!!Lets's go!!`;
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('.number').style.width = '500px';
      document.querySelector('body').style.backgroundColor = '#60b347';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNum) {
      document.querySelector('.message').textContent = `📈 Too High!!`;
      score--;
      // console.log(score);
      document.querySelector('.score').textContent = `${score}`;
    } else if (guess < secretNum) {
      document.querySelector('.message').textContent = `📈 Too Low!!`;
      score--;
      // console.log(score);
      document.querySelector('.score').textContent = `${score}`;
    }
  } else {
    document.querySelector('.score').textContent = `Opps❗ Out of Tries! `;

    document.querySelector('.message').textContent = `🎯Try Again!`;
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
