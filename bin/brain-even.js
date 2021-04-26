#!/usr/bin/env node
import userGreeting, { user } from '../src/cli.js';
import { getRandomNumber, brainGame } from '../src/index.js';

userGreeting();

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(gameTask);

const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getQuestionInEvenGame = () => {
  const question = `${getRandomNumber(1, 20)}`;
  return question;
};

brainGame(getQuestionInEvenGame, getCorrectAnswer, user.name);
