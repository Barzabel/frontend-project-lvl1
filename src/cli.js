import readlineSync from 'eadline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // !
  console.log(`Hello, ${name}`);
};