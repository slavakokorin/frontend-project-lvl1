import getRandomNumber from '../utilities.js';
import startBrainGameEngine from '../index.js';

export const gameTask = 'Find the greatest common divisor of given numbers.';

export const getQuestionInGcdGame = () => {
  const question = `${getRandomNumber(1, 20)} ${getRandomNumber(1, 20)}`;
  return question;
};

export const getCorrectAnswer = (gameQuestion) => {
  const expression = gameQuestion.split(' ');
  let divisor = 1;
  let minElement = Number(expression[1]);
  let maxElement = Number(expression[0]);
  if (Number(expression[0]) < Number(expression[1])) {
    minElement = Number(expression[0]);
    maxElement = Number(expression[1]);
  }
  for (let i = 1; i <= minElement; i += 1) {
    if (maxElement % i === 0 && minElement % i === 0) {
      divisor = i;
    }
  }
  return divisor.toString();
};

const getRound = () => {
  const gameQuestion = getQuestionInGcdGame();
  const answer = getCorrectAnswer(gameQuestion);
  return [gameQuestion, answer];
};

export const startGame = () => startBrainGameEngine(getRound, gameTask);
