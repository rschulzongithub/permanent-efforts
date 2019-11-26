import React from 'react'
import styled from 'styled-components'

export default {
  title: 'StartButton'
}

const StyledStartBtn = styled.button`
  background: #ed8d8d;
  border-radius: 40px;
  width: 100px;
  height: 50px;
`

export const text = () => <StyledStartBtn>GO!</StyledStartBtn>
