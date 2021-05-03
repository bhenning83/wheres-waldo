import React from 'react'

function PlayerRank(props) {

    const {rank, player, time} = props;

    const isShown = () => {
      if (rank > 5) {
        return 'block'
      } else {
        return 'none'
      }
    }

    const rankStyle = {
      display: isShown(),
    }

  return(
    <div style={rankStyle}>
      <hr></hr>
      <div>{rank}</div>
      <div>{player}</div>
      <div>{time}</div>
    </div>
  )
}

export default PlayerRank