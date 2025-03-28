import React, { useEffect, useState } from 'react'
import { useMyhook } from './UseContext'

const UseEffect = () => {

    let [c, setC] = useState(0)
    let {sage} = useMyhook()
    useEffect(()=>{
        console.log("component mounted")
    },[c])

  return (
    <>

       <h1> I am useEffect Component</h1>

       <h2> count is : {c}</h2>

       <h3> rahul age is : {sage}</h3>

       <button onClick={()=>setC(c+1)}>increment</button>
    
    </>
  )
}

export default UseEffect