import React, {useState, useEffect} from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/copy.png'
import { useLocation } from 'react-router-dom';
import contact from '../../assets/cont.png'
import Footer from '../../Components/Footer';
import axios from 'axios';

const Contact = () => {

  const [countryCodes, setCountryCodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

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
    countryCode: '',
    message: ''
  });

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const codes = response.data.map(country => ({
          name: country.name.common,
          code: country.cca2
        }));
        setCountryCodes(codes);
      } catch (error) {
        console.error('Error fetching country codes:', error);
      }
    };

    fetchCountryCodes();
  }, []);

  const handleInput= (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

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

  // Function to generate token
  const generateToken = async () => {
    try {
      const response = await axios.post('http://localhost/AcumaticaSelf1/identity/connect/token', {
        grant_type: 'password',
        username: 'Admin',
        password: 'Future123',
        scope: 'api',
        client_id: '7C731575-B89F-1AA7-5AC3-A50BFA60E210@Company',
        client_secret: 'JUVls27LYkWxUlswiBbr2g'
      });

      const accessToken = response.data.access_token;
      console.log(accessToken)
      return accessToken;
    } catch (error) {
      console.error('Error generating token:', error);
      return null;
    }
  };

// Function to create lead
const createLead = async (accessToken) => {
  try {
    const leadData = {
      FirstName: { value: 'test1' },
      LastName: { value: 'test1' },
      Email: { value: 'test@test.com' },
      JobTitle: { value: 'CEO' },
      Phone2Type: { value: 'cell' },
      Phone2: { value: '0722222200' },
      CompanyName: { value: 'KimFoods' },
      Address: {
        Country: { value: 'KE' }
      },
      Attributes: [
        {
          AttributeDescription: { value: 'Number of Employees' },
          AttributeID: { value: 'COMPSIZE' },
          Required: {},
          Value: { value: '100' },
          ValueDescription: { value: '1-100' }
        },
        {
          AttributeDescription: { value: 'Industry' },
          AttributeID: { value: 'INDUSTRY' },
          Required: {},
          Value: { value: 'CST' },
          ValueDescription: { value: 'Construction' }
        },
        {
          AttributeDescription: { value: 'Looking for' },
          AttributeID: { value: 'PRODREQ' },
          Required: {},
          Value: { value: 'ENC' },
          ValueDescription: { value: 'Electronics & Computers' }
        }
      ],
      Description: { value: 'i would like to inquire' }
    };

    const response = await axios.put('http://localhost/AcumaticaSelf1/entity/Default/22.200.001/Lead', leadData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Lead created:', response.data);
  } catch (error) {
    console.error('Error creating lead:', error);
  }
};

  // Usage
  const handleCreateLead = async () => {
    const accessToken = await generateToken();
    if (accessToken) {
      await createLead(accessToken);
    }
  };

  return (
    <div style={{marginLeft: '20%', width: '80%', height: '100%'}}>
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
              <option value="" disabled selected hidden>Select Company Size</option>
              <option value="0-15">0-15</option>
              <option value="15-30">15-30</option>
              <option value="30-60">30-60</option>
              <option value="60-100">60-100</option>
              <option value="100-150">100-150</option>
              <option value="150-200">150-200</option>
              <option value="+200">+200</option>
            </select>
            <select
              name='industry'
              value={formData.industry}
              onChange={handleInputChange}
            >
              <option value="" disabled selected hidden>Industry</option>
              <option value="Construction">Construction</option>
              <option value="Distribution">Distribution</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Non Profit">Non Profit</option>
              <option value="Other">Other</option>
              <option value="Retail">Retail</option>
            </select>
              {/* <input
                type='text'
                name='industry'
                value={formData.industry}
                placeholder='Industry'
                onChange={handleInputChange}
              /> */}
            </div>
            <div className='firstRow'>
            <select
              name='enquiringAbout'
              value={formData.enquiringAbout}
              onChange={handleInputChange}
            >
              <option value="" disabled selected hidden>I am enquiring about</option>
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
                <option value="" disabled selected hidden>Select Acumatica edition</option>
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
                <option value="" disabled selected hidden>Select Palladium edition</option>
                <option value="Individual">Individual</option>
                <option value="Business">Business</option>
                <option value="Enterprise">Enterprise</option>
              </select>
             )}
              {/* <input
                type='text'
                name='country'
                value={formData.country}
                placeholder='Country'
                onChange={handleInputChange}
              /> */}
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
              >
                <option value="">Select Country Code</option>
                {countryCodes.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase())).map(country => (
                  <option key={country.code} value={country.code}>{country.code} - {country.name}</option>
                ))}
              </select>
            </div>
            <textarea
              name='message'
              value={formData.message}
              placeholder="Enter your message here..."
              onChange={handleInputChange}
              rows={4}
              style={{ resize: 'vertical', borderRadius: '2rem 0 2rem 0' }}
            ></textarea>
            <button onSubmit={handleCreateLead} className='btnsubmit' style={{width: '30%', padding: '.5rem', cursor: 'pointer'}} type='submit'>Submit</button>
          </form>
        </div>
        </div>
      </div>

      <div className='info'>
        <div className='strip'>
          <img src={image} alt="" />
        </div>
        {/* <h1 style={{ fontSize: '3rem', marginBottom: '0'}}>Future Kenya</h1>
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

        <div>
          <div style={{textAlign: 'center'}} className="mailTitle">
            <h5>Find us</h5>
          </div>
        </div> */}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;


