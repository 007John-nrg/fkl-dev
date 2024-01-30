import React from 'react'
import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
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
        </ul>
      </div>
      <div className='copyright'>
        <p>COPYRIGHT &copy; {new Date().getFullYear()} FUTURE KENYA - ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer