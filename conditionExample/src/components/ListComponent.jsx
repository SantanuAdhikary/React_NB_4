import React from 'react'

const ListComponent = () => {


    let subjects = ["html","css","js","react","java","python"]

    let products = [
        {
            id:1,
            productName:"tv",
            price:30000
        },
        {
            id:2,
            productName:"mobile",
            price:40000
        },
        {
            id:3,
            productName:"laptop",
            price:40000
        }
    ]

  return (
    <>

    <h1> List And Key in React</h1>

    <ol>
        {
            subjects.map((ele,index)=>{
                return(
                    <li key={index}>{ele} </li>
                )
            })
        }

        <div className="product">

        {
            products.map((ele)=>{
                return(
                    <div className='box' key={ele.id}>

                        <h3>product name : {ele.productName}</h3>
                        <h4> price : {ele.price}</h4>

                    </div>
                )
            })
        }
        </div>

    </ol>
    </>
  )
}

export default ListComponent