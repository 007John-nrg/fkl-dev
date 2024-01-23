import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/fkl1.png';
import './Menu.css';

const Menu = () => {
  const location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <div className='menuContainer'>
      <div className='menuBox'>
        <div>
          <img src={logo} alt='logo image' className='menuLogo' />
        </div>
        <ul>
          <li style={{ color: isCurrentPage('/') ? 'green' : 'gray' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ color: isCurrentPage('/AcumaticaErp') ? 'green' : 'gray' }}>
            <Link to="/AcumaticaErp">Acumatica & ERP</Link>
          </li>
          <li style={{ color: isCurrentPage('/Service') ? 'green' : 'gray' }}>
            <Link to="/Service">Services</Link>
          </li>
          <li style={{ color: isCurrentPage('/Pricing') ? 'green' : 'gray' }}>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li style={{ color: isCurrentPage('/Payspace') ? 'green' : 'gray' }}>
            <Link to="/Payspace">HR & Payroll</Link>
          </li>
          <li style={{ color: isCurrentPage('/Career') ? 'green' : 'gray' }}>
            <Link to="/Career">Work at Future Kenya</Link>
          </li>
          <li style={{ color: isCurrentPage('/Contact') ? 'green' : 'gray' }}>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <a
              href="https://acumatica.futurekenya.com/SelfServicePortal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: isCurrentPage('/SelfServicePortal') ? 'green' : 'gray' }}
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
