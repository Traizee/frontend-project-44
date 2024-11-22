import gameStart from '../index.js';
import randomNumber from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
};

const getQuestionAndAnswer = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => {
  gameStart(description, getQuestionAndAnswer);
};
