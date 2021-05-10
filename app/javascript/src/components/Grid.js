import React, {useEffect, useState} from 'react';
import villageUrl from '../../assets/images/village.jpeg';
import pirateUrl from '../../assets/images/pirate.jpeg';
import battleUrl from '../../assets/images/battle.jpeg';
import CheckMark from './CheckMark';
import StartScreen from './StartScreen';
const uniqid = require('uniqid');

function Grid(props) {
  const {alertCharFound, isFound, startGame, isGameStarted, isGameOver, level} = props;
  const column = [];
  const rows = [];
  
  for (let i = 0; i < 75; i++) {
    column.unshift(i);
  }

  for (let i = 0; i < column.length; i++) {
    rows[i] = column
  }

  const queryCoordsDb = async(ary) => {
    let url = new URL('https://peaceful-island-27420.herokuapp.com/https://brendons-wheres-waldo.herokuapp.com/coords'),
    params = {x: ary[0], y: ary[1], level: level}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url)
    const char = await response.text()
    return char
  }

  const handleClick = async (ary) => {
    const char = await queryCoordsDb(ary)
    if (char !== 'null') {
      alertCharFound(char)
    }
  }

  useEffect(() => {
    const img = document.getElementById('game-img')
    if (isGameStarted === true 
      && isGameOver === false) {
      img.style.filter = 'none';
    } else {
      img.style.filter = 'blur(3px)';
    }
  }, [isGameOver, isGameStarted])


  useEffect(() => {
    let frame = document.getElementById('frame');
    frame.scrollTop = 0;
    frame.scrollLeft = 0;
  }, [level])

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
    <div id='frame'>
      <img src={backgroundImg()} alt="waldo-pic" id='game-img'/>
      <CheckMark isFound={isFound} level={level} charName={'Waldo'}/>
      <CheckMark isFound={isFound} level={level} charName={'Wenda'}/>
      <CheckMark isFound={isFound} level={level} charName={'Odlaw'}/>
      <StartScreen startGame={startGame} isGameStarted={isGameStarted} />
      <div id='grid'>
        {rows.map((x, idx) => {
          return <div className='column' key={uniqid()}>
            {x.map(y => {
              return (
                <div className='grid-square' onClick={()=>handleClick([idx, y])} key={uniqid()}></div>
              )
            })}
          </div>
        })}
      </div>
    </div>
  )
}

export default Grid