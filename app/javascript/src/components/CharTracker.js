import React, {useState} from 'react';
import CharDisplay from './CharDisplay';
const uniqid = require('uniqid');

function CharTracker(props) {
  const {characters, foundChars, isFound} = props;

  const containerStyle = {
    background: 'LightBlue',
    height: '600px',
    flex: '1 1 100px',
    border: '3px solid green',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: '25px'
  }

  return (
    <div style={containerStyle}>
      {Object.keys(characters).map(idx => {
        return <CharDisplay 
        char={characters[idx]} 
        foundChars={foundChars} 
        isFound={isFound} 
        key={uniqid()}/>
      })}
    </div>
  )
}

export default CharTracker;