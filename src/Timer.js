import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import StartButton from './StartButton'

export default function Main() {
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

  return (
    <MainStyled>
      <TimerFormat>{countDownTimeFormat(seconds)}</TimerFormat>
      <StartButton onClick={() => setCounting(!counting)}></StartButton>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  background: linear-gradient(45deg, #7c7575 0%, #403f48 100%);
  height: 80vh;
`

const TimerFormat = styled.p`
  font-size: 5em;
  color: #e3d9ca;
`
