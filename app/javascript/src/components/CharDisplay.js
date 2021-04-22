import React from 'react';

function CharDisplay(props) {
  const {char, foundChars} = props;

  const isFound = () => {
    return foundChars.includes(char.getName()) ?
    'inline-block' : 'none';
  } 

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    postion: 'relative'
  }

  const xStyle = {
    position: 'fixed',
    fontSize: '100px',
    display: `${isFound()}`
  }

  const avStyle = {
    borderRadius: '50%',
    height: '100px',
    width: '100px',
    backgroundImage: `url(${char.getAvatar()})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: '5px solid black'
  }

  return (
    <div style={boxStyle}>
      <div style={xStyle}>X</div>
      <div style={avStyle}></div>
      <div>
        {char.getName()}
      </div>
    </div>
  )
}

export default CharDisplay;