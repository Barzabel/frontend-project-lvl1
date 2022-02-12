//import cli from '../cli.js';
import getRandomInt from '../funk/randomForGame.js'
import readlineSync from 'readline-sync';

export default (name) => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".')
	for(let x = 0; x < 3; x += 1){
		const num = getRandomInt(100);
		console.log(`Question: ${num}`)
		const answer = readlineSync.question('Your answer: ')
		const rightAnswer = num % 2 === 0 ? 'yes': 'no';
		if (answer === rightAnswer){
			console.log('corect');
		} else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
			console.log(`Let's try again, ${name}!`);
			return false
		}
	}
	console.log(`Congratulations, ${name}!`);

	//const name = readlineSync.question('May I have your name? ');
};