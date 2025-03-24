import React from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/props"><li> Props </li></NavLink> 
            <NavLink to="/conditions"><li> Conditions </li></NavLink> 
            <NavLink to="/list"><li> List and Key </li></NavLink> 
            <NavLink to=""><li> Form Handling </li></NavLink> 
            <NavLink to=""><li> UseState </li></NavLink> 
            <NavLink to="/useeffect"><li> UseEffect </li></NavLink> 
            <NavLink to="/useref"><li> UseRef </li></NavLink> 
            <NavLink to=""><li> UseContext </li></NavLink> 
           
        </nav>
    </div>
  )
}

export default Navbar