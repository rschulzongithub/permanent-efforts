import React from 'react'
import styled from 'styled-components/macro'
import TimeIcon from './timer-icon.svg'
import ConstructorIcon from './construction-icon.svg'

export default function Footer() {
  const Navigation = styled.nav`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(4, auto);
    background: linear-gradient(45deg, #92a5a1 0%, #596c68 100%);
    border: 2px solid black;
    border-radius: 10px;
  `
  const NavIcon = styled.button`
    background: transparent;
  `
  const IconImg = styled.img`
    max-height: 100%;
    max-width: 100%;
  `
  return (
    <Navigation>
      <NavIcon>
        <IconImg src={TimeIcon} alt="" height="30" width="30" />
      </NavIcon>
      <NavIcon>
        <IconImg src={ConstructorIcon} alt="" height="25" width="25" />
      </NavIcon>
      <NavIcon>
        <IconImg src={TimeIcon} alt="" height="30" width="30" />
      </NavIcon>
      <NavIcon>
        <IconImg src={TimeIcon} alt="" height="30" width="30" />
      </NavIcon>
    </Navigation>
  )
}
