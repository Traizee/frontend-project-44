import gameStart from '../indexCalc.js'
import randomNumber from '../helper.js'

const description = 'What is the result of the expression?'

const getQuestionAndAnswer = () => { 
let num1 = randomNumber()
let num2 = randomNumber()

const randomSign = Math.floor(Math.random() * 3)
let answer
const signs = ['+', '-', '*'];
const sign = signs[randomSign]

switch (sign) {
    case '+':
       answer = num1 + num2; 
        break
    
    case '-':
       answer = num1 - num2;   
        break
    
    case '*':
       answer = num1 * num2;   
        break   
        
    default:
       answer = null 
} 
      
	const question = `${num1} ${sign} ${num2}`;
	const correctAnswer = answer
  
  return [question, correctAnswer]
}

export default () => {
  gameStart(description, getQuestionAndAnswer)
}