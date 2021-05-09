import getRandomNumber, { generateRound } from '../utilities.js';
import startBrainGameEngine from '../index.js';

export const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getQuestionInPrimeGame = () => {
  const question = `${getRandomNumber(1, 30)}`;
  return question;
};

export const getCorrectAnswer = (gameQuestion) => {
  const verifiableNum = Number(gameQuestion);
  let answer = 'yes';
  if (verifiableNum <= 1) {
    answer = 'no';
  }
  for (let i = 2; i <= verifiableNum / 2; i += 1) {
    if (verifiableNum % i === 0) {
      answer = 'no';
    }
  }
  return answer;
};

const gameRound = () => generateRound(getQuestionInPrimeGame, getCorrectAnswer);

export const startGame = () => startBrainGameEngine(gameRound, gameTask);
