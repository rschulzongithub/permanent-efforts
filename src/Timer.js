import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import StartButton from './StartButton'
import PlayBtn from './icons8-spielen-100.png'
import PauseBtn from './icons8-pause-100.png'
import Ding from './dong-1.mp3'

export default function Timer() {
  const [seconds, setSeconds] = useState(125)
  const [counting, setCounting] = useState(false)
  const [initialTimer, setInitialTimer] = useState(false)
  const [userMin, setUserMin] = useState(null)
  const [userSec, setUserSec] = useState(null)

  useEffect(() => {
    seconds === 0
      ? clearTimeout()
      : counting && setTimeout(() => setSeconds(seconds - 1), 1000)
  }, [seconds, counting])

  function resetCountdown() {
    setInitialTimer(!initialTimer)
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
  function calcSeconds() {
    const min = Number(userMin)
    const sec = Number(userSec)
    setSeconds(min * 60 + sec)
  }

  return (
    <TimerScreenStyled>
      {seconds === 0 ? (
        <>
          <TimerFinishedScreen>FINISHED!</TimerFinishedScreen>
          <audio src={Ding}></audio>
          <TimerReset onClick={() => resetCountdown()}>OK</TimerReset>
        </>
      ) : (
        <>
          <TimerFormat>{countDownTimeFormat(seconds)}</TimerFormat>
          {!counting && (
            <DurationSetStyle>
              <TimerDuration
                onInput={event => setUserMin(event.target.value)}
                type="number"
                placeholder="Min"
              ></TimerDuration>
              <TimerDuration
                onInput={event => setUserSec(event.target.value)}
                type="number"
                placeholder="Sec"
              ></TimerDuration>
              <TimeSubmitBtn onClick={calcSeconds}>&rarr;</TimeSubmitBtn>
            </DurationSetStyle>
          )}
          <StartButton onClick={() => setCounting(!counting)}>
            {counting ? (
              <PlayImgs
                alt=""
                src={PauseBtn}
                height="100px"
                width="50px"
              ></PlayImgs>
            ) : (
              <PlayImgs
                alt=""
                src={PlayBtn}
                height="100px"
                width="50px"
              ></PlayImgs>
            )}
          </StartButton>
        </>
      )}
    </TimerScreenStyled>
  )
}

const TimerScreenStyled = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  height: 100vh;
  background: linear-gradient(45deg, #7c7575 0%, #403f48 100%);
`
const TimerFinishedScreen = styled.div`
  font-size: 3em;
  color: #e3d9ca;
`
const TimerReset = styled.button`
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
const TimerFormat = styled.p`
  font-size: 5em;
  color: #e3d9ca;
`
const DurationSetStyle = styled.div`
  display: flex;
  gap: 10px;
`
const TimerDuration = styled.input`
  height: 50px;
  width: 50px;
  font-size: 1.5em;
`
const TimeSubmitBtn = styled.button`
  height: 50px;
  width: 50px;
  font-size: 1.5em;
`

const PlayImgs = styled.img`
  height: 50px;
  width: 50px;
`
