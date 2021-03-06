import React, {useState, useEffect} from 'react';

function TimerBox(props) {
  const {timer, isGameStarted, isGameOver} = props
  const [timerDisplay, setTimerDisplay] = useState('00:00:00')

  //converts current timer time to '00:00:00'
  const updateTimer = () => {
    let m = timer.time()['m'];
    let s = timer.time()['s'];
    let h = timer.time()['h'];
    m = m < 10 ? `0${m}` : `${m}`;
    s = s < 10 ? `0${s}` : `${s}`;
    h = h < 10 ? `0${h}` : `${h}`;
    setTimerDisplay(h + ':' + m + ':' + s)
  }

  useEffect(() => {
    let int
    //updates timer display every second
    if (isGameStarted === true &&
      isGameOver === false) {
      int = setInterval(updateTimer, 1000)
    }

    //Resets the clock display when a new level is selected
    if(isGameStarted === false) {
      setTimerDisplay('00:00:00')
    }

    return(() => clearInterval(int))
  })

  return(
    <div className='timer-box'>
      <div>{timerDisplay}</div>
    </div>
  )
}

export default TimerBox