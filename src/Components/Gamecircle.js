import React from 'react'

const onclick = () => {
  alert('onClick');
}

const Gamecircle = ({id}) => {
  console.log(id);
  return (
    <div onClick={onclick}>
      Gamecircle - id= {id}
    </div>
  )
}

export default Gamecircle