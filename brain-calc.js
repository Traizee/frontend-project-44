import gameStart from '../index.js'
import randomNumber from '../helper.js'


const brainCalc = () => {
const userName = welcome()

console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {

let num1 = randomNumber
let num2 = randomNumber


let answer;

const randomSign = Math.floor(Math.random() * 3)

const signs = ['+', '-', '*'];
const sign = signs[randomSign]

console.log(`Question: ${num1} ${sign} ${num2}`);

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

const answerUser = readlineSync.question('Your answer: ');

if (answer === Number(answerUser)) {
    console.log('Correct!')
    
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}`)
    console.log(`Let's try again, ${userName}`)
    return
  }
}
console.log(`Congratulations, ${userName}`)
}
brainCalc();