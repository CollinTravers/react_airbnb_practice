import React from "react"
import logo from '../images/photo-grid.png'
import './hero.css'

function Hero() {
  return(
    <section className="hero--container">
      <img src={logo} className="hero--photo"/>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>  
    </section>
  )
}

export default Hero;