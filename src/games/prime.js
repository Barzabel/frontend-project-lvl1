import getRandomInt from '../funk/randomForGame.js';

const isPrime = (val) => {
  const sqrtVal = Math.ceil(Math.sqrt(val));
  for (let x = 2; x <= sqrtVal; x += 1) {
    if (val % x === 0) {
      return false;
    }
  }
  return true;
};

const prime = {
  start: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  round: () => {
    const num = getRandomInt(100);
    return {
      question: num.toString(),
      answer: isPrime(num) ? 'yes' : 'no',
    };
  },
};

export default prime;
