#!/usr/bin/env node
import userGreeting, { user } from '../src/cli.js';
import { getRandomNumber, getRandomOperand, brainGame } from '../src/index.js';

userGreeting();

const gameTask = 'What is the result of the expression?';
console.log(gameTask);

const getQuestionInCalcGame = () => {
  const question = `${getRandomNumber(1, 20)} ${getRandomOperand()} ${getRandomNumber(1, 20)}`;
  return question;
};

const getCorrectAnswer = (expression) => {
  const array = expression.split(' ');
  let correctAnswer;
  if (array[1] === '+') {
    correctAnswer = Number(array[0]) + Number(array[2]);
  } else if (array[1] === '-') {
    correctAnswer = Number(array[0]) - Number(array[2]);
  } else {
    correctAnswer = array[0] * Number(array[2]);
  }
  return correctAnswer.toString();
};

brainGame(getQuestionInCalcGame, getCorrectAnswer, user.name);
