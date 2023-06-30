import React from 'react';
import { GAME_STATE_PLAYING, GAME_STATE_WIN } from './Gameboard';

function Header({currentPlayer, winPlayer, gameState}) {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div> Player {currentPlayer} turn</div>
        case GAME_STATE_WIN:
        return <div> Player {winPlayer} wins!</div>
    }
  }
  return (
    <div className='panel header'>
        <div className='header-text'>
          {renderLabel()}
        </div>
    </div>
  )
}

export default Header
