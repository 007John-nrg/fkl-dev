import React from 'react';

const Home = () => {
  const homeStyle = {
    marginLeft: '21%',
    padding: '1.5rem',
    minHeight: '100vh',
    backgroundImage: 'url("../../assets/fkl2.png")', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
  };

  return (
    <div style={homeStyle}>
      Home Page
    </div>
  );
};

export default Home;
