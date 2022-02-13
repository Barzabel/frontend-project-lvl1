import getRandomInt from '../funk/randomForGame.js';

const even = {
  start: 'Answer "yes" if the number is even, otherwise answer "no".',
  round: () => {
    const num = getRandomInt(100);
    return {
      question: num,
      answer: num % 2 === 0 ? 'yes' : 'no',
    };
  },
};

export default even;
