import React from 'react'

function LevelButtons(props) {
  const {changeLevel} = props;

  return(
    <div>
      <button onClick={() => changeLevel(1)}>Level 1</button>
      <button onClick={() => changeLevel(2)}>Level 2</button>
      <button onClick={() => changeLevel(3)}>Level 3</button>
    </div>
  )
}

export default LevelButtons