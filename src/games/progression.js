import getRandomNumber from '../utilities.js';
import startGame from '../index.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (first, step, length) => {
  const progression = [];
  progression.push(first);
  let nextProgressNum = first;
  for (let i = 1; i < length; i += 1) {
    nextProgressNum += step;
    progression.push(nextProgressNum);
  }
  return progression;
};

export const getRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(2, 5);
  const first = getRandomNumber(1, 20);
  const progression = getProgression(first, progressionStep, progressionLength);
  const secretIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[secretIndex].toString();
  progression[secretIndex] = '..';
  // let question = '';
  // for (let i = 0; i < progression.length; i += 1) {
  //   question += `${progression[i]} `;
  // }
  const question = progression.join(' ');
  return [question, answer];
};

export default () => startGame(getRound, gameTask);
