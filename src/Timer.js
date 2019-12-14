import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import StartButton from './StartButton'
import PlayBtn from './assets/icons8-spielen-100.png'
import PauseBtn from './assets/icons8-pause-100.png'
import soundPath from './assets/dong-1.mp3'

export default function Timer() {
  const [seconds, setSeconds] = useState(3)
  const [counting, setCounting] = useState(false)
  const [initialTimer, setInitialTimer] = useState(false)
  const [userMin, setUserMin] = useState(null)
  const [userSec, setUserSec] = useState(null)
  const [timeoutId, setTimeoutId] = useState(null)

  const audioEl = useRef()

  useEffect(() => {
    if (counting && seconds !== 0) {
      const id = setTimeout(() => setSeconds(seconds - 1), 1000)
      setTimeoutId(id)
    } else {
      clearTimeout(timeoutId)
    }

    return () => {
      clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, counting])

  useEffect(() => {
    seconds === 0 && audioEl.current.play()
  }, [seconds])

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
      <audio ref={audioEl} src={soundPath}></audio>
      {seconds === 0 ? (
        <>
          <TimerFinishedScreen>FINISHED!</TimerFinishedScreen>
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
                width="100px"
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
  height: 100%;
  background: #6d7588;
  margin-bottom: 48px;
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
  font-size: 1.5em;
  font-weight: 300;
  background: #f5a571;
  box-shadow: 1px 1px 30px #e3d9ca;
  margin-top: 80px;
`
const TimerFormat = styled.p`
  font-size: 100px;
  color: #e3d9ca;
  font-family: Helvetica, sans-serif;
  font-weight: 200;
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
