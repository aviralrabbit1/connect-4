import React from 'react';
import '../App.css'

const Gamecircle = ({id, children, className, onCircleClicked}) => {
  // const style = {
  //   backgroundColor: color, 
  // }

  const onclick = (event, id) => {
    onCircleClicked(id);  
  }

  console.log(id);
  return (
    <div className={`gameCircle ${className}`} 
    // style={id%2==0? {backgroundColor:'red'}:{backgroundColor: 'blue'}} 
    onClick={(event) => onclick(event, id) }>
      {/* Gamecircle - id= {id} */}

      {children}
    </div>
  )
}

export default Gamecircle