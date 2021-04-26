import readlineSync from 'readline-sync';

export const user = { name: '' };

const userGreeting = () => {
  console.log('Welcome to the Brain Games!');
  user.name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user.name}!`);
};

export default userGreeting;
