import gameStart from '../indexCalc.js'
import randomNumber from '../helper.js'

const description = 'What number is missing in the progression?'


const createArray = () => {
    const firstNum = randomNumber()
    let array = [firstNum, 0, 0, 0, 0, 0, 0,]
    const randomNumProgression = randomNumber() 
    
    for (let i = 1; i < array.length; i += 1) {
        const arrayItem = array[i - 1];

        const arrayItemProgression = arrayItem + randomNumProgression;
        array[i] = arrayItemProgression
}
    return array
}


const getQuestionAndAnswer = () => {

    const hiddenValue = Math.floor(Math.random() * 6)

    let arr = createArray();
    let arrNew = arr.slice();
    arrNew[hiddenValue] = '\'..\''

    const question = arrNew.join(' ')
	const correctAnswer = arr[hiddenValue]
	return [question, correctAnswer]

}

export default () => {
    gameStart(description, getQuestionAndAnswer);
}