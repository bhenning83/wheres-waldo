import React, {useEffect, useState} from 'react';
import villageUrl from '../../assets/images/village.jpeg';
import pirateUrl from '../../assets/images/pirate.jpeg';
import battleUrl from '../../assets/images/battle.jpeg';
import CheckMark from './CheckMark';
import StartScreen from './StartScreen';
const uniqid = require('uniqid');

function Grid(props) {
  const {alertCharFound, isFound, startGame, isGameStarted, level} = props;
  let frame

  const column = [];
  const rows = [];
  
  const queryCoordsDb = async(ary) => {
    let url = new URL('http://localhost:3000/coords'),
    params = {x: ary[0], y: ary[1], level: level}
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


  useEffect(() => {
    frame = document.getElementById('frame');
    frame.scrollTop = 0;
    frame.scrollLeft = 0;
  }, [level])

  const frameStyle = {
    width: '1000px',
    height: '600px',
    border: '3px solid pink',
    overflow: 'scroll',
    position: 'relative',
  }

  const gridStyle = {
    display: 'flex',
    width: '1856px',
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

  const backgroundImg = () => {
    if (level === 1) {
      return villageUrl
    } else if (level === 2) {
      return pirateUrl
    } else if (level === 3) {
      return battleUrl
    }
  }

  return(
    <div id='frame' style={frameStyle}>
      <img src={backgroundImg()} alt="" style={imgStyle} />
      <CheckMark isFound={isFound} level={level} char={'Waldo'}/>
      <CheckMark isFound={isFound} level={level} char={'Wenda'}/>
      <CheckMark isFound={isFound} level={level} char={'Odlaw'}/>
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