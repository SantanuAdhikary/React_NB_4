import React from 'react'
import {NavLink} from "react-router-dom"

const LoginRight = () => {
  return (
    <div className="right">

    <div className="login">

        <form action="">
            <input type="text" placeholder="Email address or Phone Number" />
            <input type="text" placeholder="password" />
            <button>login</button>
        </form>
        <p>forgotten password?</p>
        <hr />
        <button className="btn">
           <NavLink to="/signup"> Create new account </NavLink> 
            </button>
    </div>

    <p> <span>Create a Page </span>for a celebrity, brand or business.</p>
 </div>
  )
}

export default LoginRight