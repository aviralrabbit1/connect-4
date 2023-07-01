import React from 'react'
import { GAME_STATE_PLAYING } from './Gameboard'

function Footer({onClickEvent, onSuggestClick, gameState}) {
  const renderButton = () =>{
    if(gameState === GAME_STATE_PLAYING){
      return <button onClick={onSuggestClick} >Suggest Move</button>
    }
    return <button onClick={onClickEvent}>New Game</button>;
  }
  return (
    <div className='panel header footer'>
      { renderButton() }
    </div>
  )
}

export default Footer
