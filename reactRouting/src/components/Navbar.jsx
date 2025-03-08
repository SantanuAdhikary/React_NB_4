import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <nav>
        <ul>
            <NavLink to="/"> <li>Home</li> </NavLink>
            <NavLink to="/about"> <li>About</li> </NavLink>
            <NavLink to="/contact"> <li>contact</li> </NavLink>
        </ul>
    </nav>
    
    </>
  )
}

export default Navbar