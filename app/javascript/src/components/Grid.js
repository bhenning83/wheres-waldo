import React from 'react';
import villageUrl from '../../assets/images/village.jpeg';
import pirateUrl from '../../assets/images/pirate.jpeg';
import battleUrl from '../../assets/images/battle.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const uniqid = require('uniqid');

function Grid(props) {
  const {alertCharFound, isFound} = props;
  const column = [];
  const rows = [];

  const waldoLoc = {
    0: [4, 7],
    1: [4, 8],
    2: [4, 9],
    3: [4, 10],
    4: [4, 11]
  }

  const odlawLoc = {
    0: [54, 10],
    1: [54, 11], 
    2: [54, 12]
  }

  const wendaLoc = {
    0: [54, 35],
    1: [54, 36],
  }


  for (let i = 0; i < 75; i++) {
    column.unshift(i);
  }

  for (let i = 0; i < column.length; i++) {
    rows[i] = column
  }

  const handleClick = (ary) => {
    Object.keys(waldoLoc).map(idx => {
      if (waldoLoc[idx][0] === ary[0]
        && waldoLoc[idx][1] === ary[1]) {
        alertCharFound('Waldo')
      }
    })

    Object.keys(wendaLoc).map(idx => {
      if (wendaLoc[idx][0] === ary[0]
        && wendaLoc[idx][1] === ary[1]) {
        alertCharFound('Wenda')
      }
    })

    Object.keys(odlawLoc).map(idx => {
      if (odlawLoc[idx][0] === ary[0]
        && odlawLoc[idx][1] === ary[1]) {
        alertCharFound('Odlaw')
      }
    })
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
    // border: '1px solid gray'
  }

  const waldoCheck = {
    position: 'absolute',
    bottom: '-425px',
    left: '105px',
    color: 'green',
    fontSize: '2rem',
    boxShadow: '0 0 10px 10px white',
    borderRadius: '50%',
    outline: '2px solid white',
    display: isFound('Waldo')
  }

  const wendaCheck = {
    position: 'absolute',
    bottom: '-5px',
    left: '1390px',
    color: 'green',
    fontSize: '2rem',
    boxShadow: '0 0 10px 10px white',
    borderRadius: '50%',
    outline: '2px solid white',
    display: isFound('Wenda')
  }

  const odlawCheck = {
    position: 'absolute',
    bottom: '-400px',
    left: '1375px',
    color: 'green',
    fontSize: '2rem',
    boxShadow: '0 0 7px 10px white',
    borderRadius: '50%',
    outline: '2px solid white',
    display: isFound('Odlaw')
  }

  return(
    <div id='frame' style={frameStyle}>
      <img src={villageUrl} alt="" style={imgStyle}/>
      <FontAwesomeIcon icon={faCheckCircle} style={waldoCheck} />
      <FontAwesomeIcon icon={faCheckCircle} style={wendaCheck} />
      <FontAwesomeIcon icon={faCheckCircle} style={odlawCheck} />
      <div id='grid' style={gridStyle}>
        {rows.map((x, idx) => {
          return <div className='column' style={columnStyle} key={uniqid()}>
            {x.map(y => {
              return (
                <div className='grid-square' style={gridSquareStyle} onClick={()=>handleClick([idx, y])} key={uniqid()}></div>
              )
            })}
          </div>
        })}
      </div>
    </div>
  )
}

export default Grid