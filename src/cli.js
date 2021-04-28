import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const namee = readlineSync.question('May I have your name? ');
const userGreeting = () => {
  const name = namee;
  const printName = () => name;
  return printName;
};
console.log(`Hello, ${namee}!`);

export const getUserName = userGreeting();

export default userGreeting;
