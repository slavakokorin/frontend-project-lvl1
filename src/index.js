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

export const brainGame = (getQuestionInEvenGame, getCorrectAnswer, name) => {
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
