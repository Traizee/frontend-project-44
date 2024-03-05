#!/usr/bin/env node
import getUserName from "../src/cli.js"
import brainEven from "../bin/brain-even.js" 

console.log('Welcome to the Brain Games!')

const userName = getUserName();
console.log(`Hello, ${userName}!`);

brainEven(userName)






