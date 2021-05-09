import readlineSync from 'readline-sync';

export default (getGameRound, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);
  let roundsCount = 0;
  while (roundsCount < 3) {
    if (getGameRound() === false) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    roundsCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
