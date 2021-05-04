import React, {useState} from 'react';
import AvatarDisplay from './AvatarDisplay';
const uniqid = require('uniqid');

function CharTracker(props) {
  const {characters, foundChars, isFound} = props;

  return (
    <div className='char-tracker'>
      {Object.keys(characters).map(idx => {
        return (
          <AvatarDisplay 
            char={characters[idx]} 
            foundChars={foundChars} 
            isFound={isFound} 
            key={uniqid()}
          />
        )
      })}
    </div>
  )
}

export default CharTracker;