
import React from 'react'
import { useMyhook } from './UseContext'
import { NavLink, useNavigate } from 'react-router-dom'

const UseState = () => {

     let {increment, decrement, count} = useMyhook()

     let navigate = useNavigate()

     let go =()=>{
        navigate('/useref')
     }
  return (
    <>

     <h2> I am useState component</h2>

     <h3> {count}</h3>

     <button onClick={increment}>increment</button>

     <p> <NavLink to="/">go to home </NavLink> </p>

     <button onClick={go}> go to useref</button>

    </>
  )
}

export default UseState




