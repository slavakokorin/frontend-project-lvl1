import readlineSync from 'readline-sync';
import { user } from './cli.js';

const getRandomNumber = () => {
  const minRandomNum = 1;
  const maxRandomNum = 30;
  const number = Math.random() * (maxRandomNum - minRandomNum) + minRandomNum;
  return Math.round(number);
};

const isCorrectAnswer = (randomNum, userAnswer) => {
  const сorrectAnswer = (randomNum % 2 === 0 && userAnswer === 'yes') || (randomNum % 2 !== 0 && userAnswer === 'no');
  return сorrectAnswer;
};

const correctAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const correctAnswersToWin = 3;

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= correctAnswersToWin; i += 1) {
    const randomNum = getRandomNumber();
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!isCorrectAnswer(randomNum, userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(randomNum)}'.`);
      console.log(`Let's try again, ${user.name}!`);
      break;
    } else if (isCorrectAnswer(randomNum, userAnswer) && i === correctAnswersToWin) {
      console.log(`Congratulations, ${user.name}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }
};

export default even;
