import React from 'react';
let uniqid = require('uniqid')

function HighScores(props) {
  const {highScores} = props


  return(
    <div>
    <div>High Scores:</div>
    {highScores.map((score, idx) => {
      return (
        <div key={uniqid()}>
          <div>{idx + 1}. </div>
          <div>{score.player}</div>
          <div>{score.location}</div>
        </div>
      )
    })}
  </div>
  )
}

export default HighScores