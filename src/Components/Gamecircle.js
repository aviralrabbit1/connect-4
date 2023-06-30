import React from 'react'

const onclick = (event, id) => {
  debugger;
  alert('onClick' + id);
}

const Gamecircle = ({id, color, children}) => {
  console.log(id);
  return (
    <div style={{backgroundColor: color, width: 100, height: 100, margin: 10, borderRadius: '50%'}} onClick={(event) => onclick(event, id) }>
      {/* Gamecircle - id= {id} */}

      {children}
    </div>
  )
}

export default Gamecircle