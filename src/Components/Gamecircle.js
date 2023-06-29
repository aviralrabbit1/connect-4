import React from 'react'

const onclick = () => {
  alert('onClick');
}

const Gamecircle = ({id, children}) => {
  console.log(id);
  return (
    <div onClick={onclick}>
      Gamecircle - id= {id}

      {children}
    </div>
  )
}

export default Gamecircle