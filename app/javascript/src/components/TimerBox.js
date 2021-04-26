import React, {useState, useEffect} from 'react';

function TimerBox(props) {
  const {timer, isGameStarted, isGameOver} = props
  const [timerDisplay, setTimerDisplay] = useState('00:00')

  const updateTimer = () => {
    let m = timer.time()['m'];
    let s = timer.time()['s'];
    m = m < 10 ? `0${m}` : `${m}`;
    s = s < 10 ? `0${s}` : `${s}`;
    setTimerDisplay(m + ':' + s)
  }

  useEffect(() => {
    let int
    if (isGameStarted === true) {
      int = setInterval(updateTimer, 1000)
    }

    return(() => {
      clearInterval(int)
    })
  })

  const gameOverStyle = {
    display: isGameOver === true ? 'block' : 'none'
  }

  return(
    <div>
      <div style={gameOverStyle}>Game Over</div>
      <div>{timerDisplay}</div>
    </div>
  )
}

export default TimerBox