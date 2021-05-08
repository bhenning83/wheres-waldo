import React, {useEffect, useState} from 'react';
import HighScores from './HighScores';
import NextLevelBtn from './NextLevelBtn'

function ScoreReport(props) {
  const {timer, isGameOver, level, changeLevel} = props;
  const [player, setPlayer] = useState('');
  const [loc, setLoc] = useState('');
  const [rank, setRank] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  //DOM Cache
  let playerName;
  let playerLoc;
  let form;
  let nameError;
  let locError;
  let hsBox;
  let btn;

  useEffect(() => {
    nameError = document.getElementsByTagName('span')[0];
    locError = document.getElementsByTagName('span')[1];
    playerName = document.getElementById('playerName');
    playerLoc = document.getElementById('playerLoc');
    hsBox = document.getElementById('high-scores-box');
    form = document.querySelector('form');
    btn =  document.querySelector('.score-btn:last-of-type');
  })

  const queryScoresDb = async() => {
    let url = new URL('http://localhost:3000/scores'),
    params = {time: timer.ms(), player: player, location: loc, level: level}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const showNameError = () => {
    nameError.textContent = 'Please enter your name';
    playerName.style.background = 'rgb(193, 144, 134)'
  }

  const showLocError = () => {
    locError.textContent = 'Please enter your location';
    playerLoc.style.background = 'rgb(193, 144, 134)'
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!playerName.validity.valid) {
      showNameError();
    } else if (!playerLoc.validity.valid) {
      showLocError();
    } else {
      const data = await queryScoresDb();
      setRank(data['rank']);
      setHighScores(data['highScores']);
      setIsFormSubmitted(true)
    }
  }

  const handlePlayerChange = (e) => {
    setPlayer(e.target.value);
    if (playerName.validity.valid) {
      nameError.textContent = '';
      playerName.style.backgroundColor = 'white'
    }
  }

  const handleLocChange = (e) => {
    setLoc(e.target.value);
    if (playerLoc.validity.valid) {
      locError.textContent = '';
      playerLoc.style.backgroundColor = 'white'
    }
  }

  useEffect(() => {
    if (isGameOver === false) {
      setIsFormSubmitted(false)
      hsBox.style.display = 'none';
    } 
    if (isGameOver === true) {
      hsBox.style.display = 'flex';
    }
  }, [isGameOver])

  useEffect(() => {
    if (isGameOver === true && isFormSubmitted === false) {
      form.style.display = 'flex';
      btn.style.display = 'inline-block';
      hsBox.style.marginLeft = '-217px';
    } else {
      form.style.display = 'none';
      btn.style.display = 'none';
      hsBox.style.marginLeft = '-353px';
    }
  }, [isGameOver, isFormSubmitted])

  return(
    <div id='high-scores-box'>
      <HighScores 
        highScores={highScores} 
        isGameOver={isGameOver} 
        isFormSubmitted={isFormSubmitted} 
        rank={rank} 
        player={player}
        timer={timer}
        location={loc}
      />
      <form action="" onSubmit={handleSubmit} id='form' noValidate>
        <div className='congrats'>You found them!</div>
        <div className='congrats'>Enter your info to see how you rank</div>
        <label htmlFor="playerName">Name:</label>
        <input type="text" id='playerName' onChange={handlePlayerChange} required />
        <span className='error'></span>
        <label htmlFor="playerLoc">Location:</label>
        <input type="text" id='playerLoc' onChange={handleLocChange} required />
        <span className='error'></span>
      </form>
      <div className='score-btn-box'>
        <NextLevelBtn level={level} changeLevel={changeLevel} className='score-btn' />
        <button type='submit' onClick={handleSubmit} className='score-btn'>Submit</button>
      </div>
    </div>
  )
}

export default ScoreReport