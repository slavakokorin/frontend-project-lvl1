import getRandomNumber, { generateRound } from '../utilities.js';
import startBrainGameEngine from '../index.js';

const getRandomOperand = () => {
  const operands = ['+', '-', '*'];
  const indexOfOperand = getRandomNumber(0, 2);
  return operands[indexOfOperand];
};

export const gameTask = 'What is the result of the expression?';

const getQuestionInCalcGame = () => {
  const question = `${getRandomNumber(1, 20)} ${getRandomOperand()} ${getRandomNumber(1, 20)}`;
  return question;
};

const getCorrectAnswer = (expression) => {
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

const gameRound = () => generateRound(getQuestionInCalcGame, getCorrectAnswer);

export const startGame = () => startBrainGameEngine(gameRound, gameTask);
