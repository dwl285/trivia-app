import React from "react"
import './Questions.css'

export default function Questions(props) {
    return (
        <div className="questions">
            <button
                className="check-answers"
                onClick={props.handleClick}
            >
                Check Answers
            </button>
        </div>
    )
}