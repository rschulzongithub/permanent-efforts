import React from 'react'
import styled from 'styled-components/macro'

import Grid from './Grid'
import Header from './Header'
import Footer from './Footer'
import Timer from './Timer'
import GlobalStyle from './GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyled className="App">
        <Grid>
          <Header />
          <Timer></Timer>
          <Footer></Footer>
        </Grid>
      </AppStyled>
    </>
  )
}

export default App

const AppStyled = styled.div`
  height: 100vh;
`
