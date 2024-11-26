import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <h1 className="footer-logo">Kinara</h1>
            <p>Our hotel offers a unique experience with carefully curated decor and sustainable choices. From warm Edison lighting to locally sourced furnishings, each space reflects a commitment to comfort and style. Our rooms and common areas feature thoughtfully selected details, creating an inviting atmosphere that balances nostalgic charm with contemporary design. Every aspect of your stay is crafted to provide a memorable, authentic experience</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9606310193</li>
                <li>shashankshriyan@gmail.com</li>
            </ul>
        </div>
        
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
