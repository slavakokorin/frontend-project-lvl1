#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userGreeting, { user } from '../src/cli.js';
import { maxNumOfGameRounds, getQuestionInCalcGame } from '../src/index.js';

userGreeting();

const gameTask = 'What is the result of the expression?';
console.log(gameTask);

const getCorrectAnswer = (expression) => {
  const array = expression.split(' ');
  let correctAnswer;
  if (array[1] === '+') {
    correctAnswer = Number(array[0]) + Number(array[2]);
  } else if (array[1] === '-') {
    correctAnswer = Number(array[0]) - Number(array[2]);
  } else {
    correctAnswer = array[0] * Number(array[2]);
  }
  return correctAnswer.toString();
};

for (let i = 1; i <= maxNumOfGameRounds; i += 1) {
  const question = getQuestionInCalcGame();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (getCorrectAnswer(question) !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.`);
    console.log(`Let's try again, ${user.name}!`);
    break;
  } else if (getCorrectAnswer(question) === userAnswer && i === maxNumOfGameRounds) {
    console.log(`Congratulations, ${user.name}!`);
    break;
  } else {
    console.log('Correct!');
  }
}
