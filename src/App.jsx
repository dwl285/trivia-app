import { useState } from 'react'
import './App.css'
import Start from './Start'

export default function App() {

  const [started, setStarted] = useState(false)

  function handleStartClick() {
    console.log("started")
  }



  return (
    <main>
      <Start handleClick={handleStartClick} />
    </main>
  )
}

