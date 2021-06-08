import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getQuestionInPrimeGame = () => {
  const question = `${getRandomNumber(1, 30)}`;
  return question;
};

const isNumberPrime = (num) => {
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

export const getCorrectAnswer = (gameQuestion) => {
  let answer = 'no';
  if (isNumberPrime(gameQuestion)) {
    answer = 'yes';
  }
  return answer;
};

const getRound = () => {
  const gameQuestion = getQuestionInPrimeGame();
  const answer = getCorrectAnswer(gameQuestion);
  return [gameQuestion, answer];
};

export default () => startGame(getRound, gameTask);
