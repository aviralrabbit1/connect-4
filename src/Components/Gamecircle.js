import React from 'react'

const onclick = (id) => {
  debugger;
  alert('onClick' + id);
}

const Gamecircle = ({id, children}) => {
  console.log(id);
  return (
    <div onClick={() => onclick(id) }>
      Gamecircle - id= {id}

      {children}
    </div>
  )
}

export default Gamecircle