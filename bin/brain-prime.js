#!/usr/bin/env node
import userGreeting, { user } from '../src/cli.js';
import { brainGame, getRandomNumber } from '../src/index.js';

userGreeting();

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(gameTask);

const getQuestionInPrimeGame = () => {
  const question = `${getRandomNumber(1, 30)}`;
  return question;
};

const getCorrectAnswer = (question) => {
  const questionToNumber = Number(question);
  let answer = 'yes';
  if (questionToNumber <= 1) {
    answer = 'no';
  }
  for (let i = 2; i <= questionToNumber / 2; i += 1) {
    if (questionToNumber % i === 0) {
      answer = 'no';
    }
  }
  return answer;
};

brainGame(getQuestionInPrimeGame, getCorrectAnswer, user.name);
