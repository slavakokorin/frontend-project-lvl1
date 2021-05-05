import { startBrainGameEngine, getRandomNumber, getArithmeticProgression } from '../index.js';

export const gameTask = 'What number is missing in the progression?';

let answer;

export const getQuestionInProgressionGame = () => {
  const progressionArray = getArithmeticProgression();
  const secretNum = getRandomNumber(0, progressionArray.length - 1);
  answer = progressionArray[secretNum];
  progressionArray[secretNum] = '..';
  let question = '';
  for (let i = 0; i < progressionArray.length; i += 1) {
    question += `${progressionArray[i]} `;
  }
  return question;
};

export const getCorrectAnswer = (question) => {
  if (question === -1) {
    answer = 0;
  }
  return answer.toString();
};

export const startGame = () => {
  startBrainGameEngine(getQuestionInProgressionGame, getCorrectAnswer, gameTask);
};
