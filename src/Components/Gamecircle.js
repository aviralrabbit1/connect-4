import React from 'react'

const onclick = (event, id) => {
  alert('onClick' + id);
}

const Gamecircle = ({id, children}) => {
  console.log(id);
  return (
    <div onClick={(event, id) => onclick(event, id) }>
      Gamecircle - id= {id}

      {children}
    </div>
  )
}

export default Gamecircle