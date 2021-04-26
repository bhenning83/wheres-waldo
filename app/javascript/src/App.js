import React, {useState, useEffect} from 'react';
import Grid from './components/Grid';
import CharTracker from './components/CharTracker';
import TimerBox from './components/TimerBox';
import waldoUrl from '../assets/images/Character.Waldo.jpg';
import wendaUrl from '../assets/images/Character.Wenda.jpg';
import odlawUrl from '../assets/images/Character.Odlaw.jpg';
import { Timer } from 'timer-node';



const character = require('./components/character');

function App() {
  const [foundChars, setFoundChars] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [timer] = useState(new Timer());

  const startGame = () => {
    setIsGameStarted(x => !x);
    timer.start();
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

  useEffect(() => {
    if (foundChars.length === 3) {
      setIsGameOver(true)
      timer.stop()
    }
  })

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
      <TimerBox 
        timer={timer} 
        isGameStarted={isGameStarted} 
        isGameOver={isGameOver}
      />
    </div>
  )
}

export default App

// to do: 
// -add timer 
// -add high scores to db
// -add start button to start timer
// -add in additional levels (high scores for each)