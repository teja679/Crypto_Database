import React from 'react'
import './styles.css'

const LandingPageComponent = () => {
  return (
    <div className='main-page'>
      <div className='title'>
        <h2>Track Crypto <br />
          <span>Real Time.</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='buttons'>
          <button className='btn btn1'>Dashboard</button>
          <button className='btn btn2'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPageComponent