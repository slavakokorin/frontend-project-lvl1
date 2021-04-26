#!/usr/bin/env node
import userGreeting, { user } from '../src/cli.js';
import { brainGame, getRandomNumber } from '../src/index.js';

userGreeting();

const gameTask = 'What number is missing in the progression?';
console.log(gameTask);

let answer;

const getQuestionInProgressionGame = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(2, 5);
  const progressionArray = [];
  const firstNum = getRandomNumber(1, 20);
  progressionArray.push(firstNum);
  let nextProgressNum = firstNum;
  for (let i = 1; i < progressionLength; i += 1) {
    nextProgressNum += progressionStep;
    progressionArray.push(nextProgressNum);
  }
  const secretNum = getRandomNumber(0, progressionArray.length - 1);
  answer = progressionArray[secretNum];
  progressionArray[secretNum] = '..';
  let question = '';
  for (let i = 0; i < progressionArray.length; i += 1) {
    question += `${progressionArray[i]} `;
  }
  return question;
};

const getCorrectAnswer = (question) => {
  return answer.toString();
};

brainGame(getQuestionInProgressionGame, getCorrectAnswer, user.name);
