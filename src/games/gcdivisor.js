import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (first, second) => {
  let num1 = first;
  let num2 = second;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const divisor = num1 + num2;
  return divisor;
};

const getRound = () => {
  const first = getRandomNumber(1, 20);
  const second = getRandomNumber(1, 20);
  const question = `${first} ${second}`;
  const answer = getGreatestDivisor(first, second).toString();
  return [question, answer];
};

export default () => startGame(getRound, gameTask);
