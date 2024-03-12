import gameStart from '../indexCalc.js'
import randomNumber from '../helper.js'

const description = 'Find the greatest common divisor of given numbers.'

const getQuestionAndAnswer = () => {  
    let num1 = randomNumber()
    let num2 = randomNumber()

const gcd = (a, b) => {
    if(a === 0) {
        return b
    } else {
        return gcd (b % a, a)
    }
}
	const question = `${num1} ${num2}`
	const correctAnswer = gcd(num1, num2)
	return [question, correctAnswer]
}

export default () => {
    gameStart(description, getQuestionAndAnswer)
}