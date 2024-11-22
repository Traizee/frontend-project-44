import gameStart from '../index.js';
import randomNumber from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getQuestionAndAnswer = () => {
  const question = randomNumber();
  const correctAnswer = getEven(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameStart(description, getQuestionAndAnswer);
};
