import React from 'react'
import Drawer from './Drawer'
import './styles.css'
import Button from '../Button'

const Header = () => {
  return (
    <div className='navbar'>
      <h1 className='heading'>
        CryptoTracker
        <span style={{ color: 'var(--blue)' }}>.</span>
      </h1>
      <div className='links-flex'>
        <a href='/'>
          <p className='links'>Home</p>
        </a>
        <a href='/search'>
          <p className='links'>Search</p>
        </a>
        <a href='/about-me'>
          <p className='links'>About me</p>
        </a>
        <a href='/dashboard'>
          <p className='links'>
            <Button text="Dashboard"/>
          </p>
        </a>
      </div>
      <div className='menu-div'>
        <Drawer />
      </div>
    </div>
  )
}

export default Header