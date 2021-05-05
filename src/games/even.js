import { startBrainGameEngine, getRandomNumber } from '../index.js';

export const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const getQuestionInEvenGame = () => {
  const question = `${getRandomNumber(1, 20)}`;
  return question;
};

export const startGame = () => startBrainGameEngine(getQuestionInEvenGame, getCorrectAnswer, gameTask);
