import React from 'react';
import '../App.css'

const onclick = (event, id) => {
  debugger;
  alert('onClick' + id);
}

const Gamecircle = ({id, color, children}) => {
  // const style = {
  //   backgroundColor: color, 
  // }
  console.log(id);
  return (
    <div className={`gameCircle ${id%2==0?"odd":"even"}`} 
    // style={id%2==0? {backgroundColor:'red'}:{backgroundColor: 'blue'}} 
    onClick={(event) => onclick(event, id) }>
      {/* Gamecircle - id= {id} */}

      {children}
    </div>
  )
}

export default Gamecircle