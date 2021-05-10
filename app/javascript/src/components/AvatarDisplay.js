import React, { useEffect } from 'react';

function AvatarDisplay(props) {
  const {char, isFound} = props;

  //displays an 'X' over found characters' avatars
  useEffect(() => {
    const x = document.getElementById(`${char.getName()}-x`);
    if (isFound(char.getName())) {
      x.style.display = 'inline-block';
    } else {
      x.style.display = 'none';
    }
  })

  const bg = {
    backgroundImage: `url(${char.getAvatar()})`
  }
  return (
    <div className='avatar-box'>
      <div className='avatar-x' id={`${char.getName()}-x`}>X</div>
      <div className='avatar' id={`${char.getName()}-av`} style={bg}></div>
      <div>
        {char.getName()}
      </div>
    </div>
  )
}

export default AvatarDisplay;