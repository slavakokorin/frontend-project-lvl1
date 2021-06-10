const getRandomNumber = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return Math.round(number);
};

export const operands = ['+', '-', '*'];

export default getRandomNumber;
