import React, { useEffect } from 'react'

function PlayerRank(props) {

    const {rank, player, time} = props;

    useEffect(() => {
      const ele = document.getElementById('rankings');
      if (rank > 5) {
        ele.style.display = 'block'
      } else {
        ele.style.display = 'none'
      }
    })

  return(
    <div id='rankings'>
      <hr></hr>
      <div>{rank}</div>
      <div>{player}</div>
      <div>{time}</div>
    </div>
  )
}

export default PlayerRank