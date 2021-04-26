import React, {useState} from 'react';
import Grid from './components/Grid';
import CharTracker from './components/CharTracker';
import Timer from './components/Timer';
import waldoUrl from '../assets/images/Character.Waldo.jpg'
import wendaUrl from '../assets/images/Character.Wenda.jpg'
import odlawUrl from '../assets/images/Character.Odlaw.jpg'


const character = require('./components/character');

function App() {
  const [foundChars, setFoundChars] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)

  const startGame = () => {
    setIsGameStarted(x => !x)
    console.log(isGameStarted)
  }

  const homeStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw',
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
      <Grid 
        alertCharFound={alertCharFound} 
        isFound={isFound} 
        isGameStarted={isGameStarted} 
        startGame={startGame}
      />
      <CharTracker 
        characters = {characters} 
        isFound={isFound} 
        foundChars={foundChars} 
      />
      <Timer foundChars={foundChars}/>
    </div>
  )
}

export default App

// to do: 
// -add timer 
// -add high scores to db
// -add start button to start timer
// -add in additional levels (high scores for each)