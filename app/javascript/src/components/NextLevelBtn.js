import React, {useEffect} from 'react';

function NextLevelBtn(props) {
  const {level, changeLevel} = props

  const handleClick = () => {
    changeLevel(level + 1)
  }

  useEffect(() => {
    const btn = document.getElementById('next-level');
    if (level === 3) {
      btn.style.display = 'none'
    } else {
      btn.style.display = 'inline-block'
    }
  })

  return (
    <button onClick={handleClick} id='next-level' >Next Level</button>
  )
}

export default NextLevelBtn;