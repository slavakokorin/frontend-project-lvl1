import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
const userGreeting = () => {
  const saveName = userName;
  const printName = () => saveName;
  return printName;
};
console.log(`Hello, ${userName}!`);

export const getUserName = userGreeting();

export default userGreeting;
