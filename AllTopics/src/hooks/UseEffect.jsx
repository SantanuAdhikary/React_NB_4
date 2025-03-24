import React, { use, useContext, useEffect, useState } from 'react'
import { userContextdata } from '../context/UserContext'

const UseEffect = () => {

     let [count, setCount] = useState(0)
     let [sname,setSname] = useState("")

              let {e_name,age,phNo}            = useContext(userContextdata)

     let hello =()=>{
        console.log("I am hello function")
     }

   
     useEffect(()=>{
        console.log("I will execute every time")
     })


     useEffect(()=>{
        console.log("I will execute only first time")
     },[])

     useEffect(()=>{

        hello()

     },[count])


     let num = 10 

     let decrement =()=>{
        num = num - 1

        console.log(num)
     }
  return (
    <div>

        <h1 style={{textAlign:"center"}}> useeffect example</h1>

        <h2> {count}</h2>

        <button onClick={()=>setCount(count+1)}>increment</button>


         <input type="text" onChange={(e)=> setSname(e.target.value)} value={sname}/>
        
        <h2> {sname} </h2>

        <h3> {num}</h3>


        <button onClick={decrement}> decrement</button>

        <h3> {age}</h3>

    </div>
  )
}

export default UseEffect