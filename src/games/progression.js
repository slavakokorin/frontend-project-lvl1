import getRandomNumber from '../utilities.js';
import startBrainGameEngine from '../index.js';

export const gameTask = 'What number is missing in the progression?';

const getArithmeticProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(2, 5);
  const progression = [];
  const firstNum = getRandomNumber(1, 20);
  progression.push(firstNum);
  let nextProgressNum = firstNum;
  for (let i = 1; i < progressionLength; i += 1) {
    nextProgressNum += progressionStep;
    progression.push(nextProgressNum);
  }
  return progression;
};

// let answer;

export const getRoundInProgressionGame = () => {
  const progression = getArithmeticProgression();
  const secretNum = getRandomNumber(0, progression.length - 1);
  const answer = progression[secretNum].toString();
  progression[secretNum] = '..';
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question += `${progression[i]} `;
  }
  return [question, answer];
};

// const getRound = () => {
//   const gameQuestion = getQuestionInProgressionGame();
//   return gameQuestion;
// };

export const startGame = () => startBrainGameEngine(getRoundInProgressionGame, gameTask);
