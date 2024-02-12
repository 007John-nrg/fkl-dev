import React from 'react'
import './AcumaticaErp.css';
import image1 from '../../assets/aim7.png';
import Footer from '../../Components/Footer';
import palladiumImage from '../../assets/palladium.jpg';
import payspaceImage from '../../assets/payspace.jpg'

const AcumaticaErp = () => {
  return (
    <div className='acumaticaContainer'>
      <div className="acumaticaContent">
        <div className="imageContainer">
          <img src={image1} alt="acumatica logo" />
        </div>

        <div className="textContainer">
          <div>
            <h3 className='sectionTitle Erp'>Acumatica</h3>
            <p>
              Acumatica is the fastest-growing provider of cloud ERP software for small- and mid-sized businesses.
              Built on the world's best cloud and mobile technology, our adaptable and integrated applications 
              deliver modern solutions for ERP and CRM. Streamline your processes while gaining visibility over all
              aspects of your business.
            </p>
            <a href="/Acumatica">More about Acumatica ></a>
          </div>
        </div>
      </div>

      <div className='AcumaticaModules'>
        <div className='container'>
          <ul>
            <li>
              <a href="" className='containerLink'>GENERAL BUSINESS EDITION</a>
            </li>
            <li>
              <a href="" className='containerLink'>DISTRIBUTION EDITION</a>
            </li>
            <li>
              <a href="" className='containerLink'>MANUFACTURING EDITION</a>
            </li>
            <li>
              <a href="" className='containerLink'>RETAIL EDITION</a>
            </li>
            <li>
              <a href="" className='containerLink'>CONSTRUCTION EDITION</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='AccountContainer'>
        <div className='accountsSoftware'>
          <div className='software' style={{ backgroundImage: `url(${palladiumImage})` }}>
            <a href='/palladium'>Palladium</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${payspaceImage})` }}>
            <a href='/payspace'>Payspace</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AcumaticaErp

