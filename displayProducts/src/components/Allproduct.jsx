import React, { useEffect, useState } from 'react'
import Product from './Product'

const Allproduct = () => {

    let [data, setData] = useState([])


    let getData = async ()=>{

        let res = await fetch("https://fakestoreapi.com/products")
        let products = await res.json()
        setData(products)
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <>

    <div className="main">

       {
        data.map((e)=>{
            return(
                <Product
                 image={e.image} 
                 title={e.title}
                 price={e.price} 
                 rate={e.rating.rate}/>
            )
        })
       }
     
        
    </div>
    
    </>
  )
}

export default Allproduct