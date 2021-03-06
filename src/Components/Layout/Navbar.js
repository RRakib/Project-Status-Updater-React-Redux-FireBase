import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"



const Navbar = () => {
  return (
    <div>
      <nav>
          <div className="navBar">
            <Link to="/" className="logo">ProjectStatusUpdater</Link>
            {/* <SignedInLinks /> */}
            <SignedOutLinks />
          </div>
      </nav>
    </div>
  )
}
export default Navbar