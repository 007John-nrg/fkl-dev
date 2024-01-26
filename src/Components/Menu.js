import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/fkl1.png';
import './components.css';

const Menu = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div className="menuContainer">
      <div className="menuBox">
        <div className="logoContainer">
          <img src={logo} alt="logo image" className="menuLogo" />
        </div>
        <ul>
          <li>
            <Link to="/" className={isActive('/') ? 'activeLink' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AcumaticaErp" className={isActive('/AcumaticaErp') ? 'activeLink' : ''}>
              Acumatica & ERP
            </Link>
          </li>
          <li>
            <Link to="/AcumaticaErp" className={isActive('/AcumaticaErp') ? 'activeLink' : ''}>
              Acumatica & ERP
            </Link>
            <ul>
              <li>
                <Link to="/sublink1">Sublink 1</Link>
              </li>
              <li>
                <Link to="/sublink2">Sublink 2</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/Service" className={isActive('/Service') ? 'activeLink' : ''}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/Pricing" className={isActive('/Pricing') ? 'activeLink' : ''}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/Payspace" className={isActive('/Payspace') ? 'activeLink' : ''}>
              HR & Payroll
            </Link>
          </li>
          <li>
            <Link to="/Career" className={isActive('/Career') ? 'activeLink' : ''}>
              Work at Future Kenya
            </Link>
          </li>
          <li>
            <Link to="/Contact" className={isActive('/Contact') ? 'activeLink' : ''}>
              Contact Us
            </Link>
          </li>
          <li>
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
