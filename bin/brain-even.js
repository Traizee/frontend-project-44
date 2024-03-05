import readlineSync from 'readline-sync';


const answerUser = (answer, randomNumber) => {

        if (randomNumber % 2 === 0) {
            
            if (answer === 'yes') {
                   return true  
            } else {
                   return false
            }

      } else {

            if (answer === 'no') {
                    return true           
            } else {
                    return false
        }
    }
 }
const brainEven = (userName) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let breakFlag = true

for (let i = 0; i < 3; i += 1) {

    const randomNumber = Math.floor(Math.random() * 101)
    console.log(`Question: ${randomNumber}`);
    
    const answer = readlineSync.question('Your answer: ');

    if (answerUser(answer, randomNumber)) {
        console.log('Correct!');
    } else if (answer === 'no') {
       
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`)
        
        breakFlag = false
        break  
    } else if (answer === 'yes'){
       
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`)
        
        breakFlag = false
        break 
    }
}
  if (breakFlag) {
console.log(`Congratulations, ${userName}`)
  } else {
    console.log(`Let\'s try again, ${userName}`)
  }
}
export default brainEven
