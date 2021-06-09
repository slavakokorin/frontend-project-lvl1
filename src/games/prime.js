import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const question = `${getRandomNumber(1, 30)}`;
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(getRound, gameTask);
