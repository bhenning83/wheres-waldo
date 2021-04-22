import React from 'react';
import Grid from './components/Grid';
import CharTracker from './components/CharTracker';
import waldoUrl from '../assets/images/Character.Waldo.jpg'
import wendaUrl from '../assets/images/Character.Wenda.jpg'
import odlawUrl from '../assets/images/Character.Odlaw.jpg'


const character = require('./components/character');

function App() {

  const homeStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw'
  }

  const characters = {
    1: character('Waldo', waldoUrl),
    2: character('Odlaw', odlawUrl),
    3: character('Wilma', wendaUrl),
  }

  return(
    <div style={homeStyle}>
      <Grid />
      <CharTracker characters = {characters}/>
    </div>
  )
}

export default App