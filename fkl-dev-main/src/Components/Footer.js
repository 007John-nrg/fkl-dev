import React from 'react'
import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:your.email@example.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };


  return (
    <div className='FooterBox'>
      <div className="FooterTitle">
        <h5>CONNECT WITH US</h5>
      </div>
      <div className='SocialLink'>
        <ul>
          <li>
            <a href="https://www.linkedin.com/company/future-kenya/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faXTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} onClick={handleEmailClick}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} onClick={handlePhoneClick} />
          </li>
        </ul>
      </div>
      <div className='copyright'>
        <p>COPYRIGHT &copy; {new Date().getFullYear()} FUTURE KENYA - ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer