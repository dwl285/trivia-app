import React from "react"
import './Questions.css'
import Question from './Question'

export default function Questions(props) {

    return (
        <div className="questions">
            {props.questionsData
                .sort((a, b) => {
                    let fa = a.id.toLowerCase(), fb = b.id.toLowerCase();

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
                .map((question, index) =>
                    <Question
                        key={index}
                        question={question}
                        handleAnswerClick={props.handleAnswerClick} />)}
            <button
                className="check-answers"
                onClick={props.handleStartClick}
            >
                Check Answers
            </button>
        </div>
    )
}