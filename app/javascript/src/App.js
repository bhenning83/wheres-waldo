import React, {useState, useEffect} from 'react';
import Grid from './components/Grid';
import CharTracker from './components/CharTracker';
import TimerBox from './components/TimerBox';
import waldoUrl from '../assets/images/Character.Waldo.jpg';
import wendaUrl from '../assets/images/Character.Wenda.jpg';
import odlawUrl from '../assets/images/Character.Odlaw.jpg';
import ScoreReport from './components/ScoreReport';
import LevelButtons from './components/LevelButtons'
import { Timer } from 'timer-node';



const character = require('./components/character');

function App() {
  const [foundChars, setFoundChars] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timer, setTimer] = useState(new Timer());
  const [level, setLevel] = useState(1);
  const [characters, setCharacters] = useState([])
  const [initGame, setInitGame] = useState(false)

  const startGame = () => {
    setIsGameStarted(x => !x);
    timer.start();
  }

  const initChars = () => {
    setCharacters({
        1: character('Waldo', waldoUrl),
        2: character('Odlaw', odlawUrl),
        3: character('Wenda', wendaUrl),
    })
  }
  


  const alertCharFound = (str) => {
    if (!foundChars.includes(str)) {
      setFoundChars(foundChars => [...foundChars, str])
      checkGameOver()
    }
  }

  const changeLevel = (int) => {
    setLevel(int);
    setIsGameOver(false);
    setIsGameStarted(false);
    setTimer(new Timer());
    setFoundChars([])
  }

  const isFound = (charName) => {
    return foundChars.includes(charName) 
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

  useEffect(() => {
    initChars()
    setInitGame(true)
  }, [initGame])

  return(
    <div className='home-container'>
      <div className='grid-box'>
        <Grid 
          alertCharFound={alertCharFound} 
          isFound={isFound} 
          isGameStarted={isGameStarted} 
          isGameOver={isGameOver}
          startGame={startGame}
          level={level}
        />
        <div className='side-bar'>
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
          <LevelButtons changeLevel={changeLevel}/>
        </div>
      </div>
      <ScoreReport
        timer={timer} 
        isGameOver={isGameOver} 
        level={level}
        changeLevel={changeLevel}
      />
    </div>
  )
}

export default App
