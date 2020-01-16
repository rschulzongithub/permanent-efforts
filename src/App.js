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
  const [createThought, setCreateThought] = useState(false)
  const [deleteThought, setDeleteThought] = useState(false)
  const [btnX, setBtnX] = useState(false)
  const [thoughts, setThoughts] = useState(thoughtsData)
  const [isTimer, setIsTimer] = useState(false)
  const [isList, setIsList] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

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
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                handleClick={index => toggleCollapsed(index)}
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

  function toggleCollapsed(index) {
    const thought = thoughts[index]
    setThoughts([
      ...thoughts.slice(0, index),
      { ...thought, collapsed: !thought.collapsed },
      ...thoughts.slice(index + 1)
    ])
  }
}

export default App

const AppStyled = styled.div`
  height: 100vh;
`
