import React from 'react'
import styled from 'styled-components/macro'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #92a5a1 0%, #596c68 100%);
`

export default function Header() {
  return <HeaderStyled></HeaderStyled>
}
