import React from 'react'

function Footer({onClickEvent, onSuggestClick}) {
  return (
    <div className='panel header footer'>
      <button onClick={onClickEvent}>New Game</button>
      <button onClick={onSuggestClick}>Suggest Move</button>
    </div>
  )
}

export default Footer
