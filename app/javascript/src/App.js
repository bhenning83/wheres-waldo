import React, {useState} from 'react';
import Grid from './components/Grid';
import CharTracker from './components/CharTracker';
import waldoUrl from '../assets/images/Character.Waldo.jpg'
import wendaUrl from '../assets/images/Character.Wenda.jpg'
import odlawUrl from '../assets/images/Character.Odlaw.jpg'


const character = require('./components/character');

function App() {
  const [foundChars, setFoundChars] = useState([])

  const homeStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw'
  }

  const characters = {
    1: character('Waldo', waldoUrl),
    2: character('Odlaw', odlawUrl),
    3: character('Wenda', wendaUrl),
  }

  const alertCharFound = (str) => {
    setFoundChars(foundChars => [...foundChars, str])
  }

  const isFound = (charName) => {
    return foundChars.includes(charName) ?
    'inline-block' : 'none';
  } 

  return(
    <div style={homeStyle}>
      <Grid alertCharFound={alertCharFound} isFound={isFound}/>
      <CharTracker characters = {characters} foundChars={foundChars} isFound={isFound}/>
    </div>
  )
}

export default App