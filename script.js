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

let scores = [];
let activePlayer;
let currentScore;
let playing;

const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  leftCurrentScore.textContent = 0;
  rightCurrentScore.textContent = 0;
  rightScore.textContent = 0;
  leftScore.textContent = 0;
  dice.classList.add('hidden');
  leftPlayerSection.classList.remove('player--winner');
  rightPlayerSection.classList.remove('player--winner');
  leftPlayerSection.classList.add('player--active');
  rightPlayerSection.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  // switch player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // reset current score
  currentScore = 0;
  // toggle active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle bg colour for active section
  leftPlayerSection.classList.toggle('player--active');
  rightPlayerSection.classList.toggle('player--active');
};

// roll dice
rollDiceBtn.addEventListener('click', () => {
  if (playing) {
    // generate random number
    const diceRoll = Math.trunc(Math.random() * 6 + 1);
    // show dice
    dice.classList.remove('hidden');
    // decide which player is rolling
    dice.src = `dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
      // add dice roll to current score
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// hold score and end game when score >= 100
holdBtn.addEventListener('click', () => {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// reset game on new game btn click
newGameBtn.addEventListener('click', () => {
  leftCurrentScore.textContent = 0;
  rightCurrentScore.textContent = 0;
  rightScore.textContent = 0;
  leftScore.textContent = 0;
  leftPlayerSection.classList.remove('player--winner');
  rightPlayerSection.classList.remove('player--winner');
  leftPlayerSection.classList.add('player--active');
  rightPlayerSection.classList.remove('player--active');
  init();
});
