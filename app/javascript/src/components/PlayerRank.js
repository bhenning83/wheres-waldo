import React, { useEffect } from 'react'

function PlayerRank(props) {

    const {rank, player, location, time} = props;

    useEffect(() => {
      const ele = document.getElementById('rankings');
      if (rank > 5) {
        ele.style.display = 'flex'
      } else {
        ele.style.display = 'none'
      }
    })

  return(
    <div id='rankings'>
      <div>{rank}</div>
      <div>{player}</div>
      <div>{location}</div>
      <div>{time}</div>
    </div>
  )
}

export default PlayerRank