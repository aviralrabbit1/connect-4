import React, {useState} from 'react'
import Gamecircle from './Gamecircle'
import '../App.css'
import Header from './Header';
import Footer from './Footer';

const NUM_CIRCLES = 16; 
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

function Gameboard() {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

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

    setCurrentPlayer(currentPlayer===PLAYER_1? PLAYER_2: PLAYER_1);

    console.log(gameBoard);
    console.log(currentPlayer);
  }

  const renderCircle = (id) => {
    return <Gamecircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
  }

  return (
    <>
      <Header/>
      <div className='gameBoard' >
        {initBoard()}       
      </div>
      <Footer/>
    </>
  )
} 

export default Gameboard
