import React from 'react'

const Search = ({onChange}) => {
  return (
    <div>
      <input style={{margin:"10px" , width:"200px" , height:"30px"}} placeholder='Search' onChange={(e)=>{onChange(e.target.value)}}></input>
    </div>
  )
}

export default Search
