import styled from 'styled-components/macro'
import React from 'react'
import NegThoughts from './Thoughts.json'

export default function DestrThoughts({
  createThought,
  deleteThought,
  thoughtsInput,
  newThoughts,
  saveThought,
  setCreateThought,
  setDeleteThought,
  setThoughtsInput
}) {
  return (
    <ThoughtFrame>
      <>
        {createThought ? (
          <>
            <section>
              <BtnAddThought onClick={() => setCreateThought(!createThought)}>
                +
              </BtnAddThought>
              <BtnAddThought onClick={() => setDeleteThought(!deleteThought)}>
                -
              </BtnAddThought>
            </section>

            {newThoughts.map(newThought =>
              deleteThought ? (
                <ThoughtEl>
                  {newThought.text}
                  <button>X</button>
                </ThoughtEl>
              ) : (
                <ThoughtEl>{newThought.text}</ThoughtEl>
              )
            )}

            {NegThoughts.map(({ destrThought }, index) =>
              deleteThought ? (
                <ThoughtEl key={index}>
                  {destrThought}
                  <button>X</button>
                </ThoughtEl>
              ) : (
                <ThoughtEl key={index}>{destrThought}</ThoughtEl>
              )
            )}
          </>
        ) : (
          <>
            <h3>Formulate your negative thought!</h3>
            <input
              onInput={event => setThoughtsInput(event.target.value)}
              value={thoughtsInput}
            ></input>
            <button onClick={() => saveThought()}>Add thought</button>
          </>
        )}
      </>
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
  border-radius: 20px;
  padding: 10px;
  font-size: 18px;
  color: #e3d9ca;
`
