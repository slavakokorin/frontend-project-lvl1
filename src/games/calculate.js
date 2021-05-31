import getRandomNumber from '../utilities.js';
import startBrainGameEngine from '../index.js';

const gameTask = 'What is the result of the expression?';

const getCorrectAnswer = (gameQuestion) => {
  const expression = gameQuestion.split(' ');
  let correctAnswer = Number(expression[0]) * Number(expression[2]);
  if (expression[1] === '+') {
    correctAnswer = Number(expression[0]) + Number(expression[2]);
  } else if (expression[1] === '-') {
    correctAnswer = Number(expression[0]) - Number(expression[2]);
  }
  return correctAnswer.toString();
};

const getRound = () => {
  const operands = ['+', '-', '*'];
  const indexOfOperand = getRandomNumber(0, 2);
  const gameQuestion = `${getRandomNumber(1, 20)} ${operands[indexOfOperand]} ${getRandomNumber(1, 20)}`;
  const answer = getCorrectAnswer(gameQuestion);
  return [gameQuestion, answer];
};

export default () => startBrainGameEngine(getRound, gameTask);
