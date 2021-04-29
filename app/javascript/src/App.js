import React, {useState, useEffect} from 'react';
import Grid from './components/Grid';
import CharTracker from './components/CharTracker';
import TimerBox from './components/TimerBox';
import waldoUrl from '../assets/images/Character.Waldo.jpg';
import wendaUrl from '../assets/images/Character.Wenda.jpg';
import odlawUrl from '../assets/images/Character.Odlaw.jpg';
import ScoreForm from './components/ScoreForm';
import LevelButtons from './components/LevelButtons'
import { Timer } from 'timer-node';



const character = require('./components/character');

function App() {
  const [foundChars, setFoundChars] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [timer] = useState(new Timer());
  const [level, setLevel] = useState(1)

  const startGame = () => {
    setIsGameStarted(x => !x);
    timer.start();
  }

  const characters = {
    1: character('Waldo', waldoUrl),
    2: character('Odlaw', odlawUrl),
    3: character('Wenda', wendaUrl),
  }

  const alertCharFound = (str) => {
    if (!foundChars.includes(str)) {
      console.log(str)
      setFoundChars(foundChars => [...foundChars, str])
      checkGameOver()
    }
  }

  const changeLevel = (int) => {
    setLevel(int)
  }

  const isFound = (charName) => {
    return foundChars.includes(charName) ?
    'inline-block' : 'none';
  } 

  const checkGameOver = () => {
    if (foundChars.length === 3 
      && isGameOver === false) {
      timer.stop()
      setIsGameOver(true)
    }
  }

  useEffect(() => {
    checkGameOver()
  })

  const homeStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw',
    flexDirection: 'column'
  }

  const gridBoxStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw',
  }

  return(
    <div style={homeStyle}>
      <div style={gridBoxStyle}>
        <Grid 
          alertCharFound={alertCharFound} 
          isFound={isFound} 
          isGameStarted={isGameStarted} 
          startGame={startGame}
          level={level}
        />
        <CharTracker 
          characters = {characters} 
          isFound={isFound} 
          foundChars={foundChars} 
        />
      </div>
      <TimerBox 
        timer={timer} 
        isGameStarted={isGameStarted} 
        isGameOver={isGameOver}
      />
      <ScoreForm timer={timer} isGameOver={isGameOver}/>
      <LevelButtons changeLevel={changeLevel}/>
    </div>
  )
}

export default App

// to do: 
// -prevent multiple hits on same character
// -add in additional levels (high scores for each)