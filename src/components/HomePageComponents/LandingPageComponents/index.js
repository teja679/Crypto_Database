import React from 'react'
import './styles.css'
import { motion } from 'framer-motion'
import { RWebShare } from 'react-web-share'
import iPhone from './../../assets/iphone.png'
import gradient from './../../assets/gradient.png'

const LandingPageComponent = () => {
  return (
    <div className='main-page'>
      <div className='title'>
        <motion.h1 className='big-heading' initial={{opacity: 0, y: 50}}
        animate={{ opacity: 1, y:0}} transition={{ type: "spring", duration: 1}}>
          <span className='stroke'>Track Crypto </span>
          <br />
          <span className='header-blue'>Real Time.</span>
        </motion.h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='buttons'>
          <button className='btn btn1'>Dashboard</button>
          <RWebShare data={{ text: 'Chacekout my crypto tracker made using React!',
            url: "https://my-cryptotracker.com", title: "crypto Tracker"}}>
          <button className='btn btn2'>Share</button>
          </RWebShare>
        </div>
      </div>
      <div className='img-box'>
        <img className='gradient' src={gradient} alt='radient' />
        <motion.img
          src={iPhone.png} className='phone'
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: 'smooth',
            repeatType: 'mirror',
            duration: '2',
            repeat: 'infinity'
          }}
        />
      </div>
    </div>
  )
}

export default LandingPageComponent