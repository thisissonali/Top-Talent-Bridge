import React from 'react'
import '../App.css'
import logo from "../images/logo.svg";
import { LiaTelegram } from "react-icons/lia";
function Footer() {
  return (
    <div className="foo">
      <div className="footer-logo-div">
        <div className="footer-style">
          <img src={logo} alt="Your SVG" className="logo-img" />
        </div>
        <div className="footer-style footer-sty">
          Copyright © 2023 TOP TALENT BRIDGE LLP
        </div>
        <div className="footer-style">All rights reserved</div>
      </div>
      <div className="connect">
        <div className="connect-1">Connect with us!</div>
        <div>
          <buton className="btn">
            support@toptalentbridge.in <LiaTelegram className='telegram'/>  
          </buton>
        </div>
      </div>
    </div>
  );
}
export default Footer
