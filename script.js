'use strict';

const leftPlayerSection = document.querySelector('.player--0');
const rightPlayerSection = document.querySelector('.player--1');

const leftPlayer = document.querySelector('.player--0');
const rightPlayer = document.querySelector('.player--1');

const leftScore = document.getElementById('score--0');
const rightScore = document.getElementById('score--1');

const leftCurrentScore = document.getElementById('current--0');
const rightCurrentScore = document.getElementById('current--1');

const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// start with both scores as 0 and no dice visible
leftScore.textContent = 0;
rightScore.textContent = 0;
dice.classList.add('hidden');

// roll dice functionality
rollDiceBtn.addEventListener('click', () => {
  const diceRoll = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  if (diceRoll !== 1) {
    // add dice roll to current score
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    leftPlayerSection.classList.toggle('player--active');
    rightPlayerSection.classList.toggle('player--active');
  }
});
