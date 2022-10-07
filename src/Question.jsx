import React from "react"
import './Question.css'

export default function Question(props) {

    const { question, answers } = props.question

    return (
        <div className="question-container">
            <p className="question">{question}</p>
            <div className="answers">
                {answers.map((answer, index) =>
                    <button
                        key={index}
                        className="answer"
                        onClick={() => props.handleAnswerClick(question, answer)}>
                        {answer.answer}
                    </button>)}
            </div>
            <div className="divider"></div>
        </div>
    )
}