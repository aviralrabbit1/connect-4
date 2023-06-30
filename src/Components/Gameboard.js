import React, {useState} from 'react'
import Gamecircle from './Gamecircle'
import '../App.css'

function Gameboard() {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
  
  const circleClicked = (id) => {
    console.log("circle clicked " + id);
    gameBoard[id] =1;
    setGameBoard(gameBoard);
    console.log(gameBoard);
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