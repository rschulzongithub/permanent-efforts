import styled from 'styled-components/macro'
import React, { useState } from 'react'

export default function DestrThoughts({
  createThought,
  deleteThought,
  change,
  thoughts,
  setCreateThought,
  setDeleteThought,
  onAddThought
}) {
  const [newThought, setNewThought] = useState('')
  return (
    <ThoughtFrame>
      <>
        {createThought ? (
          <>
            <CreDelSection>
              <BtnAddThought onClick={() => setCreateThought(!createThought)}>
                +
              </BtnAddThought>
              <BtnAddThought onClick={() => setDeleteThought(!deleteThought)}>
                -
              </BtnAddThought>
            </CreDelSection>

            {thoughts.map((thought, index) =>
              deleteThought ? (
                <ThoughtEl>
                  {thought.destrThought}
                  <DeleteBtn onClick={() => change(index)}>X</DeleteBtn>
                </ThoughtEl>
              ) : (
                <ThoughtEl>{thought.destrThought}</ThoughtEl>
              )
            )}
          </>
        ) : (
          <>
            <h3>Formulate your negative thought!</h3>
            <input
              onChange={event => setNewThought(event.target.value)}
              value={newThought}
            ></input>
            <button onClick={event => onAddThought(newThought)}>
              Add thought
            </button>
          </>
        )}
      </>
    </ThoughtFrame>
  )
}

const CreDelSection = styled.section``

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
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px;
  font-size: 18px;
  color: #e3d9ca;
  position: relative;
`
const DeleteBtn = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  background: linear-gradient(45deg, #7c7575 0%, #403f48 100%);
  border: none;
  color: #e3d9ca;
  font-size: bold;

  border-bottom-color: transparent;
`
