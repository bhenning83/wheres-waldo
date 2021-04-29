import React, {useState} from 'react';
import villageUrl from '../../assets/images/village.jpeg';
import pirateUrl from '../../assets/images/pirate.jpeg';
import battleUrl from '../../assets/images/battle.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import StartScreen from './StartScreen'
const uniqid = require('uniqid');

function Grid(props) {
  const {alertCharFound, isFound, startGame, isGameStarted} = props;

  const column = [];
  const rows = [];
  
  const queryCoordsDb = async(ary) => {
    let url = new URL('http://localhost:3000/coords'),
    params = {x: ary[0], y: ary[1]}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url)
    const char = await response.text()
    return char
  }

  for (let i = 0; i < 75; i++) {
    column.unshift(i);
  }

  for (let i = 0; i < column.length; i++) {
    rows[i] = column
  }

  const handleClick = async (ary) => {
    const char = await queryCoordsDb(ary)
    if (char !== 'null') {
      alertCharFound(char)
    }
  }

  const blurred = () => {
    return isGameStarted === true ? 'none' : 'blur(3px)'
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
    filter: blurred(),
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
    bottom: '-415px',
    left: '105px',
    color: 'green',
    background: 'white',
    fontSize: '2rem',
    boxShadow: '0 0 10px 10px white',
    borderRadius: '50%',
    display: isFound('Waldo')
  }

  const wendaCheck = {
    position: 'absolute',
    bottom: '0px',
    left: '1390px',
    color: 'green',
    background: 'white',
    fontSize: '2rem',
    boxShadow: '0 0 10px 10px white',
    borderRadius: '50%',
    display: isFound('Wenda')
  }

  const odlawCheck = {
    position: 'absolute',
    bottom: '-385px',
    left: '1375px',
    color: 'green',
    background: 'white',
    fontSize: '2rem',
    boxShadow: '0 0 7px 10px white',
    borderRadius: '50%',
    display: isFound('Odlaw')
  }

  return(
    <div id='frame' style={frameStyle}>
      <img src={villageUrl} alt="" style={imgStyle} />
      <FontAwesomeIcon icon={faCheckCircle} style={waldoCheck} />
      <FontAwesomeIcon icon={faCheckCircle} style={wendaCheck} />
      <FontAwesomeIcon icon={faCheckCircle} style={odlawCheck} />
      <StartScreen startGame={startGame} isGameStarted={isGameStarted} />
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