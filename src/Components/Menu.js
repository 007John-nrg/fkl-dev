import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/fkl1.png';
import './components.css';

const Menu = () => {
  const location = useLocation();
  const [activeMainLink, setActiveMainLink] = useState(null);

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const handleMainLinkClick = (linkName) => {
    setActiveMainLink(activeMainLink === linkName ? null : linkName);
    console.log(linkName)
  };

  return (
    <div className="menuContainer">
      <div className="menuBox">
        <div >
          <a href="/" className="logoContainer">
            <img src={logo} alt="logo image" className="menuLogo" />
          </a>
        </div>
        <ul className='menuList'>
          <li className='ListLink'>
            <Link to="/" className={isActive('/') ? 'activeLink' : ''} onClick={() => handleMainLinkClick('')}>
              Home
            </Link>
          </li>

          <li className='ListLink'>
            <Link to="/Acumatica" className={isActive('/AcumaticaErp') ? 'activeLink' : ''} onClick={() => handleMainLinkClick('AcumaticaErp')}>
              Acumatica ERP
            </Link>
          </li>

          <li className='ListLink'>
            <Link to="/Palladium" className={isActive('/Palladium') ? 'activeLink' : ''} onClick={() => handleMainLinkClick('AcumaticaErp')}>
              Palladium ERP
            </Link>
          </li>

          <li className='ListLink'>
            <Link to="/Payspace" className={isActive('/Payspace') ? 'activeLink' : ''} onClick={() => handleMainLinkClick('Payspace')}>
              Payspace, HR & Payroll
            </Link>
          </li>

          <li className='ListLink'>
            <Link to="/Service" className={isActive('/Service') ? 'activeLink' : ''} onClick={() => handleMainLinkClick('Service')}>
              Services
            </Link>
            <ul className={`sublink ${activeMainLink === 'Service' ? '' : 'visible'}`}>
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
            <Link to="/Career" className={isActive('/Career') ? 'activeLink' : ''} onClick={() => handleMainLinkClick('Career')}>
              Work at Future Kenya
            </Link>
            {/* <ul className={`sublink ${activeMainLink === 'Career' ? '' : 'visible'}`}>
              <li className='sublinkList'>
                <Link to="/Career">Jobs</Link>
              </li>
              <li className='sublinkList'>
                <Link to="/Apply">Apply Now</Link>
              </li>
            </ul> */}
          </li>

          <li className='ListLink'>
            <Link to="/Contact" className={isActive('/Contact') ? 'activeLink' : ''} onClick={() => handleMainLinkClick('Contact')}>
              Contact Us
            </Link>
          </li>

          <li className='ListLink' style={{fontWeight: 'bold'}}>
            <a
              href="https://acumatica.futurekenya.com/SelfServicePortal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self Service Portal
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
