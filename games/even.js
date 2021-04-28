import { getRandomNumber } from '../src/index.js';

export const gameTask = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(task);
};

export const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const getQuestionInEvenGame = () => {
  const question = `${getRandomNumber(1, 20)}`;
  return question;
};
