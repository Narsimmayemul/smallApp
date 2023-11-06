import React from 'react'

const Product = ({details,img2,star_rating,price,catogery,type}) => {
  return (
    <div style={{border:"1px solid black"}}>
        <img src={img2} width={400} height={300}/>
      <h2>{details}</h2>
      <h2>{price}</h2>
      <h2>{type}</h2>
      <h2>{catogery}</h2>
      <p>{star_rating}</p>
    </div>
  )
}

export default Product
