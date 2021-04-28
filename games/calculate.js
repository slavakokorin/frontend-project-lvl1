import { getRandomNumber, getRandomOperand } from '../src/index.js';

export const gameTask = () => {
  const task = 'What is the result of the expression?';
  console.log(task);
};

export const getQuestionInCalcGame = () => {
  const question = `${getRandomNumber(1, 20)} ${getRandomOperand()} ${getRandomNumber(1, 20)}`;
  return question;
};

export const getCorrectAnswer = (expression) => {
  const array = expression.split(' ');
  let correctAnswer;
  if (array[1] === '+') {
    correctAnswer = Number(array[0]) + Number(array[2]);
  } else if (array[1] === '-') {
    correctAnswer = Number(array[0]) - Number(array[2]);
  } else {
    correctAnswer = Number(array[0]) * Number(array[2]);
  }
  return correctAnswer.toString();
};
