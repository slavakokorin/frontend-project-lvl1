#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userGreeting, { user } from '../src/cli.js';
import { maxNumOfGameRounds, getQuestionInEvenGame } from '../src/index.js';

userGreeting();

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(gameTask);

const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const isCorrectUserAnswer = (randomNum, userAnswer) => {
  const сorrectAnswer = getCorrectAnswer(randomNum) === userAnswer;
  return сorrectAnswer;
};

for (let i = 1; i <= maxNumOfGameRounds; i += 1) {
  const question = getQuestionInEvenGame();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (!isCorrectUserAnswer(question, userAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.`);
    console.log(`Let's try again, ${user.name}!`);
    break;
  } else if (isCorrectUserAnswer(question, userAnswer) && i === maxNumOfGameRounds) {
    console.log(`Congratulations, ${user.name}!`);
    break;
  } else {
    console.log('Correct!');
  }
}
