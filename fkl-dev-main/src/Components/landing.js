import React from 'react';
import './components.css'
import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <div className='landingContainer'>
      <div className='landingBox'>
        <h1>
          Transform your <br/>
          business with our <br/>
          custom ERP <br/>
          solutions
        </h1>
        <p>At Future Kenya, we provide tailored technology solutions <br /> that meets your unique business needs</p>
        <Link className="button" to="Contact">GET A QUOTE</Link>
      </div>
    </div>
  );
};

export default Landing;
