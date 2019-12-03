import styled from 'styled-components/macro'
import React from 'react'
import NegThoughts from './Thoughts.json'

export default function DestrThoughts() {
  return (
    <ThoughtFrame>
      <BtnAddThought>+</BtnAddThought>
      {NegThoughts.map(({ destrThought }, index) => (
        <ThoughtEl key={index}>{destrThought}</ThoughtEl>
      ))}
    </ThoughtFrame>
  )
}

const ThoughtFrame = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  height: auto;
  background: linear-gradient(45deg, #7c7575 0%, #403f48 100%);
  padding: 10px;
  gap: 10px;
  margin-top: 48px;
  margin-bottom: 48px;
`
const BtnAddThought = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-size: 20px;
`
const ThoughtEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  border: 1px solid grey;
  box-shadow: 1px 1px 5px grey;
  border-radius: 20%;
  padding: 10px;
  font-size: 18px;
`
