import readlineSync from 'readline-sync';

export default (getGameRound, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);
  if (getGameRound()) {
    return console.log(`Congratulations, ${userName}!`);
  }
  return console.log(`Let's try again, ${userName}!`);
};
