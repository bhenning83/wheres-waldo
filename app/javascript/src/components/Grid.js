import React, {useEffect} from 'react';
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
  
  //sets up arrays to map through and create grid
  for (let i = 0; i < 75; i++) {
    column.unshift(i);
  }

  for (let i = 0; i < column.length; i++) {
    rows[i] = column
  }

  const queryCoordsDb = async(ary) => {
    //sends the location of the click on the grid to the db
    //receives the name of the character that was click on, if any
    let url = new URL('https://brendons-wheres-waldo.herokuapp.com/coords'),
    params = {x: ary[0], y: ary[1], level: level}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) //adds params to api request
    const response = await fetch(url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
    const char = await response.text()
    return char
  }

  //checks to see if a character was clicked on, then adds it to found characters list
  const handleClick = async (ary) => {
    const char = await queryCoordsDb(ary)
    if (char !== 'null') {
      alertCharFound(char)
    }
  }

  //adds a blurred filter to image before game is started
  useEffect(() => {
    const img = document.getElementById('game-img')
    if (isGameStarted === true 
      && isGameOver === false) {
      img.style.filter = 'none';
    } else {
      img.style.filter = 'blur(3px)';
    }
  }, [isGameOver, isGameStarted])


  //resets the scroll within the image frame to the top-left corner
  useEffect(() => {
    let frame = document.getElementById('frame');
    frame.scrollTop = 0;
    frame.scrollLeft = 0;
  }, [level])

  const backgroundImg = () => {
    //changes the image for each level
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