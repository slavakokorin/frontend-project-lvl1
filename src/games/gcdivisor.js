import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  let divisor = 1;
  const minElement = Math.min(num1, num2);
  const maxElement = Math.max(num1, num2);
  for (let i = 1; i <= minElement; i += 1) {
    if (maxElement % i === 0 && minElement % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

const getRound = () => {
  const first = getRandomNumber(1, 20);
  const second = getRandomNumber(1, 20);
  const question = `${first} ${second}`;
  const answer = getCorrectAnswer(first, second).toString();
  return [question, answer];
};

export default () => startGame(getRound, gameTask);
