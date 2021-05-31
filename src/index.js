import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (getRound, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
