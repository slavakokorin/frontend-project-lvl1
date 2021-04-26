#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userGreeting, { user } from '../src/cli.js';
import { maxNumOfGameRounds, getQuestionInGcdGame } from '../src/index.js';

userGreeting();

const gameTask = 'Find the greatest common divisor of given numbers.';
console.log(gameTask);

const getCorrectAnswer = (question) => {
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

for (let i = 1; i <= maxNumOfGameRounds; i += 1) {
  const question = getQuestionInGcdGame();
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
