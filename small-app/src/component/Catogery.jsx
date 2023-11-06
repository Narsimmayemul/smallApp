import React from 'react'

const Catogery = ({onChange}) => {
  return (
    <div>
      <button style={{margin:"10px"}} onClick={()=>onChange("face")}>Face</button>
      <button style={{margin:"10px"}} onClick={()=>onChange("lips")}>Lips</button>
      <button style={{margin:"10px"}} onClick={()=>onChange("Eyes")}>Eyes</button>
      <button style={{margin:"10px"}} onClick={()=>onChange("Tools")}>Tooles</button>
    </div>
  )
}

export default Catogery
