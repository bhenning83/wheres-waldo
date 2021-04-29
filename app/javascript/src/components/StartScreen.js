import React from 'react'

function StartScreen(props) {
  const {startGame, isGameStarted} = props;

  const hidden = () => {
    return isGameStarted === true ? 'none' : 'block';
  }

  const startScreenStyle = {
    height: '1200px',
    width: '1856px',
    display: hidden(),
    position: 'absolute',
    top: '0',
    left: '0'
  }

  const buttonStyle = {
    padding: '15px',
    borderRadius: '3px',
    border: '2px solid black',
    background: 'gray',
    position: 'fixed',
    top: '300px',
    left: '500px'
  }

  return(
    <div style={startScreenStyle}>
      <button style={buttonStyle}  onClick={startGame}>Click to Start</button>
    </div>
  )
}

export default StartScreen