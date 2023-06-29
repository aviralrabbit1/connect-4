import React from 'react'

const onclick = (event, id, value) => {
  debugger;
  alert('onClick' + id);
}

const Gamecircle = ({id, value, children}) => {
  console.log(id);
  return (
    <div onClick={(event) => onclick(event, id, value) }>
      {/* Gamecircle - id= {id} */}

      {children}
    </div>
  )
}

export default Gamecircle