import React from 'react'
import Carousel from '../images/carousel.svg'
import teamPicture from "../images/teamPicture.svg";
import '../App.css'
import { useState } from 'react';
function SuccessStories() {
    
  return (
    <div className="container">
      <div>
        <span className="headingbluee">SUCCESS STORIES</span>
        <img src={Carousel} className="img-carousel" />
      </div>
      <div className="divteam">
        <div className="hrdiv">
          <hr />
          <span className='team-intro'>Meet The Team</span>
          <hr />
        </div>
        <div>
          <img src={teamPicture} className="teamPicture" />
        </div>
      </div>
    </div>
  );
  
  
}

export default SuccessStories
