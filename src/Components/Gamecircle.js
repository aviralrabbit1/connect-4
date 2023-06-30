import React from 'react'

const onclick = (event, id) => {
  debugger;
  alert('onClick' + id);
}

const Gamecircle = ({id, color, children}) => {
  const style = {
    backgroundColor: color, 
    width: 100, 
    height: 100, 
    margin: 10, 
    borderRadius: '50%'
  }
  console.log(id);
  return (
    <div style={style} onClick={(event) => onclick(event, id) }>
      {/* Gamecircle - id= {id} */}

      {children}
    </div>
  )
}

export default Gamecircle