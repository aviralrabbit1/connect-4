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
  return (
    <div className='gameBoard' >
        <Gamecircle id ={1} className="player_1" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={2} className="player_2" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={3} className="player_1" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>

        <Gamecircle id ={4} className="player_2" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={5} className="player_1" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={6} className="player_2" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={7} className="player_1" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={8} className="player_2" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>

        <Gamecircle id ={9}  className="player_1"onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={10} className="player_2" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={11} className="player_1" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>

        <Gamecircle id ={12} className="player_2" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={13} className="player_1" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={14} className="player_2" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={15} className="player_1" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={16} className="player_2" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
    </div>
  )
} 

export default Gameboard