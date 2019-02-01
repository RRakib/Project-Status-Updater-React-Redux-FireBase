import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom"
const SignedOutLinks = () => {
  return (
    <div className="signedIn">
      <NavLink className="signedInNav" to="/">SignUp</NavLink>
      <NavLink className="signedInNav" to="/">LogIn</NavLink>
    </div>
  )
}
export default SignedOutLinks