import getRandomNumber, { generateRound } from '../utilities.js';
import startBrainGameEngine from '../index.js';

const getArithmeticProgression = () => {
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
  return progressionArray;
};

export const gameTask = 'What number is missing in the progression?';

let answer;

export const getQuestionInProgressionGame = () => {
  const progressionArray = getArithmeticProgression();
  const secretNum = getRandomNumber(0, progressionArray.length - 1);
  answer = progressionArray[secretNum];
  progressionArray[secretNum] = '..';
  let question = '';
  for (let i = 0; i < progressionArray.length; i += 1) {
    question += `${progressionArray[i]} `;
  }
  return question;
};

export const getCorrectAnswer = (question) => {
  if (question === -1) {
    answer = 0;
  }
  return answer.toString();
};

const gameRound = () => generateRound(getQuestionInProgressionGame, getCorrectAnswer);

export const startGame = () => startBrainGameEngine(gameRound, gameTask);
