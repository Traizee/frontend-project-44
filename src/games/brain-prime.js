import gameStart from '../index.js';
import randomNumber from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  if (num <= 1) { return false; }
  if (num === 2) { return true; }
  if (num % 2 === 0) { return false; }

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) { return false; }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = randomNumber();
  const correctAnswer = getPrime(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameStart(description, getQuestionAndAnswer);
};
