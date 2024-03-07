#!/usr/bin/env node
import getUserName from "../src/cli.js"

export const welcome = () => {
console.log('Welcome to the Brain Games!')

const userName = getUserName();
console.log(`Hello, ${userName}!`);
return userName
}

console.log(welcome())



