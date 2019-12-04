import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Grid from './Grid'
import Header from './Header'
import Footer from './Footer'
import GlobalStyle from './GlobalStyles'
import DestrThoughts from './DestrThoughts'
import Timer from './Timer'

function App() {
  const [createThought, setCreateThought] = useState(true)
  const [deleteThought, setDeleteThought] = useState(false)
  const [thoughtsInput, setThoughtsInput] = useState('')
  const [newThoughts, setNewThoughts] = useState([])

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
                createThought={createThought}
                deleteThought={deleteThought}
                thoughtsInput={thoughtsInput}
                newThoughts={newThoughts}
                saveThought={saveThought}
                setCreateThought={setCreateThought}
                setDeleteThought={setDeleteThought}
                addNewThought={addNewThought}
                setNewThoughts={setNewThoughts}
                setThoughtsInput={setThoughtsInput}
              />
            </Route>
          </Switch>
          <Footer />
        </Grid>
      </AppStyled>
    </Router>
  )

  function saveThought() {
    setCreateThought(!createThought)
    addNewThought()
  }

  function addNewThought() {
    setNewThoughts([...newThoughts, { text: thoughtsInput }])
  }
}

export default App

const AppStyled = styled.div`
  height: 100vh;
`
