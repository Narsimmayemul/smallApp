import React from 'react'

const filter = ({onChange}) => {
  return (
    <div>
      <button style={{margin:"10px"} }onClick={()=>onChange("Oil")}>Oil</button>
      <button style={{margin:"10px"} } onClick={()=>onChange("Normal")}>Normal</button>
      <button style={{margin:"10px"} }onClick={()=>onChange("Dry")}>Dry</button>
      
    </div>
  )
}

export default filter
