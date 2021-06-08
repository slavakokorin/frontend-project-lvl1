import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const question = `${getRandomNumber(1, 20)}`;
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(getRound, gameTask);
