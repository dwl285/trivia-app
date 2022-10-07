import React from 'react'
import './App.css'
import Start from './Start'
import Questions from './Questions'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

export default function App() {
  // state
  const [started, setStarted] = React.useState(false)
  const [questionsData, setQuestionsData] = React.useState([])

  // effects
  function createQuestionData(question) {
    const incorrectAnswerObjects = question.incorrect_answers.map((answer) => ({
      correct: false,
      answer: decode(answer),
      selected: false
    }))

    const correctAnswerObject = {
      correct: true,
      answer: decode(question.correct_answer),
      selected: false
    }

    const allAnswers = [...incorrectAnswerObjects, correctAnswerObject]

    return {
      question: decode(question.question),
      answers: allAnswers,
      id: nanoid()
    }
  }

  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => setQuestionsData(data.results.map(question => createQuestionData(question))))
  }, [])

  // click handlers
  function handleStartClick() {
    setStarted(prevStarted => !prevStarted)
  }

  function handleAnswerClick(question, answer) {
    const questionObject = questionsData.find(q => q.question === question)
    const newAnswersList = questionObject.answers.map(a => a.answer === answer.answer ? { ...a, selected: !a.selected } : a)

    setQuestionsData(prevQuestionsData => (
      [...questionsData.filter(q => q.question != question), {
        ...questionObject,
        answers: newAnswersList
      }]
    ))

    console.log(questionsData)

  }


  return (
    <main>
      {!started ?
        <Start handleClick={(handleStartClick)} /> :
        <Questions handleStartClick={(handleStartClick)} questionsData={questionsData} handleAnswerClick={handleAnswerClick} />
      }
    </main>
  )
}

