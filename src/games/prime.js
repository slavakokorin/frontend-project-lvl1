import { startBrainGameEngine, getRandomNumber } from '../index.js';

export const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getQuestionInPrimeGame = () => {
  const question = `${getRandomNumber(1, 30)}`;
  return question;
};

export const getCorrectAnswer = (question) => {
  const questionToNumber = Number(question);
  let answer = 'yes';
  if (questionToNumber <= 1) {
    answer = 'no';
  }
  for (let i = 2; i <= questionToNumber / 2; i += 1) {
    if (questionToNumber % i === 0) {
      answer = 'no';
    }
  }
  return answer;
};

export const startGame = () => {
  startBrainGameEngine(getQuestionInPrimeGame, getCorrectAnswer, gameTask);
};
