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
        <Gamecircle id ={1} onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={2} color="blue" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={3} onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>

        <Gamecircle id ={4} color="blue" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={5} onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={6} color="blue" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={7} onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={8} color="blue" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>

        <Gamecircle id ={9} onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={10} color="blue" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={11} onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>

        <Gamecircle id ={12} color="blue" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={13} onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={14} color="blue" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={15} onCircleClicked={circleClicked} >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={16} color="blue" onCircleClicked={circleClicked} >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
    </div>
  )
} 

export default Gameboard