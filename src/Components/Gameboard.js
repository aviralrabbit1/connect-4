import React from 'react'
import Gamecircle from './Gamecircle'

function Gameboard() {
  return (
    <div>
        <Gamecircle id ={1} value={7} >
            <span style={{color: 'red'}} >Red</span>
        </Gamecircle>
        
        <Gamecircle id ={2} value={7} >
            <span style={{color: 'blue'}} >Blue</span>
        </Gamecircle>
        
        <Gamecircle id ={3} value={7} >
            <span style={{color: 'red'}} >Red</span>
        </Gamecircle>

        <Gamecircle id ={4} value={7} >
            <span style={{color: 'blue'}} >Blue</span>
        </Gamecircle>
        
        <Gamecircle id ={5} value={7} >
            <span style={{color: 'red'}} >Red</span>
        </Gamecircle>
        
        <Gamecircle id ={6} value={7} >
            <span style={{color: 'blue'}} >Blue</span>
        </Gamecircle>
        
        <Gamecircle id ={7} value={7} >
            <span style={{color: 'red'}} >Red</span>
        </Gamecircle>
        
        <Gamecircle id ={8} value={7} >
            <span style={{color: 'blue'}} >Blue</span>
        </Gamecircle>
        
    </div>
  )
} 

export default Gameboard