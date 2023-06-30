import React, {useState} from 'react'
import Gamecircle from './Gamecircle'
import '../App.css'
import Header from './Header';
import Footer from './Footer';
import { isWinner } from '../Helper';
import { render } from '@testing-library/react';

export const NUM_CIRCLES = 16; 
export const NO_PLAYER = 0;
export const PLAYER_1 = 1;
export const PLAYER_2 = 2;
export const GAME_STATE_IDLE_= 0;
export const GAME_STATE_PLAYING= 1;
export const GAME_STATE_WIN = 2;
export const GAME_STATE_DRAW = 3;

function Gameboard() {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

  // const initializeBoard = () => {
  //   setCurrentPlayer = PLAYER_1;
  //   setGameBoard(Array(16).fill(NO_PLAYER));
  // }

  const initBoard = () => {
    const circles = [];
    for(let i = 0; i < NUM_CIRCLES; i++){
      circles.push(renderCircle(i));
    }
    return circles;
  }
  
  const circleClicked = (id) => {
    if(gameBoard[id]){
      return;
    }

    if(gameState !==GAME_STATE_PLAYING) return;
    
    console.log("circle clicked " + id);

    if(isWinner(gameBoard, id, currentPlayer)){
      console.log("Player " + currentPlayer + " wins");
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }
    
    // const board = [...gameBoard]; //spread syntax making shallow copies
    //avoid mutation and use map,filter, etc.
    // board[id] = 1; 
    // board[id] = currentPlayer;
    setGameBoard(prev =>{
      return prev.map((circle, position) => {
        if (position===id) {
          return currentPlayer;
        }
        return circle;
      });
    });
    

    setCurrentPlayer(currentPlayer===PLAYER_1? PLAYER_2: PLAYER_1);

    // console.log(gameBoard);
    // console.log(currentPlayer);
  }

  const renderCircle = (id) => {
    return <Gamecircle 
              key={id} id={id} 
              className={`player_${gameBoard[id]}`} 
              onCircleClicked={circleClicked} 
            />
  }

  return (
    <>
      <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
      <div className="gameBoard" >
        {initBoard()}       
      </div>
      <Footer/>
    </>
  )
} 

export default Gameboard
