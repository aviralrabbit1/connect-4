import React from 'react'

function Footer({onClickEvent}) {
  return (
    <div className='panel header footer'>
      <button onClick={onClickEvent}>New Game</button>
    </div>
  )
}

export default Footer
