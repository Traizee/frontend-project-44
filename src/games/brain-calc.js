import gameStart from '../index.js';
import randomNumber from '../helper.js';

const description = 'What is the result of the expression?';

const chooseSign = () => {
  const signs = ['+', '-', '*'];
  const randomSign = Math.floor(Math.random() * 3);
  const sign = signs[randomSign];

  return sign;
};

const calculate = (num1, num2, sign) => {
  let answer;

  switch (sign) {
    case '+':
      answer = num1 + num2;
      break;

    case '-':
      answer = num1 - num2;
      break;

    case '*':
      answer = num1 * num2;
      break;

    default:
      answer = null;
  }

  return answer;
};

const getQuestionAndAnswer = () => {
  const sign = chooseSign();

  const num1 = randomNumber();
  const num2 = randomNumber();

  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = calculate(num1, num2, sign).toString();

  return [question, correctAnswer];
};

export default () => {
  gameStart(description, getQuestionAndAnswer);
};
