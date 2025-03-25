import React from 'react'
import {NavLink} from "react-router-dom"

const SignupRight = () => {
  return (
    <div className="right">

    <div className="login">

        <form action="">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Enter your Phone Number" />
            <input type="text" placeholder="password" />

        </form>
        <p> <NavLink to="/"> already have an account?</NavLink></p>
        <hr />
        <button className="btn">Signup</button>
    </div>

 
    </div>
  )
}

export default SignupRight