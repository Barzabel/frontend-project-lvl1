import getRandomInt from '../funk/randomForGame.js';

const getNod = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return getNod(num2, num1 % num2);
};

const gcd = {
  start: 'Find the greatest common divisor of given numbers.',
  round: () => {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    return {
      question: `${num1} ${num2}`,
      answer: getNod(num1, num2).toString(),
    };
  },
};

export default gcd;
