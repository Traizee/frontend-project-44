import readlineSync from 'readline-sync'

export default (description, getQuestionAndAnswer) => {

    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)

    console.log(description)
    
    for (let i = 0; i < 3; i += 1) {

        const [question, correctAnswer] = getQuestionAndAnswer()

        console.log(`Question: ${question}`);
        
        const answerUser = readlineSync.question('Your answer: ');

        if (answerUser === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answerUser} 'is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${name}`);
            
            return
        }
    }
    console.log(`Congratulations, ${name}!`)
}
