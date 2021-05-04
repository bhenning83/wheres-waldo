import React, { useEffect } from 'react';

function AvatarDisplay(props) {
  const {char, isFound} = props;

  useEffect(() => {
    const x = document.getElementById(`${char.getName()}-x`);
    const av = document.getElementById(`${char.getName()}-av`);
    av.style.backgroundImage = `url(${char.getAvatar()})`; //maybe try state to prevent white out on refresh
    if (isFound(char.getName())) {
      x.style.display = 'inline-block';
    } else {
      x.style.display = 'none';
    }
  })

  return (
    <div className='avatar-box'>
      <div className='avatar-x' id={`${char.getName()}-x`}>X</div>
      <div className='avatar' id={`${char.getName()}-av`}></div>
      <div>
        {char.getName()}
      </div>
    </div>
  )
}

export default AvatarDisplay;