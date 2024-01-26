import React from 'react'
import './components.css'
import OpenHours from './OpenHours'

const Contact = () => {
  return (
    <div className="contactBox">
      <div className="sectionTitle">
        <h5>CONTACT US</h5>
      </div>
      <div className='portalLink'>
        <a 
        href="https://acumatica.futurekenya.com/SelfServicePortal"
        target="_blank"
        >
          Sign up now on our self service portal
        </a>
      </div>
      <OpenHours />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127646.14677221661!2d36.802386!3d-1.200823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d3fd9ffed9f%3A0x514570cd2a90bacc!2sFuture%20Kenya%20LTD!5e0!3m2!1sen!2sus!4v1706207627637!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        width="100%"
        height="500"
        style={{ border: "0" }}
      ></iframe>

      
  {/* <div class="banner">

  <div class="networks">
    <div id="facebook" class="networks-outer">
      <a href="https://facebook.com">
        <i class="fa fa-facebook"></i>
      </a>
    </div>
  </div>

  <div class="networks">
    <div id="instagram" class="networks-outer">
      <a href="#">
        <i class="fa fa-instagram"></i>
      </a>
    </div>
  </div>

  <div class="networks">
    <div id="youtube" class="networks-outer">
      <a href="#">
        <i class="fa fa-youtube-play"></i>
      </a>
    </div>
  </div>


  <div class="networks">
    <div id="twitter" class="networks-outer">
      <a href="#">
        <i class="fa fa-twitter"></i>
      </a>
    </div>
  </div>


  <div class="networks">
    <div id="google-plus" class="networks-outer">
      <a href="">
        <i class="fa fa-google-plus-official"></i>
      </a>
    </div>
  </div>


  <div class="networks">
    <div id="pinterest" class="networks-outer">
      <a href="">
        <i class="fa fa-pinterest"></i>
      </a>
    </div>
  </div>

  <div class="networks">
    <div id="tumblr" class="networks-outer">
      <a href="">
        <i class="fa fa-tumblr"></i>
      </a>
    </div>
  </div>

  <div class="networks">
    <div id="linkedin" class="networks-outer">
      <a href="">
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
  </div>

  <div class="networks">
    <div id="rss" class="networks-outer">
      <a href="">
        <i class="fa fa-rss"></i>
      </a>
    </div>
  </div>

  <div class="networks">
    <div id="deviantart" class="networks-outer">
      <a href="">
        <i class="fa fa-deviantart"></i>
      </a>
    </div>
  </div> 

  <div class="networks">
    <div id="vimeo" class="networks-outer">
      <a href="">
        <i class="fa fa-vimeo"></i>
      </a>
    </div>
  </div>

</div> */}
    </div>
  )
}

export default Contact