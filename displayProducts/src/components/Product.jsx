import React from 'react'

const Product = (props) => {
  return (
    <div className='card' key={props.id}> 

                 <img src={props.image} alt="" />

                 <h3> {props.title.slice(0,21)}</h3>

                 <h4> Price : {props.price} $</h4>

                 <h4> Rating : {props.rate}</h4>
                
     </div>
  )
}

export default Product