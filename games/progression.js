import { getRandomNumber, getArithmeticProgression } from '../src/index.js';

export const gameTask = () => {
  const task = 'What number is missing in the progression?';
  console.log(task);
};

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
