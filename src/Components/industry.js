import React from 'react'
import './components.css'
import images3 from '../assets/acumatica.jpg'
import images4 from '../assets/palladium.jpg'
import images5 from '../assets/payspace.jpg'

const Industry = () => {
  return (
    <div className="industryContainer">
        <div className="sectionTitle">
          <h5> INDUSTRY ERP </h5>
        </div>
        <div className='industyBox'>
            <div className="erpBox">
                <div className='image'>
                   <a href='https://www.acumatica.com'><img src={images3} width="200" height="200" alt='Solution'></img></a>
                </div>
                <div>
                    <h4>Acumatica</h4>
                </div>
                <div>
                    <p>
                        Acumatica is the fastest-growing provider of Cloud ERP software for small- and mid-sized businesses. Built on the world’s best cloud and mobile technology, our adaptable and integrated applications deliver modern solutions for ERP and CRM. These can help streamline your processes while gaining visibility over all aspects of your operations to accelerate your business growth. Each application is fully mobile to allow access from anywhere on any device at any time. Acumatica’s unique pricing model offers flexible licensing and deployment options and is easily expanded for a growing organization
                    </p> 
                </div>
            </div>
        
            <div className="erpBox">
                <div className='image'>
                   <a href='https://www.palladium.co.za/palladium-accounting/'><img src={images4} width="200" height="200" alt='Solution'></img></a>
                </div>
                <div>
                    <h4>Palladium</h4>
                </div>
                <div>
                    <p>
                    Palladium Accounting Software offers a range of feature-rich Accounting Solutions to suit all types of organisations. Palladium software features are developed on 3 core business success values of increasing turnover, optomising margins and improving operational efficiency. Palladium unsurpassed stability takes away the business risk associated with data corruption experienced with other software
                    </p> 
                </div>
            </div>

            <div className="erpBox">
                <div className='image'>
                   <a href='https://www.payspace.com'><img src={images5} width="200" height="200" alt='Solution'></img></a>
                </div>
                <div>
                    <h4>Payspace</h4>
                </div>
                <div>
                    <p>
                    PaySpace is the leaders in true cloud-based Payroll and Human Capital Management software solutions providing new, improved solutions to help businesses operate in the modern era where managers and employees have access to information at the touch of a button
                    </p> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Industry