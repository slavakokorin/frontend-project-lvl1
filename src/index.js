export const maxNumOfGameRounds = 3;

export const getRandomNumber = () => {
  const minRandomNum = 1;
  const maxRandomNum = 20;
  const number = Math.random() * (maxRandomNum - minRandomNum) + minRandomNum;
  return Math.round(number);
};
