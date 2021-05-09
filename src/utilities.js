import readlineSync from 'readline-sync';

const roundsCount = 3;

export const generateRound = (getQuestionInGame, getCorrectAnswer) => {
  for (let i = 1; i <= roundsCount; i += 1) {
    const question = getQuestionInGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (getCorrectAnswer(question) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const getRandomNumber = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return Math.round(number);
};

export default getRandomNumber;
