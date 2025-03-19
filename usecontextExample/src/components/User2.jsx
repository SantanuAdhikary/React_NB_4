import React from 'react'
import { useCustom } from '../context/UserContext'

const User2 = () => {

    let {type}=  useCustom()
  return (
    <div>

        <h1> I am user2 </h1>

        <h2> my sim type is : {type}</h2>

    </div>
  )
}

export default User2