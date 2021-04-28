import { getRandomNumber } from '../src/index.js';

export const gameTask = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(task);
};

export const getQuestionInPrimeGame = () => {
  const question = `${getRandomNumber(1, 30)}`;
  return question;
};

export const getCorrectAnswer = (question) => {
  const questionToNumber = Number(question);
  let answer = 'yes';
  if (questionToNumber <= 1) {
    answer = 'no';
  }
  for (let i = 2; i <= questionToNumber / 2; i += 1) {
    if (questionToNumber % i === 0) {
      answer = 'no';
    }
  }
  return answer;
};
