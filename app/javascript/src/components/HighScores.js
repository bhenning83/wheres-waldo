import React from 'react';
import PlayerRank from './PlayerRank'
let uniqid = require('uniqid')

function HighScores(props) {
  const {
      highScores, 
      isGameOver, 
      isFormSubmitted, 
      rank, 
      player,
      timer
    } = props;

  const isScoresShown = () => {
    if (isGameOver === true && isFormSubmitted === true) {
      return 'flex'
    } else {
      return 'none'
    }
  }

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

  const scoresBoxStyle = {
    display: isScoresShown(),
    flexDirection: 'column',

  }

  const scoresStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  const scoreStyle = {
    display: 'flex'
  }

  return(
    <div const style={scoresBoxStyle}>
      <div>High Scores:</div>
      {highScores.map((score, idx) => {
        return (
          <div key={uniqid()} style={scoresStyle}>
            <div style={scoreStyle}>
              <div>{idx + 1}. </div>
              <div>{score.player} </div>
              <div>{score.location} </div>
              <div>{convertTime(score.time)}</div>
            </div>
          </div>
        )
      })}
      <PlayerRank rank={rank} player={player} time={convertTime(timer.ms())}/>
    </div>
  )
}

export default HighScores