import getRandomNumber, { generateRound } from '../utilities.js';
import startBrainGameEngine from '../index.js';

export const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const getQuestionInEvenGame = () => {
  const question = `${getRandomNumber(1, 20)}`;
  return question;
};

const gameRound = () => generateRound(getQuestionInEvenGame, getCorrectAnswer);

export const startGame = () => startBrainGameEngine(gameRound, gameTask);
