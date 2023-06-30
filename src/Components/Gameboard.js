import React, {useState} from 'react'
import Gamecircle from './Gamecircle'
import '../App.css'

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

function Gameboard() {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  
  const circleClicked = (id) => {
    console.log("circle clicked " + id);

    const board = [...gameBoard]; //spread syntax making shallow copies
    //avoid mutation and use map,filter, etc.
    // board[id] = 1;
    board[id] = currentPlayer;
    setGameBoard(prev =>{
      return prev.map((circle, position) => {
        if (position===id) {
          return currentPlayer;
        }
        return circle;
      })
    });

    setCurrentPlayer(currentPlayer==PLAYER_1? PLAYER_2: PLAYER_1);

    console.log(gameBoard);
    console.log(currentPlayer);
  }

  const renderCircle = (id) => {
    return <Gamecircle id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
  }

  return (
    <div className='gameBoard' >
        {renderCircle(0)}        
        {renderCircle(1)}        
        {renderCircle(2)}        
        {renderCircle(3)}        
        {renderCircle(4)}        
        {renderCircle(5)}        
        {renderCircle(6)}        
        {renderCircle(7)}        
        {renderCircle(8)}        
        {renderCircle(9)}        
        {renderCircle(10)}        
        {renderCircle(11)}        
        {renderCircle(12)}        
        {renderCircle(13)}        
        {renderCircle(14)}        
        {renderCircle(15)}        
    </div>
  )
} 

export default Gameboard