import React from 'react';
let uniqid = require('uniqid')

function HighScores(props) {
  const {highScores, isGameOver, isFormSubmitted} = props;

  const isScoresShown = () => {
    if (isGameOver === true && isFormSubmitted === true) {
      return 'flex'
    } else {
      return 'none'
    }
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
              <div>{score.player}</div>
              <div>{score.location}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HighScores