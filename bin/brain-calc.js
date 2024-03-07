#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {welcome} from '../bin/brain-games.js';

const brainCalc = () => {
    const userName = welcome()

console.log('What is the result of the expression?');
for (let i = 0; i < 3; i += 1) {

let num1 = Math.floor(Math.random() * 101)
let num2 = Math.floor(Math.random() * 101)

let breakFlag = true
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

if (answer == answerUser) {
    console.log('Correct!')
} else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}`)
    
    breakFlag = false
    break
}
}
if (breakFlag) {
    console.log(`Congratulations, ${userName}!`)
} else {
    console.log(`Let's try again, ${userName}`)
}
}
brainCalc();