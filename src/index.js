export const maxNumOfGameRounds = 3;

export const getRandomNumber = () => {
  const minRandomNum = 1;
  const maxRandomNum = 20;
  const number = Math.random() * (maxRandomNum - minRandomNum) + minRandomNum;
  return Math.round(number);
};

export const getRandomOperand = () => {
  const operandArray = ['+', '-', '*'];
  const randomOperand = Math.floor(Math.random() * operandArray.length);
  return operandArray[randomOperand];
};

export const getQuestionInCalcGame = () => {
  const question = `${getRandomNumber()} ${getRandomOperand()} ${getRandomNumber()}`;
  return question;
};

export const getQuestionInEvenGame = () => {
  const question = `${getRandomNumber()}`;
  return question;
};
