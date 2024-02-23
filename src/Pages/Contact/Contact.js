import React, {useState, useEffect} from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import contact from '../../assets/cont.png'
import Footer from '../../Components/Footer';

const Contact = () => {

  const { state } = useLocation();
  console.log(state)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    position: '',
    mobileNumber: '',
    companyName: '',
    companySize: '',
    industry: '',
    enquiringAbout: state && state.product ? state.product : '',
    acumaticaEdition: '',
    palladiumEdition: '',
    country: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleEmailClick = () => {
    window.location.href = 'mailto:your.email@example.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div style={{marginLeft: '20%', width: '80%'}}>
    <div className='contactContainer'>
      <div className='form'>
        <div className='formLogo'>
          <img src={contact} alt="Contact logo" />
        </div>
        <div style={{}}>
        <div className='formContact'>
          <form>
            <div className='firstRow'>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                placeholder='First Name'
                onChange={handleInputChange}
              />
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                placeholder='Last Name'
                onChange={handleInputChange}
              />
            </div>
            <div className='firstRow'>
              <input
                type='text'
                name='workEmail'
                value={formData.workEmail}
                placeholder='Work Email'
                onChange={handleInputChange}
              />
              <input
                type='text'
                name='position'
                value={formData.position}
                placeholder='Position'
                onChange={handleInputChange}
              />
            </div>
            <div className='firstRow'>
              <input 
                type='text'
                name='mobileNumber'
                value={formData.mobileNumber}
                placeholder='Mobile Number'
                onChange={handleInputChange}
              />
              <input
                type='text'
                name='companyName'
                value={formData.companyName}
                placeholder='Company Name'
                onChange={handleInputChange}
              />
            </div>
            <div className='firstRow'>
            <select
              name='companySize'
              value={formData.companySize}
              onChange={handleInputChange}
            >
              <option value="">Select Company Size</option>
              <option value="0-15">0-15</option>
              <option value="15-30">15-30</option>
              <option value="30-60">30-60</option>
              <option value="60-100">60-100</option>
              <option value="100-150">100-150</option>
              <option value="150-200">150-200</option>
              <option value="+200">+200</option>
            </select>
              <input
                type='text'
                name='industry'
                value={formData.industry}
                placeholder='Industry'
                onChange={handleInputChange}
              />
            </div>
            <div className='firstRow'>
            <select
              name='enquiringAbout'
              value={formData.enquiringAbout}
              onChange={handleInputChange}
            >
              <option value="">I am enquiring about</option>
              <option value="Acumatica">Acumatica</option>
              <option value="Palladium">Palladium</option>
              <option value="Payspace">Payspace</option>
              <option value="Recommedation">Our Recommedation</option>
              <option value="Consulting">Consulting</option>
              <option value="Training">Training</option>
              <option value="Support">Support</option>
            </select>
            {formData.enquiringAbout === 'Acumatica' && (
              <select
                name='acumaticaEdition'
                value={formData.acumaticaEdition}
                onChange={handleInputChange}
              >
                <option value="">Select Acumatica edition</option>
                <option value="General">General</option>
                <option value="Distribution">Distribution</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Construction">Construction</option>
              </select>
             )}
              {formData.enquiringAbout === 'Palladium' && (
              <select
                name='palladiumEdition'
                value={formData.palladiumEdition}
                onChange={handleInputChange}
              >
                <option value="">Select Palladium edition</option>
                <option value="Individual">Individual</option>
                <option value="Business">Business</option>
                <option value="Enterprise">Enterprise</option>
              </select>
             )}
              <input
                type='text'
                name='country'
                value={formData.country}
                placeholder='Country'
                onChange={handleInputChange}
              />
            </div>
            <textarea
              name='message'
              value={formData.message}
              placeholder="Enter your message here..."
              onChange={handleInputChange}
              rows={5}
              style={{ resize: 'vertical' }}
            ></textarea>
            <button style={{width: '30%', padding: '.5rem', cursor: 'pointer'}} type='submit'>Submit</button>
          </form>
        </div>
        </div>
      </div>

      <div className='info'>
      
        <h1 style={{ fontSize: '3rem', marginLeft: '2rem', marginBottom: '0'}}>Future Kenya</h1>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '-1rem'}}>
        <div className='mail' style={{width: '80%'}}>
          <div className="mailTitle">
            <h5>Call us</h5>
          </div>
          <div style={{paddingLeft: '.3rem', display: 'flex', gap: '.5rem', flexDirection: 'column', marginTop: '-1rem'}}>
            <div style={{paddingLeft: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', border: '1px solid', borderRadius: '.6rem', width: '50%', padding: '0'}}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
              <p>+254 (0)720 130 172 </p>
            </div>
            <div style={{ paddingLeft: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', border: '1px solid', borderRadius: '.6rem', width: '50%', padding: '0'}}>
              <FontAwesomeIcon icon={faPhone} />
              <p>+254 (0)20 236 1100/11/22</p>
            </div>
          </div>
        </div>
        </div>
        
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '-1.5rem'}}>
        <div className='mail' style={{width: '80%'}}>
          <div className="mailTitle">
            <h5>Drop us a mail</h5>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', marginTop: '-.7rem'}}>
            <div style={{marginTop: '-1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p>General</p>
              <p>info@futurekenya.com</p>
            </div>
            <div style={{marginTop: '-1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p>Sales</p>
              <p>sales@futurekenya.com</p>
            </div>
            <div style={{marginTop: '-1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p>Support</p>
              <p>support@futurekenya.com</p>
            </div>
            <div style={{marginTop: '-1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p>HR</p>
              <p>hr@futurekenya.com</p>
            </div>
          </div>
        </div>
        </div>

        {/* <div>
          <div style={{textAlign: 'center'}} className="mailTitle">
            <h5>Connect with us</h5>
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
        </div> */}

        <div>
          <div style={{textAlign: 'center'}} className="mailTitle">
            <h5>Find us</h5>
          </div>
          <div>
            {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127646.14677221661!2d36.802386!3d-1.200823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d3fd9ffed9f%3A0x514570cd2a90bacc!2sFuture%20Kenya%20LTD!5e0!3m2!1sen!2sus!4v1706207627637!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="150"
            style={{ border: "0" }}
            ></iframe> */}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;


