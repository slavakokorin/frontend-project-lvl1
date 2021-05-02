import { getRandomNumber } from '../src/index.js';

export const gameTask = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  console.log(task);
};

export const getQuestionInGcdGame = () => {
  const question = `${getRandomNumber(1, 20)} ${getRandomNumber(1, 20)}`;
  return question;
};

export const getCorrectAnswer = (question) => {
  const array = question.split(' ');
  let divisor = 1;
  let minElement = Number(array[1]);
  let maxElement = Number(array[0]);
  if (Number(array[0]) < Number(array[1])) {
    minElement = Number(array[0]);
    maxElement = Number(array[1]);
  }
  for (let i = 1; i <= minElement; i += 1) {
    if (maxElement % i === 0 && minElement % i === 0) {
      divisor = i;
    }
  }
  return divisor.toString();
};