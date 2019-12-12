import React from 'react'
import styled from 'styled-components/macro'
import TimeIcon from './assets/timer-icon.svg'
import ConstructorIcon from './assets/construction-icon.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  const Navigation = styled.nav`
    display: grid;
    height: 48px;
    width: 100%;
    position: fixed;
    bottom: 0;
    grid-auto-flow: column;
    grid-template-columns: repeat(4, auto);
    background: linear-gradient(45deg, #92a5a1 0%, #596c68 100%);
  `
  const NavIcon = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
  `
  const IconImg = styled.img`
    max-height: 100%;
    max-width: 100%;
  `
  return (
    <Navigation>
      <NavIcon to="/">
        <IconImg src={TimeIcon} alt="" height="30" width="30" />
      </NavIcon>
      <NavIcon to="/constructor">
        <IconImg src={ConstructorIcon} alt="" height="25" width="25" />
      </NavIcon>
      <NavIcon to="">
        <IconImg src={TimeIcon} alt="" height="30" width="30" />
      </NavIcon>
      <NavIcon to="">
        <IconImg src={TimeIcon} alt="" height="30" width="30" />
      </NavIcon>
    </Navigation>
  )
}
