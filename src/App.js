import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import './App.css'
import StartButton from './StartButton'

function App() {
  const [seconds, setSeconds] = useState(120)
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    counting && setTimeout(() => setSeconds(seconds - 1), 1000)
  }, [seconds, counting])

  function countDownTimeFormat(seconds) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0')
    const restSeconds = (seconds - minutes * 60).toString().padEnd(2, '0')

    return `
    ${minutes}:${restSeconds}
    `
  }

  const StyledApp = styled.body`
    * {
      box-sizing: border-box;
    }
    background: #e3d9ca;
    height: 100vh;
    margin-top: 0;
  `

  return (
    <div className="App">
      <StyledApp>
        <p>{countDownTimeFormat(seconds)}</p>
        <StartButton onClick={() => setCounting(!counting)}></StartButton>
      </StyledApp>
    </div>
  )
}

export default App
