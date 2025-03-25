import React from 'react'
import {NavLink} from "react-router-dom"

const Loginright = () => {
  return (

    <div div className='right'>
    <div className='inner'>

        <form action="">

            <input type="text" placeholder='Email Address or Phone Number' />
            <input type="text" placeholder='Password' />
            <button>Login</button>
            <p> forgotten password?</p>
            <hr />
            <button> <NavLink to="/signup"> Create New Account</NavLink></button>
        </form>
    </div>

    <p>Create a Page for a celebrity, brand or business.</p>
    </div>
  )
}

export default Loginright