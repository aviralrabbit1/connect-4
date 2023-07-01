import React, {useEffect, useState} from 'react'
import Gamecircle from './Gamecircle'
import '../App.css'
import Header from './Header';
import Footer from './Footer';
import { getComputerMove, isDraw, isWinner } from '../Helper';

export const NUM_CIRCLES = 16; 
export const NO_PLAYER = 0;
export const PLAYER_1 = 1;
export const PLAYER_2 = 2;
export const GAME_STATE_IDLE_= 0;
export const GAME_STATE_PLAYING= 1;
export const GAME_STATE_WIN = 2;
export const GAME_STATE_DRAW = 3;

function Gameboard() {
  const [gameBoard, setGameBoard] = useState(Array(NUM_CIRCLES).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

  useEffect(()=> {
    initGame();
  }, []);

  const initGame = () => {
    console.log("initializing game");
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
    setGameState(GAME_STATE_PLAYING);
  }

  const initBoard = () => {
    const circles = [];
    for(let i = 0; i < NUM_CIRCLES; i++){
      circles.push(renderCircle(i));
    }
    return circles;
  }

  const suggestMove = () => {
    circleClicked(getComputerMove(gameBoard))
  }
  
  const circleClicked = (id) => {
    if(gameBoard[id]) return;  

    if(gameState !==GAME_STATE_PLAYING) return;
    
    console.log("circle clicked " + id);

    if(isWinner(gameBoard, id, currentPlayer)){
      console.log("Player " + currentPlayer + " wins");
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }
    
    if(isDraw(gameBoard, id, currentPlayer)){
      console.log("Game is Draw");
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_PLAYER);
    }
    
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
      <Footer onClickEvent={initGame} onSuggestClick={suggestMove} />
    </>
  )
} 

export default Gameboard
