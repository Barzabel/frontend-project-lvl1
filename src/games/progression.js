import getRandomInt from '../funk/randomForGame.js';

const getProgression = () => {
  const lengthPorg = 5 + getRandomInt(6);
  const position = getRandomInt(lengthPorg);
  const num = getRandomInt(100);
  const step = getRandomInt(30) + 1;
  const res = [];
  for (let x = 0; x < lengthPorg; x += 1) {
    res.push((num + x * step).toString());
  }
  const answer = res[position];
  res[position] = '..';
  const answQest = {
    answ: answer,
    quest: res.join(' '),
  };
  return answQest;
};

const progression = {
  start: 'What number is missing in the progression?',
  round: () => {
    const x = getProgression();
    return {
      question: x.quest,
      answer: x.answ,
    };
  },
};

export default progression;
