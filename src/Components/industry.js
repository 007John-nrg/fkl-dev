import React from 'react'
import './components.css'
import { Link } from 'react-router-dom';
// import images3 from '../assets/aim7.png'
// import images4 from '../assets/palladium.jpg'
// import images5 from '../assets/payspace.jpg'

import images5 from '../assets/payspce.webp'
import images3 from '../assets/aim7.webp'
import images4 from '../assets/palladium.webp'

const Industry = () => {
  return (
    <div className="industryContainer">
        <div className="sectionTitle">
          <h5> INDUSTRY LEADING ERP </h5>
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
                    <p className='industryText'>
                    Future Kenya proudly stands as a Gold certified partner of Acumatica ERP, a SaaS, modular, cloud-based software system designed to manage various business processes and functions seamlessly across the organization. With Acumatica, businesses have the flexibility to pay based on usage or transaction tiers, with unlimited user options or a pricing structure based on the number of users. Acumatica's cloud ERP provides industry-specific and company-size Editions, including a versatile General Business Edition, making it an ideal choice for comprehensive enterprise resource planning.
                    </p> 
                </div>
                <div>
                    <Link to="/Acumatica">
                        <button>Explore</button>
                    </Link>
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
                    <p className='industryText'>
                    As a leading provider, Future Kenya brings you Palladium Accounting Software, a comprehensive suite of feature-rich solutions tailored to meet the diverse needs of organizations. Our commitment aligns with Palladium's core business success values, focusing on enhancing turnover, optimizing margins, and improving operational efficiency. With Palladium, experience unparalleled stability that eliminates the business risks often associated with data corruption found in other software solutions. Elevate your financial management with Future Kenya and Palladium Accounting Software, where stability and functionality converge for business excellence.
                    </p> 
                </div>
                <div>
                    <Link to="/Palladium">
                        <button>Explore</button>
                    </Link>
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
                    <p className='industryText'>
                    Future Kenya champions continuous innovation in payroll and human capital management solutions through its partnership with PaySpace. We strive to set and lead global trends in payroll and HR, ensuring a timely response to our clients' evolving needs. Our commitment extends beyond cutting-edge solutions to building enduring client relationships. With Future Kenya and PaySpace, experience a dynamic approach to payroll and human capital management that drives innovation and fosters long-lasting partnerships.
                    </p> 
                </div>
                <div>
                    <Link to="/Payspace">
                        <button>Explore</button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Industry