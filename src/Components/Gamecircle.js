import React from 'react'

const onclick = (id, value) => {
  debugger;
  alert('onClick' + id);
}

const Gamecircle = ({id, value, children}) => {
  console.log(id);
  return (
    <div onClick={() => onclick(id, value) }>
      Gamecircle - id= {id}

      {children}
    </div>
  )
}

export default Gamecircle