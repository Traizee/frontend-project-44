#!/usr/bin/env node
import getUserName from "../src/cli.js"

const welcome = () => {
console.log('Welcome to the Brain Games!')

const userName = getUserName();
console.log(`Hello, ${userName}!`);
return userName
}

export default welcome




