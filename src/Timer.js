import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import StartButton from './StartButton'

export default function Main() {
  const [seconds, setSeconds] = useState(5)
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    seconds === 0
      ? clearTimeout()
      : counting && setTimeout(() => setSeconds(seconds - 1), 1000)
  }, [seconds, counting])

  function countDownTimeFormat(seconds) {
    const minutes = Math.floor(seconds / 60).toString()

    const restSeconds = (seconds - minutes * 60).toString()

    return `
    ${minutes < 10 ? `0${minutes}` : minutes}:${
      restSeconds < 10 ? `0${restSeconds}` : restSeconds
    }
    `
  }

  return (
    <TimerStyled>
      <TimerFormat>{countDownTimeFormat(seconds)}</TimerFormat>
      <StartButton onClick={() => setCounting(!counting)}>GO!</StartButton>
    </TimerStyled>
  )
}

const TimerStyled = styled.div`
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
