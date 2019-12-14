import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Grid from './Grid'
import Header from './Header'
import Footer from './Footer'
import GlobalStyle from './GlobalStyles'
import DestrThoughts from './DestrThoughts'
import Timer from './Timer'
import thoughtsData from './thoughts.json'

function App() {
  const [createThought, setCreateThought] = useState(true)
  const [deleteThought, setDeleteThought] = useState(false)
  const [btnX, setBtnX] = useState(false)
  const [thoughts, setThoughts] = useState(thoughtsData)
  const [isTimer, setIsTimer] = useState(false)
  const [isList, setIsList] = useState(false)

  return (
    <Router>
      <GlobalStyle />
      <AppStyled className="App">
        <Grid>
          <Header />
          <Switch>
            <Route exact path="/">
              <Timer />
            </Route>
            <Route path="/constructor">
              <DestrThoughts
                setCreateThought={setCreateThought}
                setDeleteThought={setDeleteThought}
                onAddThought={text => {
                  setThoughts([{ destrThought: text }, ...thoughts])
                  setCreateThought(!createThought)
                }}
                createThought={createThought}
                deleteThought={deleteThought}
                thoughts={thoughts}
                setBtnX={setBtnX}
                change={index => change(index)}
                btnX={btnX}
              />
            </Route>
          </Switch>
          <Footer
            isTimer={isTimer}
            setIsTimer={setIsTimer}
            isList={isList}
            setIsList={setIsList}
          />
        </Grid>
      </AppStyled>
    </Router>
  )

  function change(indexToDelete) {
    setThoughts(thoughts.filter((thought, index) => index !== indexToDelete))
  }
}

export default App

const AppStyled = styled.div`
  height: 100vh;
`
