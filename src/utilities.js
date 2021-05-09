import readlineSync from 'readline-sync';

export const generateRound = (getQuestionInGame, getCorrectAnswer) => {
  const question = getQuestionInGame();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (getCorrectAnswer(question) !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const getRandomNumber = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return Math.round(number);
};

export default getRandomNumber;
