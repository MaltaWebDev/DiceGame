'use strict';

const leftPlayer = document.querySelector('.player--0');
const rightPlayer = document.querySelector('.player--1');

const leftScore = document.getElementById('score--0');
const rightScore = document.getElementById('score--1');

const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');

let activePlayerLeft = true;

leftScore.textContent = 0;
rightScore.textContent = 0;
dice.classList.add('hidden');

rollDiceBtn.addEventListener('click', () => {
  const diceRoll = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;
});
