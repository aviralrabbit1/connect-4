import React from 'react'
import Gamecircle from './Gamecircle'

function Gameboard() {
  return (
    <div>
        <Gamecircle id ={1} value={7} >
            <div>Red</div>
        </Gamecircle>
        
        <Gamecircle id ={2} value={7} >
            <div>Blue</div>
        </Gamecircle>
        
        <Gamecircle id ={3} value={7} >
            <div>Red</div>
        </Gamecircle>
        
        <Gamecircle id ={4} value={7} >
            <div>Blue</div>
        </Gamecircle>
        
        <Gamecircle id ={5} value={7} >
            <div>Red</div>
        </Gamecircle>
        
        <Gamecircle id ={6} value={7} >
            <div>Blue</div>
        </Gamecircle>
        
        <Gamecircle id ={7} value={7} >
            <div>Red</div>
        </Gamecircle>
        
        <Gamecircle id ={8} value={7} >
            <div>Blue</div>
        </Gamecircle>
        
    </div>
  )
} 

export default Gameboard