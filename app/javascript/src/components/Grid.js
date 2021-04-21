import React from 'react';
import villageUrl from '../assets/images/village.jpeg';
import pirateUrl from '../assets/images/pirate.jpeg';
import battleUrl from '../assets/images/battle.jpeg';

function Grid() {
  const column = [];
  const rows = [];


  for (let i = 0; i < 100; i++) {
    column.unshift(i);
  }

  for (let i = 0; i < column.length; i++) {
    rows[i] = column
  }

  const handleClick = (e) => {
    console.log(e)
  }

  // let backgrounds = new Image();
  // backgrounds.src = battleUrl;
  console.log(battleUrl)

  const gridStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    backgroundImage: `url(${battleUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }

  const columnStyle = {
    flex: '1 1 10px',
    display: 'flex',
    flexDirection: 'column'
  }

  const gridSquareStyle = {
    flex: '1 1 10px',
  }

  return(
    <div id='grid' style={gridStyle}>
      {rows.map((x, idx) => {
        return <div className='column' style={columnStyle}>
          {x.map(y => {
            return (
              <div className='grid-square' style={gridSquareStyle} onClick={handleClick}></div>
            )
          })}
        </div>
      })}
    </div>
  )
}

export default Grid