import React from 'react'
import './components.css'
import images3 from '../assets/acumatica.jpg'
import images4 from '../assets/palladium.jpg'
import images5 from '../assets/payspace.jpg'

const IndustryErp = () => {
  return (
    <div>
    <div className='container'>
    <h1> INDUSTRY ERP </h1>
    <div className='content'>
    <div className='pictures'>
    <div className='picture'>
      <a href='https://www.acumatica.com'><img src={images3} width="200" height="200" alt='Solution'></img></a>
      </div>
      <div className='picture'>
      <a className='drop' href='https://www.palladium.co.za/palladium-accounting/'><img src={images4} width="300" height="100" alt='Solution'></img></a>
      </div>
      <div className='picture'>
      <a href='https://www.payspace.com'><img src={images5} width="300" height="200" alt='Solution'></img></a>
      </div>
    </div>

    <div className='solutions'>
      <div className='solution'>
      
      <h3 className='heading'>Acumatica</h3>
      <p>
      Acumatica is the fastest-growing provider of Cloud ERP software for small- and mid-sized businesses. Built on the world’s best cloud and mobile technology, our adaptable and integrated applications deliver modern solutions for ERP and CRM. These can help streamline your processes while gaining visibility over all aspects of your operations to accelerate your business growth. Each application is fully mobile to allow access from anywhere on any device at any time. Acumatica’s unique pricing model offers flexible licensing and deployment options and is easily expanded for a growing organization
      </p></div>
      <div className='solution'>
      
      <h3 className='heading'>Palladium</h3>
      <p>Palladium Accounting Software offers a range of feature-rich Accounting Solutions to suit all types of organisations. Palladium software features are developed on 3 core business success values of increasing turnover, optomising margins and improving operational efficiency. Palladium unsurpassed stability takes away the business risk associated with data corruption experienced with other software
      </p></div>
      <div className='solution'>
      
      <h3 className='heading'>Payspace</h3>
      <p>PaySpace is the leaders in true cloud-based Payroll and Human Capital Management software solutions providing new, improved solutions to help businesses operate in the modern era where managers and employees have access to information at the touch of a button
      </p></div>
    </div> 
    </div>
    </div>
    </div>
    
  )
}

export default IndustryErp