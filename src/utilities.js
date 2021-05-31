const getRandomNumber = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return Math.round(number);
};

export default getRandomNumber;
