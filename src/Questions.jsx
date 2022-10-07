import React from "react"
import './Questions.css'
import Question from './Question'

export default function Questions(props) {

    let footer
    if (props.gameState === "during") {
        footer = <button
            className="check-answers"
            onClick={props.handleCheckAnswersClick}
        >
            Check Answers
        </button>
    } else if (props.gameState === "post") {
        footer = <>
            <h3 className="score">You scored {props.score}/{5} correct answers</h3>
            <button
                className="play-again"
                onClick={props.handlePlayAgainClick}
            >
                Play Again
            </button>
        </>
    }



    return (

        < div className="questions" >
            {
                props.questionsData
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
                    .map(question =>
                        <Question
                            key={question.id}
                            question={question}
                            handleAnswerClick={props.handleAnswerClick}
                            gameState={props.gameState} />)
            }
            <div className="footer">{footer}</div>


        </div >
    )
}