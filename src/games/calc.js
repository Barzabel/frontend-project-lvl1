import getRandomInt from '../funk/randomForGame.js';

const calc = {
  start: 'What is the result of the expression?',
  round: () => {
    const operand1 = getRandomInt(100);
    const operand2 = getRandomInt(100);
    const operator = getRandomInt(3);
    let ques;
    let answ;
    switch (operator) {
      case 0:
        ques = `${operand1} + ${operand2}`;
        answ = operand1 + operand2;
        break;
      case 1:
        ques = `${operand1} * ${operand2}`;
        answ = operand1 * operand2;
        break;
      case 2:
        ques = `${operand1} - ${operand2}`;
        answ = operand1 - operand2;
        break;
      default:
        console.log('"@"');
    }
    return {
      question: ques,
      answer: answ.toString(),
    };
  },
};

export default calc;
