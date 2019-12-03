import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Grid from './Grid'
import Header from './Header'
import Footer from './Footer'
import GlobalStyle from './GlobalStyles'
import DestrThoughts from './DestrThoughts'
import Timer from './Timer'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppStyled className="App">
        <Grid>
          <Header />
          <Link to="/">Timer</Link>
          <Timer />
          <Link to="/">Construction</Link>
          <DestrThoughts />
          <Footer />
        </Grid>
      </AppStyled>
    </Router>
  )
}

export default App

const AppStyled = styled.div`
  height: 100vh;
`
