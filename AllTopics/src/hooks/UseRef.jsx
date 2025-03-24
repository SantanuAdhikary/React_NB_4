import React, { useContext, useRef, useState } from 'react'
import { userContextdata } from '../context/UserContext'

const UseRef = () => {

    let [sname,setSname] = useState("")

              let {e_name}   =     useContext(userContextdata)

     let btnRef = useRef("")

     let changeColor =()=>{
        // console.log(btnRef)
        btnRef.current.style.backgroundColor ="red"

     }


     let num1 = useRef(0)
   
     let decrement =()=>{
        console.log(num1.current)
        num1.current = num1.current -1;
     }

  return (
    <>

    <h1> useref example</h1>


    <input type="text" onChange={(e)=> setSname(e.target.value)} value={sname}/>
        
        <h2> {sname} </h2>

        <h3> ename is : {e_name}</h3>
    

     <button onClick={changeColor} ref={btnRef}> change color</button>

     <h2> {num1.current}</h2>

     <button onClick={decrement}>decrement</button>
      

    </>
  )
}

export default UseRef