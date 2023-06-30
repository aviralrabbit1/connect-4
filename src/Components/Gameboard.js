import React from 'react'
import Gamecircle from './Gamecircle'

function Gameboard() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', 
    gridTemplateRows: '1fr 1fr 1fr 1fr', padding: 20, width: 100}}>
        <Gamecircle id ={1} color="red"  >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={2} color="blue"  >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={3} color="red"  >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>

        <Gamecircle id ={4} color="blue"  >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={5} color="red"  >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={6} color="blue"  >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={7} color="red"  >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={8} color="blue"  >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>

        <Gamecircle id ={9} color="red"  >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={10} color="blue"  >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={11} color="red"  >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>

        <Gamecircle id ={12} color="blue"  >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={13} color="red"  >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={14} color="blue"  >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
        <Gamecircle id ={15} color="red"  >
            {/* <span style={{color: 'red'}} >Red</span> */}
        </Gamecircle>
        
        <Gamecircle id ={16} color="blue"  >
            {/* <span style={{color: 'blue'}} >Blue</span> */}
        </Gamecircle>
        
    </div>
  )
} 

export default Gameboard