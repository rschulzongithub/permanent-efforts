import React from 'react'
import styled from 'styled-components/macro'
import TimeIconActive from './assets/footer-icon-timer-orange.svg'
import TimeIcon from './assets/footer-icon-timer-grey.svg'

import ListIconActive from './assets/footer-icon-List-orange.svg'
import ListIcon from './assets/footer-icon-List-grey.svg'

import { Link } from 'react-router-dom'

export default function Footer({ isTimer, setIsTimer, isList, setIsList }) {
  const Navigation = styled.nav`
    display: grid;
    height: 48px;
    width: 100%;
    position: fixed;
    bottom: 0;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, auto);
    background: linear-gradient(45deg, #c4c1bd 0%, #f4f2ee 100%);
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
      <NavIcon to="/" onClick={() => regTimer()}>
        <IconImg
          src={isTimer ? TimeIconActive : TimeIcon}
          alt=""
          height="30"
          width="30"
        />
      </NavIcon>
      <NavIcon to="/constructor" onClick={() => regList()}>
        <IconImg
          src={isList ? ListIconActive : ListIcon}
          alt=""
          height="30"
          width="30"
        />
      </NavIcon>
      {/* {<NavIcon to="" onClick={regList}>
        <IconImg src={TimeIcon} alt="" height="30" width="30" />
      </NavIcon>
      <NavIcon to="">
        <IconImg src={TimeIcon} alt="" height="30" width="30" />
      </NavIcon>} */}
    </Navigation>
  )

  function regTimer(isTimer) {
    setIsTimer(!isTimer)
    setIsList(false)
  }

  function regList(isList) {
    setIsList(!isList)
    setIsTimer(false)
  }
}
