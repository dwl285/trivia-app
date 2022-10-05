import React from "react"
import './Questions.css'
import Question from './Question'

export default function Questions(props) {

    const [questionsData, setQuestionsData] = React.useState([])

    React.useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsData(data.results))
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