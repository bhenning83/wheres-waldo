import React, {useState, useEffect} from 'react';

function TimerBox(props) {
  const {foundChars, timer, isGameStarted} = props
  const [timerDisplay, setTimerDisplay] = useState('00:00')

  const formatTimerText = () => {
    let m = timer.time()['m'];
    let s = timer.time()['s'];
    m = m < 10 ? `0${m}` : `${m}`;
    s = s < 10 ? `0${s}` : `${s}`;
    setTimerDisplay(m + ':' + s)
  }

  const updateTimer = () => {
    if (foundChars.length === 3) {
      setTimerDisplay('Game Over')
    } else {
      return formatTimerText()
    }
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

  return(
    <div>{timerDisplay}</div>
  )
}

export default TimerBox