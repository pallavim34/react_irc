import React from 'react'
import './Hero.css'
import handicon from '../Assests/handicon.png'
import girl from '../Assests/girl.png'
import arrow from '../Assests/arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
    <h2>NEW ARRIVALS ONLY</h2>
    <div>
    <div className="hand-hand-icon">
    <p>new</p>
    <img src={handicon} alt="" />
    </div>
    <p>collections</p>
    <p>for everyone</p>
    </div>
    <div className="hero-latest-btn">
      <div>Latest Collection</div>
      <img src={arrow} alt="" />
    </div>
    </div>
    <div className="hero-roght">
      <img src={girl} alt="" />
    </div>
    </div>
  )
}
export default Hero
