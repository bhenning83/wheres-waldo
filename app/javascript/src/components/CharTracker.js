import React, {useState} from 'react';
import CharDisplay from './CharDisplay';

function CharTracker(props) {
  const {characters} = props;
  const [foundChars, setFoundChars] = useState(['Waldo'])

  const containerStyle = {
    background: 'LightBlue',
    height: '90vh',
    flex: '1 1 100px',
    border: '1px solid green',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

  return (
    <div style={containerStyle}>
      {Object.keys(characters).map(idx => {
        return <CharDisplay char={characters[idx]} foundChars={foundChars} />
      })}
    </div>
  )
}

export default CharTracker;