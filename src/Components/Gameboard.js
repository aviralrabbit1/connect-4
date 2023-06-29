import React from 'react'
import Gamecircle from './Gamecircle'

function Gameboard() {
  return (
    <div>
        <Gamecircle id ={1} color="red"  >
            <span style={{color: 'red'}} >Red</span>
        </Gamecircle>
        
        <Gamecircle id ={2} color="blue"  >
            <span style={{color: 'blue'}} >Blue</span>
        </Gamecircle>
        
        <Gamecircle id ={3} color="red"  >
            <span style={{color: 'red'}} >Red</span>
        </Gamecircle>

        <Gamecircle id ={4} color="blue"  >
            <span style={{color: 'blue'}} >Blue</span>
        </Gamecircle>
        
        <Gamecircle id ={5} color="red"  >
            <span style={{color: 'red'}} >Red</span>
        </Gamecircle>
        
        <Gamecircle id ={6} color="blue"  >
            <span style={{color: 'blue'}} >Blue</span>
        </Gamecircle>
        
        <Gamecircle id ={7} color="red"  >
            <span style={{color: 'red'}} >Red</span>
        </Gamecircle>
        
        <Gamecircle id ={8} color="blue"  >
            <span style={{color: 'blue'}} >Blue</span>
        </Gamecircle>
        
    </div>
  )
} 

export default Gameboard