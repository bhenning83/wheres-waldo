import React, {useEffect} from 'react'

function StartScreen(props) {
  const {startGame, isGameStarted} = props;

  const hidden = () => {
    return isGameStarted === true ? 'none' : 'block';
  }

  useEffect(() => {
    const ele = document.getElementById('start-screen');
    if (isGameStarted === true) {
      ele.style.display = 'none';
    } else {
      ele.style.display = 'block';
    }
  }, [isGameStarted])

  return(
    <div id='start-screen'>
      <button className='start-btn' onClick={startGame}>Click to Start</button>
    </div>
  )
}

export default StartScreen