import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom"
const SignedInLinks = () => {
  return (
    <div className="signedIn">
      <NavLink className="signedInNav" to="/">Progress</NavLink>
      <NavLink className="signedInNav" to="/">LogOut</NavLink>
      <NavLink className="signedInNav user" to="/">RA</NavLink>
    </div>
  )
}
export default SignedInLinks