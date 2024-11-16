import readlineSync from 'readline-sync';

export default () => {
  const username = readlineSync.question('Welcome to the Brain Games!');
  console.log(`Hello, ${username}!`);
};