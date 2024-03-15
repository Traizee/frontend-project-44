import gameStart from '../indexCalc.js'
import randomNumber from '../helper.js'

const description = 'What number is missing in the progression?'

const getQuestionAndAnswer = () => {

    const hiddenValue = Math.floor(Math.random() * 6)
    const randomNumProgression = randomNumber()

    const firstNum = randomNumber()
    let array = [firstNum, 0, 0, 0, 0, 0, 0,]

        for (let i = 1; i < array.length; i += 1) {
            const arrayItem = array[i - 1];

            const arrayItemProgression = arrayItem + randomNumProgression;
            array[i] = arrayItemProgression
    }

    let arr = array.slice();
    arr[hiddenValue] = '\'..\''

    const question = arr.join(' ')
	const correctAnswer = array[hiddenValue]
	return [question, correctAnswer]

}

export default () => {
    gameStart(description, getQuestionAndAnswer);
}