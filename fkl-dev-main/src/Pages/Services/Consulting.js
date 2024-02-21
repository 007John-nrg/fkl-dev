import React from 'react';
import './Service.css';
import '../AcumaticaErp/AcumaticaErp.css'
import image1 from '../../assets/aim60.png';
import image2 from '../../assets/aim61.png';
import image3 from '../../assets/aim62.png';
import image4 from '../../assets/aim63.png';
import image5 from '../../assets/aim64.png';
import image6 from '../../assets/aim65.png';
import image7 from '../../assets/aim66.png';
import image8 from '../../assets/aim67.png';
import image9 from '../../assets/aim68.png';
import image10 from  '../../assets/aim69.PNG';
import image09 from '../../assets/aim09.png';
import image100 from '../../assets/aim100.png';
import image101 from '../../assets/aim101.png';
import image102 from '../../assets/aim102.png';
import image103 from '../../assets/aim103.png';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

const Consulting = () => {
  return (
    <div className="serviceContainer consultingContainer">
      <div className="consultingContent">
        <div className="imageContainer consultingImage">
          <img src={image1} alt="acumatica consulting logo" />
        </div>
        
        <div className="consultingText">
          <p>
            At Future Kenya, we are dedicated to providing innovative IT solutions to help businesses thrive in today's dynamic landscape. With our comprehensive consulting services, we partner with organizations to navigate the complexities of technology and drive sustainable growth. Our team of experienced consultants brings a wealth of knowledge and expertise to every project, offering tailored solutions to meet your unique needs. Whether you're seeking guidance on digital transformation, IT infrastructure optimization, software consultation, or strategic planning, we're here to support you every step of the way.
          </p>
        </div>

        <div className="consultingIcons">
          <div className="content1">
            <img src={image09} alt="" />
            <p>Project Management</p>
          </div>
          <div className="content1">
            <img src={image100} alt="" />
            <p>Process Re-Engineering</p>
          </div>
          <div className="content1">
            <img src={image101} alt="" />
            <p>Infrastructure Recommendations</p>
          </div>
          <div className="content1">
            <img src={image102} alt="" />
            <p>Accounting Best Practice</p>
          </div>
          <div className="content1">
            <img src={image103} alt="" />
            <p>Business Intelligence</p>
          </div>
        </div>
      </div>

      <div className="imageFlow">
        <img src={image7} alt="implementation cycle image" />
      </div>

      <Link to="/Contact" className="consultingContact">
        <p>In need of ERP Consulting? &nbsp;</p>
        <div className='contactLink'>
          <p>Contact us now</p>
          <div className="contactLinkImage">
            <img src={image10} alt="contact logo" />
          </div>
        </div>
      </Link>

      <div className="consultingWhy">
        <div className="whyFlex">
          <div className='flexHeader'>
            <h1>Why Future Kenya?</h1>
            <div className="whyFlexImage">
              <img src={image9} alt="why future kenya image" />
            </div>
          </div>
          <div className="whyFlexContent">
            <p>Customized Implementation as per client's exact requiements</p>
            <p>Workflow per requirement <span>&#10003;</span></p>
            <p>All forms and screens per requirements <span>&#10003;</span></p>
            <p>All validation per requirements <span>&#10003;</span></p>
            <p>Scalability whenever required <span>&#10003;</span></p>
            <p>100% Developer Support, GAP Development </p>
            <p>Off Shore Development Centres (Cost Effective)</p>
            <p>Onshore Support and Deployment</p>
            <p>Local Support</p>
          </div>
        </div>
      </div>

      <div className='contentFooterTraining'>
        <div className='contentFooter2'>
          <h3>Infrastructure Support</h3>
          <p>
            We specialize in providing comprehensive IT infrastructure support services tailored to meet the evolving needs of businesses. Our dedicated team of experts offers proactive maintenance, troubleshooting, and strategic guidance to ensure optimal performance and reliability of your IT systems. From network infrastructure to server management, we are committed to delivering reliable solutions that empower your organization to thrive in today's digital landscape.
          </p>
        </div>
        <div className='contentFooter2'>
          <h3>Project management</h3>
          <p>
            We excel in offering top-tier project management support, designed to streamline operations and drive success for our clients. With a focus on efficiency and collaboration, our experienced team orchestrates projects from inception to completion, ensuring adherence to timelines, budgets, and quality standards. Whether it's resource allocation, risk mitigation, or stakeholder communication, we provide the strategic guidance and hands-on expertise needed to navigate complex projects with confidence and achieve outstanding results.
          </p>
        </div>
        <div className='contentFooter2'>
          <h3>Holistic Services </h3>
          <p>
            Our approach integrates diverse expertise across various domains, including technology, strategy, and human resources, to address the multifaceted challenges businesses face. From initial consultation to ongoing support, we tailor our services to align with your goals, fostering growth, resilience, and sustainable success. With a focus on collaboration and innovation, we are dedicated to crafting holistic solutions that empower organizations to thrive in an ever-changing landscape
          </p>
        </div>
        <div className='contentFooter2 italic'>
          <h3>Consulting Portfolio</h3>
          <p>
            100% outsourcing Server Software Support Software Support Microsoft consulting Server Installations Mailing Solutions Desktop Software Cloud, SaaS, Hosting Consulting on Internet security Business Intelligence (report customization) High End ERP sourcing and Project management FTP, Cloud, WWW, IIS Accredited
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Consulting