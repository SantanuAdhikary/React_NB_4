import React from 'react'
import { useMyHook } from '../context/UserContext'

const Conditions = () => {

      let {e_name,age} =     useMyHook()
  return (
    <div>
        <h1> I am Conditions component</h1>

        <h2> ename is : {e_name}</h2>
    </div>
  )
}

export default Conditions