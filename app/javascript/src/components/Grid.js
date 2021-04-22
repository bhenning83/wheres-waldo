import React from 'react';
import villageUrl from '../../assets/images/village.jpeg';
import pirateUrl from '../../assets/images/pirate.jpeg';
import battleUrl from '../../assets/images/battle.jpeg';

function Grid() {
  const column = [];
  const rows = [];


  for (let i = 0; i < 90; i++) {
    column.unshift(i);
  }

  for (let i = 0; i < column.length; i++) {
    rows[i] = column
  }

  const handleClick = (ary) => {
    console.log(ary)
  }

  const frameStyle = {
    width: '1000px',
    height: '600px',
    border: '3px solid pink',
    overflow: 'scroll',
    position: 'relative',
  }

  const gridStyle = {
    display: 'flex',
    width: '1920px',
    height: '1200px'
  }

  const imgStyle = {
    position: 'absolute',
    height: '1200px',
    top: '0',
    left: '0',
    zIndex: '-1'
  }

  const columnStyle = {
    flex: '1 1 12px',
    display: 'flex',
    flexDirection: 'column'
  }

  const gridSquareStyle = {
    flex: '1 1 12px',
  }

  return(
    <div id='frame' style={frameStyle}>
      <img src={villageUrl} alt="" style={imgStyle}/>
      <div id='grid' style={gridStyle}>
        {rows.map((x, idx) => {
          return <div className='column' style={columnStyle}>
            {x.map(y => {
              return (
                <div className='grid-square' style={gridSquareStyle} onClick={()=>handleClick([idx, y])}></div>
              )
            })}
          </div>
        })}
      </div>
    </div>
  )
}

export default Grid