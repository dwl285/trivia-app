import { useState } from 'react'
import './App.css'
import Start from './Start'
import Questions from './Questions'

export default function App() {

  const [started, setStarted] = useState(false)

  function handleStartClick() {
    setStarted(prevStarted => !prevStarted)
  }

  return (
    <main>
      {!started ?
        <Start handleClick={(handleStartClick)} /> :
        <Questions handleClick={(handleStartClick)} />
      }
    </main>
  )
}

