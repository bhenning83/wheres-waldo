import React from 'react'

function LevelButtons(props) {
  const {changeLevel} = props;

  return(
    <div className='button-box'>
      <button onClick={() => changeLevel(1)} className='lvl-btn'>Level 1</button>
      <button onClick={() => changeLevel(2)} className='lvl-btn'>Level 2</button>
      <button onClick={() => changeLevel(3)} className='lvl-btn'>Level 3</button>
    </div>
  )
}

export default LevelButtons