import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (num) => num % 2 === 0;

export const getQuestionInEvenGame = () => {
  const question = `${getRandomNumber(1, 20)}`;
  return question;
};

const getRound = () => {
  const gameQuestion = getQuestionInEvenGame();
  let answer = 'no';
  if (isNumberEven(gameQuestion)) {
    answer = 'yes';
  }
  return [gameQuestion, answer];
};

export default () => startGame(getRound, gameTask);
