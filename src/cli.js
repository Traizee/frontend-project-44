import readlineSync from 'readline-sync';

const welcome = () => {
   console.log('Welcome to the Brain Games!')
   
   const userName = getUserName();
   console.log(`Hello, ${userName}!`);
   return userName
   }

const getUserName = () => {

   const name = readlineSync.question('May I have your name? ');


return name
}

export default getUserName