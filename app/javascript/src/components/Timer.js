import React from 'react';

function Timer(props) {
  const {foundChars} = props

  const timerText = () => {
    return foundChars.length === 3 ? 'Game Over' : "I'm timing"
  }

  return(
    <div>{timerText()}</div>
  )
}

export default Timer