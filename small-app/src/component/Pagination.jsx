import React from 'react'

const Pagination = ({arr , page , onChange}) => {
  return (
    <div>
     {arr?.map((ele)=>(
      <button key={ele} onClick={()=>onChange(ele)} disabled={page===ele} style={page===ele ? {border:"1px solid red"} : {}}>{ele}</button>
     ))}
    </div>
  )
}

export default Pagination
