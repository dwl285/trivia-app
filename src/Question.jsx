import React from "react"
import './Question.css'

export default function Question(props) {

    const { question, answers } = props.question

    function getAnswerClassName(selected, correct, gameState) {
        let className


        if (gameState === "during") {
            className = `answer${selected ? "--selected" : ""}`
        } else {
            if (correct) {
                className = `answer--correct`
            }
            else {
                className = selected ? `answer--wrong` : `answer--not-selected`
            }
        }

        return className
    }

    return (
        <div className="question-container">
            <p className="question">{question}</p>
            <div className="answers">
                {answers.map(answer =>
                    <button
                        key={answer.id}
                        className={getAnswerClassName(answer.selected, answer.correct, props.gameState)}
                        onClick={() => props.handleAnswerClick(question, answer)}>
                        {answer.answer}
                    </button>)}
            </div>
            <div className="divider"></div>
        </div>
    )
}