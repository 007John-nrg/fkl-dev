import React from 'react'
import './AcumaticaErp.css';
import image1 from '../../assets/aim7.png';
import Footer from '../../Components/Footer';
import palladiumImage from '../../assets/palladium.jpg';
import payspaceImage from '../../assets/payspace.jpg'

const AcumaticaErp = () => {
  return (
    <div className='acumaticaContainer'>
      <div className="acumaticaContent acumaticaEdit">
        <div className="imageContainer imageEdit">
          <img src={image1} alt="acumatica logo" />
        </div>

        <div className="textContainer textEdit">
          <div>
            <h3 className='sectionTitle Erp'>Acumatica</h3>
            <p>
            Acumatica is the fastest-growing provider of cloud ERP software for small- and mid-sized businesses. Built on the world's best cloud and mobile technology, the adaptable and integrated applications deliver modern solutions for ERP and CRM. These can help streamline your processes while gaining visibility over all aspects of your operation to accelerate your business growth. Each application is fully mobile to allow access from Anywhere on any device at any time. Acumatica's unique pricing model offers flexible licensing and deployment options and is easily expanded for a growing organization.
            </p>
            <a href="/Acumatica">More about Acumatica &gt</a>
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

