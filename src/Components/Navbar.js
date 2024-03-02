import React, {useState} from 'react';
import './components.css'
import { Link } from 'react-router-dom';
import logo from '../assets/fkl1.png';
import { HiMiniBars3 } from "react-icons/hi2";

export const Navbar = () => {

const [showPopup, setShowPopup] = useState(false);

const handleBarsClick = () => {
    setShowPopup(true);
};

const handleCloseClick = () => {
    setShowPopup(false);
};

  return (
    <div className="navbar">
        <div onClick={handleBarsClick} className='bars'>
            <HiMiniBars3 />
        </div>
        {showPopup && (
        <div className='popup-overlay'>
            <div className='popup'>
                <ul className='menupop'>
                <li className='ListLink'>
                    <Link to="/" className='link'>
                    Home
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Acumatica" className='link'>
                        Acumatica ERP
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Palladium" className='link'>
                        Palladium ERP
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Payspace" className='link'>
                        Payspace, HR & Payroll
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Service" className='link'>
                    Services
                    </Link>
                    <ul>
                        <li className='sublinkList'>
                            <Link to="/Consulting">Consulting</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Training">Training</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Support">Support</Link>
                        </li>
                    </ul>
                </li>
                <li className='ListLink'>
                    <Link to="/Career" className='link'>
                    Work at Future Kenya
                    </Link>
                    {/* <ul>
                        <li className='sublinkList'>
                            <Link to="/Career">Jobs</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Apply">Apply Now</Link>
                        </li>
                    </ul> */}
                </li>
                <li className='ListLink'>
                    <Link to="/Contact" className='link'>
                        Contact Us
                    </Link>
                </li>
                <li className='ListLink' style={{fontWeight: 'bold'}}>
                    <a
                    className='link'
                    href="https://acumatica.futurekenya.com/SelfServicePortal"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Self Service Portal
                    </a>
                </li>
                </ul>
                <div onClick={handleCloseClick} className='xbtn'>X</div>
            </div>
            
        </div>
        )}
        <div className='navbarLogo'>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}
