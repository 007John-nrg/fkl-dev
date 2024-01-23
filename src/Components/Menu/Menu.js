import React from 'react';
import logo from '../../assets/fkl1.png';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menuContainer'>
      <div className='menuBox'>
        <div>
          <img src={logo} alt='logo image' className='menuLogo' />
        </div>
        <ul>
          <li>Home</li>
          <li>Acumatica & ERP</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>HR & Payroll</li>
          <li>Work at Future Kenya</li>
          <li>Contact Us</li>
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
