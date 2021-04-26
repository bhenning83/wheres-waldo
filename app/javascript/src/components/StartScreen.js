import React from 'react'

function StartScreen(props) {
  const {startGame, isGameStarted} = props;

  const hidden = () => {
    return isGameStarted === true ? 'none' : 'block';
  }

  const startScreenStyle = {
    // background: 'white',
    // opacity: '80%',
    // filter: 'blur(8px)',
    height: '1200px',
    width: '1920px',
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
    <div style={startScreenStyle} onClick={startGame}>
      <button style={buttonStyle}>Click to Start</button>
    </div>
  )
}

export default StartScreen