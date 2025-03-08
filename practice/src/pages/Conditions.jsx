import React from 'react'
import Hi from '../components/Hi'
import Hello from '../components/Hello'

const Conditions = () => {

    let num = 5

   return(
    <>

      {

         ( num % 2 == 0) ? <h1> {num} is even</h1> : <h1> {num} is odd number</h1>
      }

      {
        (num%2 ==0) ? <Hi/> : <Hello/>
      }
    

    </>
   )

}

export default Conditions