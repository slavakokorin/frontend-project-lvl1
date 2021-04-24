import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const getRandomNumber = () => {
  const minRandomNum = 1;
  const maxRandomNum = 30;
  const number = Math.random() * (maxRandomNum - minRandomNum) + minRandomNum;
  return Math.round(number);
};

const isCorrectAnswer = (randomNum, userAnswer) => {
  return (randomNum % 2 === 0 && userAnswer === 'yes') || (randomNum % 2 !== 0 && userAnswer === 'no');
};

const correctAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const correctAnswersToWin = 3;

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= correctAnswersToWin; i += 1) {
    let randomNum = getRandomNumber();
    console.log(`Question: ${randomNum}`);
    let userAnswer = readlineSync.question('Your answer: ');
    if (!isCorrectAnswer(randomNum, userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(randomNum)}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (isCorrectAnswer(randomNum, userAnswer) && i === correctAnswersToWin) {
      console.log(`Congratulations, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }
};

export default even;
