import React, { useRef } from 'react'
import { useMyhook } from './UseContext'

const UseRef = () => {

       let {sname}    =  useMyhook()
     
    let btn = useRef("")

    let changeColor =()=>{
        console.log("btn clicked")

        // console.log(btn.current)

        btn.current.style.backgroundColor = "orangered"
    }
  return (
    <>


      <button ref={btn} > change my color</button>

      <h2> student name is : {sname}</h2>

      <button onClick={changeColor}> click</button>

    </>
  )
}

export default UseRef