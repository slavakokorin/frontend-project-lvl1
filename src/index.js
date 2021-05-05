import readlineSync from 'readline-sync';

const maxNumOfGameRounds = 3;

export const getRandomNumber = (minNum, maxNum) => {
  const number = Math.random() * (maxNum - minNum) + minNum;
  return Math.round(number);
};

export const getRandomOperand = () => {
  const operandArray = ['+', '-', '*'];
  const randomOperand = Math.floor(Math.random() * operandArray.length);
  return operandArray[randomOperand];
};

export const getArithmeticProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(2, 5);
  const progressionArray = [];
  const firstNum = getRandomNumber(1, 20);
  progressionArray.push(firstNum);
  let nextProgressNum = firstNum;
  for (let i = 1; i < progressionLength; i += 1) {
    nextProgressNum += progressionStep;
    progressionArray.push(nextProgressNum);
  }
  return progressionArray;
};

export const startBrainGameEngine = (getQuestionInEvenGame, getCorrectAnswer, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);
  for (let i = 1; i <= maxNumOfGameRounds; i += 1) {
    const question = getQuestionInEvenGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (getCorrectAnswer(question) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else if (getCorrectAnswer(question) === userAnswer && i === maxNumOfGameRounds) {
      console.log(`Congratulations, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }
};
