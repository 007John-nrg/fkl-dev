import React from 'react';
import './Home.css';
import Landing from '../../Components/landing';
import IndustryErp from '../../Components/industryErp';
import Portfolio from '../../Components/portfolio';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Industry from '../../Components/industry';

const Home = () => {

  return (
    <div className='homeContainer'>
      <Landing />
      <Industry />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

