import React, {useEffect, useState} from 'react';
import HighScores from './HighScores';

function ScoreReport(props) {
  const {timer, isGameOver, level} = props;
  const [player, setPlayer] = useState('');
  const [loc, setLoc] = useState('');
  const [rank, setRank] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const queryScoresDb = async() => {
    let url = new URL('http://localhost:3000/scores'),
    params = {time: timer.ms(), player: player, location: loc, level: level}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await queryScoresDb();
    setRank(data['rank']);
    setHighScores(data['highScores']);
    setIsFormSubmitted(true)
  }

  const handlePlayerChange = (e) => {
    setPlayer(e.target.value)
  }

  const handleLocChange = (e) => {
    setLoc(e.target.value)
  }

  useEffect(() => {
    const ele = document.getElementById('high-scores-box')
    if (isGameOver === false) {
      setIsFormSubmitted(false)
      ele.style.display = 'none';
    } 
    if (isGameOver === true) {
      ele.style.display = 'flex';
    }
  }, [isGameOver])

  useEffect(() => {
    const form = document.querySelector('form')
    if (isGameOver === true && isFormSubmitted === false) {
      form.style.display = 'flex';
    } else {
      form.style.display = 'none';
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
      <form action="" onSubmit={handleSubmit} id='form'>
        <div className='congrats'>You found them!</div>
        <div className='congrats'>Enter your info to see how you rank</div>
        <label htmlFor="playerName">Name:</label>
        <input type="text" id='playerName' onChange={handlePlayerChange} />
        <label htmlFor="playerLoc">Location:</label>
        <input type="text" id='playerLoc' onChange={handleLocChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ScoreReport