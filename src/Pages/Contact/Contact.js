import React, {useState, useEffect} from 'react'
import './Contact.css'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/contactUs.png'
import { useLocation } from 'react-router-dom';
import contact from '../../assets/cont.png'
import Footer from '../../Components/Footer';
import axios from 'axios';
import { Navbar } from '../../Components/Navbar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Contact = () => {

  const [countryCodes, setCountryCodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false); // State to manage success message visibility
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenError = () => {
    setOpenError(true);
  };

  const handleCloseError = () => {
    setOpenError(false);
  };
  const success = () => {
    setSuccessMessageVisible(true);
  }

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

    // Function to get the value for the industry
    const getIndustryValue = (industry) => {
      // Define mappings for industry values
      const industryMappings = {
        'Construction': 'CONSTRUCT',
        'Distribution': 'DISTRIBUTE',
        'Manufacturing': 'MANUFACTUR',
        'Non Profit': 'NONPROFIT',
        'Other': 'OTHER',
        'Retail': 'RETAIL'
      };
      // Return the mapped value for the industry, or the industry itself if not found in mappings
      return industryMappings[industry] || industry;
    };

    const getValue = () => {
      if (formData.enquiringAbout === 'Acumatica') {
        return formData.enquiringAbout + ', ' + formData.acumaticaEdition;
      } else if (formData.enquiringAbout === 'Palladium') {
        return formData.enquiringAbout + ', ' + formData.palladiumEdition;
      } else {
        return formData.enquiringAbout;
      }
    };
  
    const getDescription = () => {
      if (formData.enquiringAbout === 'Acumatica') {
        return formData.enquiringAbout + ', ' + formData.acumaticaEdition;
      } else if (formData.enquiringAbout === 'Palladium') {
        return formData.enquiringAbout + ', ' + formData.palladiumEdition;
      } else {
        return formData.enquiringAbout;
      }
    };

  // Function to generate token
  const generateToken = async () => {
    try {
      const response = await axios.post('https://api-j8jt.onrender.com/post-data', {
        url: 'https://acumatica.futurekenya.com/AcumaticaERP/identity/connect/token',
        data: {
          grant_type: 'password',
          username: 'development',
          password: 'D3v3l0p@Fkl',
          scope: 'api',
          client_id: '87D73C8E-BFC0-D9EF-5E2A-DF9341A0D3D0@Future Kenya',
          client_secret: 'hanBCN6rDihEEm47B0ZsFg'
        }
      });
  
      const accessToken = response.data.access_token;
      console.log(accessToken);
      return accessToken;
    } catch (error) {
      console.error('Error generating token:', error);
      return null;
    }
  };

  const sendDataWithToken = async () => {
    try {
      const token = await generateToken();
      console.log("token", token)
      if (!token) return;

      const companySizeValue = formData.companySize === '+200' ? '200' : formData.companySize; // Adjust value for '+200'

      // Update the dataToSend object to use values from the formData state
      const dataToSend = {
      FirstName: { value: formData.firstName },
      LastName: { value: formData.lastName },
      Email: { value: formData.workEmail },
      JobTitle: { value: formData.position },
      Phone2Type: { value: 'cell' }, // Assuming it's a fixed value
      Phone2: { value: formData.mobileNumber },
      CompanyName: { value: formData.companyName },
      Address: {
        Country: { value: formData.countryCode } // Assuming it's countryCode
      },
      Attributes: [
        {
          AttributeDescription: { value: "Number of Employees" },
          AttributeID: { value: "LEADEMPLOY" },
          Required: {},
          Value: { value: companySizeValue },
          ValueDescription: { value: formData.companySize }
        },
       {
           AttributeDescription: { value: "Industry" },
           AttributeID: { value: "LEADINDUST" },
           Required: {},
           Value: { value: getIndustryValue(formData.industry) },
           ValueDescription: { value: formData.industry }
       },
          {
            AttributeDescription: { value: "Purpose of Call" },
            AttributeID: { value: "LEADPURPOS" },
            Required: {},
            Value: { value: getValue() },
            ValueDescription: { value: getDescription() }
          }
      ],
      Country: { value: formData.countryCode }, // Assuming it's countryCode
      Description: { value: formData.message }
      };

      const response = await axios.put('https://api-j8jt.onrender.com/create-lead', {
        url: 'https://acumatica.futurekenya.com/AcumaticaERP/entity/Default/22.200.001/Lead?$select=FirstName,LastName,Email,JobTitle,Phone2Type,CompanyName,Description,Phone2, Address/Country, Attributes/AttributeID, Attributes/Value&$expand=Address, Attributes', // Replace with actual endpoint URL
        data: dataToSend,
        token: token
      });
  
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

    const handleFormSubmit = async (e) => {

      setIsLoading(true)
      e.preventDefault();
      setButtonDisabled(true);
    
      try {
        await sendDataWithToken();
        // Data sent successfully, show success alert and reset form data
        setSuccessMessageVisible(true);
        setFormData({
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
        //setTimeout(() => setIsLoading(false), 1000)
        setIsLoading(false)
        setOpen(true); // Show success alert dialog
      } catch (error) {
        // Error sending data, show warning alert
        setOpenError(true);
      }
      
      // setTimeout(() => {
      //   setIsLoading(false)
      // }, 4000)
    }

  return (
    <div>
      <Navbar />
    <div className='contactContainerBox'>
    <div className='contactContainer'>
      <div className='form'>
        <div className='formLogo'>
          <img src={contact} alt="Contact logo" />
        </div>
        <div style={{}}>
        <div className='formContact'>
          <form onSubmit={handleFormSubmit}>
            <div className='firstRow'>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                placeholder='First Name'
                onChange={handleInputChange}
                required
              />
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                placeholder='Last Name'
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='firstRow'>
              <input
                type='text'
                name='workEmail'
                value={formData.workEmail}
                placeholder='Work Email'
                onChange={handleInputChange}
                required
              />
              <input
                type='text'
                name='position'
                value={formData.position}
                placeholder='Position'
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='firstRow'>
              <input 
                type='text'
                name='mobileNumber'
                value={formData.mobileNumber}
                placeholder='Mobile Number'
                onChange={handleInputChange}
                required
              />
              <input
                type='text'
                name='companyName'
                value={formData.companyName}
                placeholder='Company Name'
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='firstRow'>
            <select
              name='companySize'
              value={formData.companySize}
              onChange={handleInputChange}
              required
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
              required
            >
              <option value="" disabled selected hidden>Industry</option>
              <option value="Construction">Construction</option>
              <option value="Distribution">Distribution</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Non Profit">Non Profit</option>
              <option value="Retail">Retail</option>
              <option value="Other">Other</option>
            </select>
            </div>
            <div className='firstRow'>
            <select
              name='enquiringAbout'
              value={formData.enquiringAbout}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled selected hidden>I am enquiring about</option>
              <option value="Acumatica">Acumatica</option>
              <option value="Palladium">Palladium</option>
              <option value="Payspace">Payspace</option>
              <option value="Sage">Sage Evolution</option>
              <option value="Recommedation">Our recommendation</option>
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
                <option value="General">General Edition</option>
                <option value="Distribution">Distribution Edition</option>
                <option value="Manufacturing">Manufacturing Edition</option>
                <option value="Retail">Retail Edition</option>
                <option value="Construction">Construction Edition</option>
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
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                required
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
            {/* {isLoading ? (
              <div>Sending data...</div>
            ) : (
              <button className='btnsubmit' style={{width: '30%', padding: '.5rem', cursor: 'pointer'}} type='submit'>Submit</button>
            )} */}
            {/* <button className='btnsubmit' style={{width: '30%', padding: '.5rem', cursor: 'pointer'}} type='submit'>
              {!isLoading ? 'Submit' : 'Sending data...'}
            </button> */}
            <button disabled={buttonDisabled}  className='btnsubmit' style={{ width: '30%', padding: '.5rem', cursor: 'pointer' }} type='submit' disabled={isLoading}>
              {!isLoading ? 'Submit' : 'Sending data...'}
            </button>
          </form>
        </div>
        </div>
      </div>

      <div className='info'>
        <div className='strip'>
          <img src={image} alt="" />
        </div>
      </div>
      </div>
      <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <Stack sx={{ width: '100%' }}>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                We have received your enquiry and we will be in touch shortly
              </Alert>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
        {/* Error alert dialog */}
        <Dialog
          open={openError}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseError}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="warning">An Error occurred while sending the Enquiry. Please try again.</Alert>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseError}>Ok</Button>
          </DialogActions>
        </Dialog>
      <Footer />
    </div>
    </div>
  )
}

export default Contact;


