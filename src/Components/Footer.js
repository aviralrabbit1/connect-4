import React from 'react'

function Footer({onClickEvent}) {
  return (
    <div className='panel header footer'>
      <button onClick={onClickEvent}>New Game</button>
      <button >Suggest Move</button>
    </div>
  )
}

export default Footer
