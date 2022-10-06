import React from "react"
import './Questions.css'
import Question from './Question'

export default function Questions(props) {

    const [questionsData, setQuestionsData] = React.useState([])

    function createQuestionData(question) {
        const incorrectAnswerObjects = question.incorrect_answers.map((answer) => ({
            correct: false,
            answer: answer,
            selected: false
        }))

        const correctAnswerObject = {
            correct: true,
            answer: question.correct_answer,
            selected: false
        }

        const allAnswers = [...incorrectAnswerObjects, correctAnswerObject]

        return {
            question: question.question,
            answers: allAnswers
        }
    }

    React.useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsData(data.results.map(question => createQuestionData(question))))
    }, [])

    return (
        <div className="questions">
            {questionsData.map(question => <Question question={question} />)}
            <button
                className="check-answers"
                onClick={props.handleClick}
            >
                Check Answers
            </button>
        </div>
    )
}