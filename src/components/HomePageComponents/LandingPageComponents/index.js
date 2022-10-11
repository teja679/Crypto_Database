import React from 'react'
import './styles.css'
import { motion } from 'framer-motion'
import { RWebShare } from 'react-web-share'
import iPhone from './../../assets/iphone.png'
import gradient from './../../assets/gradient.png'
import Button from '../../Button'
import { color } from '@mui/system'
import OutlineButton from '../../OutlineButton'

const LandingPageComponent = () => {
  return (
    <div className='flex-wrapper'>
      <div className='heading-container'>
        <motion.h1 className='big-heading' 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: "spring", duration: 1 }}
        >
          <span className='stroke'>Track Crypto </span>
          <br />
          <span className='header-blue'>Real Time.</span>
        </motion.h1>
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='buttons'>
          <a href='/dashboard'>
            <Button text={'Dashboard'} />
          </a>
          <RWebShare data={{
            text: 'Chacekout my crypto tracker made using React!',
            url: "https://my-cryptotracker.com", title: "crypto Tracker"
          }}>
            <OutlineButton text={'Share'} />
          </RWebShare>
        </div>
      </div>
      <div className='img-box'>
        <img className='gradient' src={gradient} alt='gradient' />
        <motion.img
          src={iPhone} className='phone'
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