import readlineSync from 'readline-sync';

export let userName = '';

const userGreeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default userGreeting;
