import React from 'react'

import {NavLink} from "react-router-dom"

const Signupright = () => {
  return (
    <div div className='right'>
    <div className='inner'>

        <form action="">

            <input type="text" placeholder='Enter Name' />
            <input type="text" placeholder='Email Address ' />
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='phone number' />
           
            <p> <NavLink to="/">already have an account ?</NavLink> </p>
            <hr />
            <button>signup</button>
        </form>
    </div>


    </div>
  )
}

export default Signupright