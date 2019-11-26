import React from 'react'
import styled from 'styled-components'

const StyledStartBtn = styled.button`
  background: #95a792;
  border-radius: 40px;
  width: 150px;
  height: 70px;
  color: #e3d9ca;
  font-size: 3em;
`

export default function StartButton({ onClick }) {
  return <StyledStartBtn onClick={onClick}>GO!</StyledStartBtn>
}
