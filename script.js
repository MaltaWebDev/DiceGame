'use strict';

const leftPlayer = document.querySelector('.player--0');
const rightPlayer = document.querySelector('.player--1');

const leftScore = document.getElementById('score--0');
const rightScore = document.getElementById('score--1');

const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
let activePlayerLeft = true;
let secretNumber = Math.trunc(Math.random() * 6 + 1);

leftScore.textContent = 0;
rightScore.textContent = 0;
