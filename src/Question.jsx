import React from "react"
import './Question.css'

export default function Question(props) {

    const { question, correct_answer, incorrect_answers } = props.question
    // const allAnswers = incorrect_answers.concat([correct_answer])

    return (
        <div className="question-container">
            <p className="question">{question}</p>
            <div className="answers">
                {incorrect_answers.map(a => <button className="answer">{a}</button>)}
                <button className="answer">{correct_answer}</button>
            </div>
            <div className="divider"></div>
        </div>
    )
}


// {"results":[
//     {"category":"History",
//         "type":"boolean",
//         "difficulty":"easy",
//         "question":"The Spitfire originated from a racing plane.",
//         "correct_answer":"True",
//         "incorrect_answers":["False"]
//     },
//     {"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"Folic acid is the synthetic form of which vitamin?","correct_answer":"Vitamin B","incorrect_answers":["Vitamin A","Vitamin C","Vitamin D"]},
//     {"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"On average, Americans consume 100 pounds of what per second?","correct_answer":"Chocolate","incorrect_answers":["Potatoes","Donuts","Cocaine"]},
//     {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Who is the main protagonist in, the 1985 film, Back to the Future?","correct_answer":"Marty McFly","incorrect_answers":["Emmett &quot;Doc&quot; Brown","Biff Tannen","George McFly"]},
//     {"category":"Geography","type":"multiple","difficulty":"easy","question":"The Space Needle is located in which city?","correct_answer":"Seattle","incorrect_answers":["Los Angles","Toronto","Vancouver"]},
//     {"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"What was Daft Punk&#039;s first studio album?","correct_answer":"Homework","incorrect_answers":["Discovery","Random Access Memories","Human After All"]},
//     {"category":"Entertainment: Television","type":"boolean","difficulty":"hard","question":"The Klingon home planet is Qo&#039;noS.","correct_answer":"True","incorrect_answers":["False"]},
//     {"category":"Entertainment: Film","type":"multiple","difficulty":"hard","question":"In what year did Clint Eastwood star as Inspector Harry Callahan in the film &quot;Dirty Harry&quot;?","correct_answer":"1971","incorrect_answers":["1975","1983","1969"]},
//     {"category":"Entertainment: Cartoon & Animations","type":"multiple","difficulty":"hard","question":"In the 1968 Cartoon Show &quot;Wacky Races&quot; what was the name of cavemen duo who rode in The Boulder Mobile?","correct_answer":"The Slag Brothers","incorrect_answers":["The Slate Brothers","The Rock Brothers","The Stone Brothers"]},
//     {"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"Which one of the first four titles of the &quot;Grand Theft Auto&quot; franchise started the series of iconic image grid cover arts?","correct_answer":"Grand Theft Auto III","incorrect_answers":["Grand Theft Auto","Grand Theft Auto II","Grand Theft Auto Vice City"]}
// ]}
