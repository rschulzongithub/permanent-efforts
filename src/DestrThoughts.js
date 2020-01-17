import styled from 'styled-components/macro'
import React, { useState } from 'react'
import DownArrow from './assets/downarrow-thought-edit.svg'
import { Link } from 'react-router-dom'

export default function DestrThoughts({
  createThought,
  deleteThought,
  change,
  thoughts,
  setCreateThought,
  setDeleteThought,
  onAddThought,
  handleClick,
  onSaveClick
}) {
  const [newThought, setNewThought] = useState('')
  const [newConstructiveThought, setNewConstructiveThought] = useState('')

  return (
    <ThoughtFrame>
      {!createThought ? (
        <>
          <ThoughtsOverview>
            <ButtonWrapper>
              <BtnAddThought onClick={() => setCreateThought(!createThought)}>
                Add New Thought
              </BtnAddThought>
              <BtnAddThought onClick={() => setDeleteThought(!deleteThought)}>
                Delete Thoughts
              </BtnAddThought>
            </ButtonWrapper>

            {thoughts.map((thought, index) =>
              deleteThought ? (
                <ThoughtEl key={index}>
                  {thought.destrThought}
                  <DeleteBtn onClick={() => change(index)}>X</DeleteBtn>{' '}
                </ThoughtEl>
              ) : (
                <ThoughtEl key={index}>
                  <Link to="/">
                    <button>Timer</button>
                  </Link>
                  {!thought.collapsed && thought.destrThought}{' '}
                  {thought.collapsed && (
                    <>
                      <p>I am thinking:</p>
                      {thought.destrThought} <p>I want to think:</p>
                      {thoughts[index].konstrThought}
                      <NewThoughtInput
                        placeholder="Edit constructive thought"
                        onChange={event =>
                          setNewConstructiveThought(event.target.value)
                        }
                      ></NewThoughtInput>
                      <DeleteBtn onClick={() => change(index)}>X</DeleteBtn>{' '}
                      <SaveThoughtWrapper>
                        <SaveThoughtBtn
                          onClick={() =>
                            onSaveClick(index, newConstructiveThought)
                          }
                        >
                          SAVE!!!
                        </SaveThoughtBtn>
                        <SaveThoughtBtn onClick={() => handleClick(index)}>
                          CANCEL
                        </SaveThoughtBtn>
                      </SaveThoughtWrapper>
                    </>
                  )}
                  {thought.collapsed || (
                    <ArrowDownBtn
                      key={index}
                      onClick={() => handleClick(index)}
                    >
                      <ArrowDownImg
                        alt=""
                        src={DownArrow}
                        height="50px"
                        width="100px"
                      />
                    </ArrowDownBtn>
                  )}
                </ThoughtEl>
              )
            )}
          </ThoughtsOverview>
        </>
      ) : (
        <NewThoughtWrapper>
          <TitleNewThought>Formulate your negative thought!</TitleNewThought>
          <NewThoughtInput
            onChange={event => setNewThought(event.target.value)}
            value={newThought}
          ></NewThoughtInput>
          <BtnSafeNewThought onClick={event => onAddThought(newThought)}>
            Add thought
          </BtnSafeNewThought>
        </NewThoughtWrapper>
      )}
    </ThoughtFrame>
  )
}

const ArrowDownBtn = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
  right: 10px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(45deg, #c4c1bd 0%, #f4f2ee 100%);
`

const SaveThoughtWrapper = styled.section`
  display: flex;
`

const SaveThoughtBtn = styled.button`
  background: #f5a571;
  color: #edeae5;
  width: 50%;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  margin-top: 10px;
`

const ArrowDownImg = styled.img`
  height: 30px;
  width: 20px;
  right: 10px;
`

const NewThoughtWrapper = styled.div`
  display: grid;
  height: 100%;
  justify-items: center;
  align-content: center;
  gap: 20px;
`
const NewThoughtInput = styled.input`
  border: none;
  height: 50px;
  width: 300px;
  border-radius: 10px;
  font-family: Helvetica, sans-serif;
  font-weight: 200;
  font-size: 1em;
  color: #6d7588;
  padding: 20px;
  margin-top: 10px;
`
const BtnSafeNewThought = styled.button`
  background: #f5a571;
  height: 50px;
  width: 300px;
  border: none;
  border-radius: 10px;
  font-weight: 300;
  font-size: 16px;
  color: #edeae5;
`

const TitleNewThought = styled.h3`
  color: #f4f2ee;
  font-family: Helvetica, sans-serif;
  font-weight: 200;
`

//const CreDelSection = styled.section``
const ThoughtsOverview = styled.section`
  display: grid;
  justify-items: center;
  background: #6d7588;
  padding: 10px;
  gap: 10px;
`

const ThoughtFrame = styled.section`
  background: #6d7588;
  overflow: scroll;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
const BtnAddThought = styled.button`
  border: none;
  border-radius: 20px;
  height: 60px;
  width: 120px;
  font-size: 16px;
  background: #f5a571;
  color: #edeae5;
`
const ThoughtEl = styled.div`
  display: inline-grid;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: auto;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(45deg, #c4c1bd 0%, #f4f2ee 100%);
  padding: 30px;
  font-size: 16px;
  color: #6d7588;
  position: relative;
  font-family: Helvetica, sans-serif;
`
const DeleteBtn = styled.button`
  height: 20px;
  width: 30px;
  position: absolute;
  right: 0px;
  top: 0px;
  background: linear-gradient(45deg, #f5a571 0%, transparent 100%);
  border: none;
  border-bottom-left-radius: 10px;
  color: #6d7588;
  font-size: bold;
  border-bottom-color: transparent;
`
