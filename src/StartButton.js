import React from 'react'
import styled from 'styled-components'

const StyledStartBtn = styled.button`
  background: #ed8d8d;
  border-radius: 40px;
  width: 100px;
  height: 50px;
`

export default function StartButton() {
  return <StyledStartBtn>GO!</StyledStartBtn>
}
