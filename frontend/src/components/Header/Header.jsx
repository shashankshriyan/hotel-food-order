import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <video className='header-video' autoPlay loop muted>
        <source src='/video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="header-contents">
        <h2>Order your <br /> favorite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.</p>
      </div>
    </div>
  );
}

export default Header;
