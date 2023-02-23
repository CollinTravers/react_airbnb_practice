import React from "react"
import './header.css'
import logo from "../images/airbnb-logo.png"

function Header () {
  return (
    <nav>
      <img src={logo} className="nav--logo"/>
    </nav>
  )
}

export default Header;