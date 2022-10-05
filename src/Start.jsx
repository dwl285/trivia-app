import React from "react"
import './Start.css'

export default function Start(props) {
    return (
        <div className="start">
            <h1 className="start--title">Quzzical</h1>
            <p className="start--description">Get ready for a new trivia quiz!</p>
            <button
                className="start--button"
                onClick={props.handleClick}
            >
                Start quiz
            </button>
        </div>
    )
}