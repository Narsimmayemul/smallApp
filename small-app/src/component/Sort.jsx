import React from 'react'

const Sort = ({onChange}) => {

  return (
    <div>
      <button onClick={()=>onChange("asc")} style={{margin:"10px"}}>INC</button>
      <button onClick={()=>onChange("desc")} style={{margin:"10px"}}>DEC</button>
      
    </div>
  )
}


export default Sort
