import React from 'react';
import './AcumaticaErp.css';
import image7 from '../../assets/aim15.png'

const Palladium = () => {
  return (
    <div className='acumaticaContainer'>
      <div className="acumaticaContent1 two">
        <div className="imageContainer">
          <img src={image7} alt="acumatica logo" />
        </div>
        <p>
          Palladium Accounting Software offers a range of
          feature-rich Accounting Solutions to suit all types of
          organisations. It is developed on 3 core business
          success values of increasing turnover, optimizing
          margins and improving operational efficiency.
        </p>
        <div>
          <button>Find out more</button>
          <button>Find out more</button>
        </div>
      </div>
    </div>
  )
}

export default Palladium