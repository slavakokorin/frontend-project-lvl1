import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'What is the result of the expression?';

const solveExprssion = (num1, num2, operand) => {
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
  return result.toString();
};

const getRound = () => {
  const operands = ['+', '-', '*'];
  const indexOfOperand = getRandomNumber(0, operands.length - 1);
  const operandForGameQuestion = operands[indexOfOperand];
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const gameQuestion = `${firstNumber} ${operandForGameQuestion} ${secondNumber}`;
  const answer = solveExprssion(firstNumber, secondNumber, operandForGameQuestion);
  return [gameQuestion, answer];
};

export default () => startGame(getRound, gameTask);
