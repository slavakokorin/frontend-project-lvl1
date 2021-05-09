import getRandomNumber, { generateRound } from '../utilities.js';
import startBrainGameEngine from '../index.js';

export const gameTask = 'Find the greatest common divisor of given numbers.';

export const getQuestionInGcdGame = () => {
  const question = `${getRandomNumber(1, 20)} ${getRandomNumber(1, 20)}`;
  return question;
};

export const getCorrectAnswer = (question) => {
  const array = question.split(' ');
  let divisor = 1;
  let minElement = Number(array[1]);
  let maxElement = Number(array[0]);
  if (Number(array[0]) < Number(array[1])) {
    minElement = Number(array[0]);
    maxElement = Number(array[1]);
  }
  for (let i = 1; i <= minElement; i += 1) {
    if (maxElement % i === 0 && minElement % i === 0) {
      divisor = i;
    }
  }
  return divisor.toString();
};

const gameRound = () => generateRound(getQuestionInGcdGame, getCorrectAnswer);

export const startGame = () => startBrainGameEngine(gameRound, gameTask);
