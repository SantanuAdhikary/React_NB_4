import React from 'react'

const Card = (props) => {

    let {productName, productPrice,image} = props
  return (
    <div className='card'>

         <img src={image} alt="" />
        
         <h2> Product name is : {productName}</h2>

         <h3> price is : {productPrice}</h3>
    </div>
  )
}

export default Card