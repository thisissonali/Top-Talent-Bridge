import React from 'react'
import logo from '../images/logo.svg'
import '../App.css'
function Header() {
  return (
    <div className='logo'>
      <img src={logo} alt="Your SVG" className='logo-img'/>
    </div>
  );
}

export default Header
