import React from 'react';
import '../App.css'

const onclick = (event, id) => {
  debugger;
  alert('onClick' + id);
}

const Gamecircle = ({id, color, children}) => {
  const style = {
    backgroundColor: color, 
  }
  console.log(id);
  return (
    <div className="gameCircle" style={style} onClick={(event) => onclick(event, id) }>
      {/* Gamecircle - id= {id} */}

      {children}
    </div>
  )
}

export default Gamecircle