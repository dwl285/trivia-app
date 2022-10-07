import React from 'react'
import './App.css'
import Start from './Start'
import Questions from './Questions'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

export default function App() {
  // state
  const [gameState, setgameState] = React.useState("pre")
  const [questionsData, setQuestionsData] = React.useState([])
  const [score, setScore] = React.useState(0)

  // effects
  function createQuestionData(question) {
    const incorrectAnswerObjects = question.incorrect_answers.map((answer) => ({
      correct: false,
      answer: decode(answer),
      selected: false,
      id: nanoid()
    }))

    const correctAnswerObject = {
      correct: true,
      answer: decode(question.correct_answer),
      selected: false,
      id: nanoid()
    }

    const allAnswers = [...incorrectAnswerObjects, correctAnswerObject].sort((a, b) => {
      let fa = a.id.toLowerCase(), fb = b.id.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })

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

  React.useEffect(() => setScore(
    questionsData.map(
      q => q.answers.map(
        a => a.correct && a.selected ? 1 : 0
      ).reduce((a, b) => a + b, 0)
    ).reduce((a, b) => a + b, 0)
  ), [questionsData])

  // click handlers
  function handleStartClick() {
    setgameState("during")
  }

  function handleAnswerClick(question, answer) {

    if (gameState === "post") {
      return
    }
    const questionObject = questionsData.find(q => q.question === question)
    const newAnswersList = questionObject.answers.map(a => a.answer === answer.answer ? { ...a, selected: true } : { ...a, selected: false })

    setQuestionsData(prevQuestionsData => (
      [...questionsData.filter(q => q.question != question), {
        ...questionObject,
        answers: newAnswersList
      }]
    ))
  }

  function handleCheckAnswersClick() {
    setgameState("post")
  }

  function handlePlayAgainClick() {
    setgameState("pre")
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => setQuestionsData(data.results.map(question => createQuestionData(question))))
  }

  return (
    <main>
      {gameState === "pre" && <Start handleClick={handleStartClick} />}
      {(gameState != "pre") && <Questions
        handleStartClick={(handleStartClick)}
        questionsData={questionsData}
        handleAnswerClick={handleAnswerClick}
        handleCheckAnswersClick={handleCheckAnswersClick}
        handlePlayAgainClick={handlePlayAgainClick}
        score={score}
        gameState={gameState}
      />}
    </main>
  )
}

