import React from 'react'

import './App.css'
import Grid from './Grid'
import Header from './Header'
import Footer from './Footer'
import Timer from './Timer'

function App() {
  return (
    <div className="App">
      <Grid>
        <Header />
        <Timer></Timer>
        <Footer />
      </Grid>
    </div>
  )
}

export default App
