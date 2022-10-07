import React from "react"
import './Question.css'

export default function Question(props) {

    const { question, answers } = props.question

    return (
        <div className="question-container">
            <p className="question">{question}</p>
            <div className="answers">
                {answers.map(answer =>
                    <button
                        key={answer.id}
                        className={`answer${answer.selected ? "--selected" : ""}`}
                        onClick={() => props.handleAnswerClick(question, answer)}>
                        {answer.answer}
                    </button>)}
            </div>
            <div className="divider"></div>
        </div>
    )
}