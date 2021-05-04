import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function CheckMark(props) {
  const {isFound, level, charName} = props;

  const checkPos = () => {

    switch(true) {
      case((level === 1) && (charName === 'Waldo')): 
        return ['105px', '-410px']
      case((level === 1) && (charName === 'Wenda')):
        return ['1390px', '0px']
      case((level === 1) && (charName === 'Odlaw')):
        return ['1375px', '-385px']
      case((level === 2) && (charName === 'Waldo')):
        return ['1365', '-93px']
      case((level === 2) && (charName === 'Wenda')):
      return ['1625px', '400px']
      case((level === 2) && (charName === 'Odlaw')):
        return ['1745px', '-18px']
      case((level === 3) && (charName === 'Waldo')):
        return ['290px', '-390px']
      case((level === 3) && (charName === 'Wenda')):
        return ['1390px', '-290px']
      case((level === 3) && (charName === 'Odlaw')):
        return ['1590px', '-365px']
      default: return [];
    }
  }

  useEffect(() => {
    const check = document.getElementById(`${charName}-check`);
    check.style.left = checkPos()[0];
    check.style.bottom = checkPos()[1];
    if (isFound(charName)) {
      check.style.display = 'inline-block'
    }
  })

  return(
    <FontAwesomeIcon icon={faCheckCircle} className='checkmark' id={`${charName}-check`} />
  )
}

export default CheckMark