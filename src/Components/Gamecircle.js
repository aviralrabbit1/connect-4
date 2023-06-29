import React from 'react'

const onclick = (event, id, color) => {
  debugger;
  alert('onClick' + id);
}

const Gamecircle = ({id, color, children}) => {
  console.log(id);
  return (
    <div style={{backgroundColor: color}} onClick={(event) => onclick(event, id, color) }>
      {/* Gamecircle - id= {id} */}

      {children}
    </div>
  )
}

export default Gamecircle