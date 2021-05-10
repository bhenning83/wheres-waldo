import React, { useEffect } from 'react';
import PlayerRank from './PlayerRank'
let uniqid = require('uniqid')

function HighScores(props) {
  const {
      highScores, 
      isGameOver, 
      isFormSubmitted, 
      rank, 
      player,
      location,
      timer
    } = props;

  //hides the high scores unless at the end of the game
  useEffect(() => {
    const ele = document.getElementById('scores-container')
    if (isGameOver === true && isFormSubmitted === true) {
      ele.style.display = 'flex';
    } else {
      ele.style.display = 'none';
    }
  }, [isGameOver, isFormSubmitted])

  //converts ms to '00:00:00' 
  const convertTime = (ms) => {
    const secs = ms / 1000;
    let hr = Math.floor((secs / 3600));
    let min = Math.floor((secs / 60));
    let sec = Math.floor(secs % 60);
    let time = [hr, min, sec];
    let time1 = time.map(n => {
      return n = n < 10 ? '0' + n : n
    })
    return `${time1[0]}:${time1[1]}:${time1[2]}`
  }

  return(
    <div id='scores-container'>
      <div>High Scores</div>
      <div className='score-labels'>
        <div>Rank</div>
        <div>Name</div>
        <div>Location</div>
        <div>Time</div>
      </div>
      {highScores.map((score, idx) => {
        return (
          <div key={uniqid()} className='score-box'>
            <div className='score'>
              <div>{idx + 1}. </div>
              <div>{score.player} </div>
              <div>{score.location} </div>
              <div>{convertTime(score.ms)}</div>
            </div>
          </div>
        )
      })}
      <PlayerRank 
        rank={rank} 
        player={player} 
        location={location} 
        time={convertTime(timer.ms())}
      />
    </div>
  )
}

export default HighScores