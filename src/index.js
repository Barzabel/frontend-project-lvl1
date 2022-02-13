import readlineSync from 'readline-sync';
import cli from './cli.js';

const run = (game) => {
  const name = cli();
  console.log(game.start);
  for (let i = 0; i < 3; i += 1) {
    const ansqes = game.round();
    console.log(`Question: ${ansqes.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === ansqes.answer) {
      console.log('corect');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ansqes.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
export default run;
