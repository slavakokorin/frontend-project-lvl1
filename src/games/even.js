import getRandomNumber from '../utilities.js';
import startBrainGameEngine from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const getQuestionInEvenGame = () => {
  const question = `${getRandomNumber(1, 20)}`;
  return question;
};

const getRound = () => {
  const gameQuestion = getQuestionInEvenGame();
  const answer = getCorrectAnswer(gameQuestion);
  return [gameQuestion, answer];
};

export default () => startBrainGameEngine(getRound, gameTask);
