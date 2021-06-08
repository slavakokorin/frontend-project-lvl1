import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'What is the result of the expression?';

const calculate = (num1, num2, operand) => {
  let result;
  switch (operand) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operand: '${operand}'!`);
  }
  return result;
};

const getRound = () => {
  const operands = ['+', '-', '*'];
  const operandIndex = getRandomNumber(0, operands.length - 1);
  const operand = operands[operandIndex];
  const first = getRandomNumber(1, 20);
  const second = getRandomNumber(1, 20);
  const question = `${first} ${operand} ${second}`;
  const answer = calculate(first, second, operand).toString();
  return [question, answer];
};

export default () => startGame(getRound, gameTask);
