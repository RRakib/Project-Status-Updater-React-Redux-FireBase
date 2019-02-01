import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom"
const SignedOutLinks = () => {
  return (
    <div className="signedIn">
      <NavLink className="signedInNav" to="/signup">SignUp</NavLink>
      <NavLink className="signedInNav" to="/signin">SignIn</NavLink>
    </div>
  )
}
export default SignedOutLinks