import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (first, step, length) => {
  const progression = [];
  let nextProgressNum = first;
  for (let i = 0; i < length; i += 1) {
    nextProgressNum += step;
    progression.push(nextProgressNum);
  }
  return progression;
};

const getRound = () => {
  const length = getRandomNumber(5, 10);
  const step = getRandomNumber(2, 5);
  const first = getRandomNumber(1, 20);
  const progression = getProgression(first, step, length);
  const secretIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[secretIndex].toString();
  progression[secretIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => startGame(getRound, gameTask);
