import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function CheckMark(props) {
  const {isFound, level, char} = props;

  const checkPos = () => {

    switch(true) {
      case((level === 1) && (char === 'Waldo')): 
        return ['105px', '-410px']
      case((level === 1) && (char === 'Wenda')):
        return ['1390px', '0px']
      case((level === 1) && (char === 'Odlaw')):
        return ['1375px', '-385px']
      case((level === 2) && (char === 'Waldo')):
        return ['1365', '-93px']
      case((level === 2) && (char === 'Wenda')):
      return ['1625px', '400px']
      case((level === 2) && (char === 'Odlaw')):
        return ['1745px', '-18px']
      case((level === 3) && (char === 'Waldo')):
        return ['290px', '-390px']
      case((level === 3) && (char === 'Wenda')):
        return ['1390px', '-290px']
      case((level === 3) && (char === 'Odlaw')):
        return ['1590px', '-365px']
      default: return [];
    }
  }

  const checkStyle = {
    position: 'absolute',
    left: checkPos()[0],
    bottom: checkPos()[1],
    color: 'green',
    background: 'white',
    fontSize: '2rem',
    boxShadow: '0 0 10px 10px white',
    borderRadius: '50%',
    display: isFound(char)
  }

  return(
    <FontAwesomeIcon icon={faCheckCircle} style={checkStyle} />
  )
}

export default CheckMark