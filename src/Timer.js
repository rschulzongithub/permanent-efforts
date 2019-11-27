import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import StartButton from './StartButton'
import PlayBtn from './icons8-spielen-100.png'
import PauseBtn from './icons8-pause-100.png'

export default function Main() {
  const [seconds, setSeconds] = useState(10)
  const [counting, setCounting] = useState(false)
  const [returnToTimer, setReturnToTimer] = useState(false)

  useEffect(() => {
    seconds === 0
      ? stopCountdown(counting)
      : counting && setTimeout(() => setSeconds(seconds - 1), 1000)
  }, [seconds, counting])

  function stopCountdown(counting) {
    clearTimeout()
  }

  function resetCountdown() {
    setReturnToTimer(!returnToTimer)
    setSeconds(10)
    setCounting(!counting)
  }

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
      {seconds === 0 ? (
        <>
          <TimerFinishedLine>FINISHED!</TimerFinishedLine>
          <TimerFinishedOk onClick={() => resetCountdown()}>OK</TimerFinishedOk>
        </>
      ) : (
        <>
          <TimerFormat>{countDownTimeFormat(seconds)}</TimerFormat>
          <StartButton onClick={() => setCounting(!counting)}>
            {counting ? (
              <PlayImg
                alt=""
                src={PauseBtn}
                height="100px"
                width="50px"
              ></PlayImg>
            ) : (
              <PlayImg
                alt=""
                src={PlayBtn}
                height="100px"
                width="50px"
              ></PlayImg>
            )}
          </StartButton>
        </>
      )}
    </TimerStyled>
  )
}

const PlayImg = styled.img`
  height: 50px;
  width: 50px;
`

const TimerFinishedLine = styled.div`
  font-size: 3em;
  color: #e3d9ca;
`

const TimerFinishedOk = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border: 1px solid #e3d9ca;
  border-radius: 50%;
  color: #e3d9ca;
  font-size: 0.8em;
  background: linear-gradient(45deg, #7c7575 0%, #403f48 100%);
  box-shadow: 1px 1px 30px #e3d9ca;
  margin-top: 80px;
`

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
