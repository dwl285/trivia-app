import React from "react"
import './Question.css'

export default function Question(props) {

    const { question, answers } = props.question

    return (
        <div className="question-container">
            <p className="question">{question}</p>
            <div className="answers">
                {answers.map(answer => <button className="answer">{answer.answer}</button>)}
            </div>
            <div className="divider"></div>
        </div>
    )
}