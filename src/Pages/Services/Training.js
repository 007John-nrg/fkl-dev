import React from 'react';
import './Service.css';
import '../AcumaticaErp/AcumaticaErp.css'
import image1 from '../../assets/aim70.png';
import image2 from '../../assets/aim71.png';
import image3 from '../../assets/aim72.png';
import image4 from '../../assets/aim73.png';
import image5 from '../../assets/aim74.png';
import image6 from '../../assets/aim75.png';
import image7 from '../../assets/aim76.png';
import image8 from '../../assets/aim77.png';
import image9 from '../../assets/aim78.png';
import image10 from  '../../assets/aim79.png';
import image11 from  '../../assets/aim69.PNG';
import image12 from '../../assets/aim68.png';
import image01 from '../../assets/aim01.png'
import image02 from '../../assets/aim02.png'
import image03 from '../../assets/aim03.png'
import image04 from '../../assets/aim04.png'
import image05 from '../../assets/aim05.png'
import image06 from '../../assets/aim06.png'
import image07 from '../../assets/aim07.png'
import image08 from '../../assets/aim08.png'
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Training = () => {
  return (
    <div className="serviceContainer consultingContainer">
      <div className="consultingContent">
        <div className="imageContainer consultingImage">
          <img src={image1} alt="acumatica consulting logo" />
        </div>
        
        <div className="consultingText">
          <p>
          Future Kenya provides comprehensive training services tailored to the evolving IT industry. Our programs cover essential skills and specialized training for our product ecosystem and all accompanying fields. Whether it's programming languages, cybersecurity, data analysis, or our proprietary solutions, our expert trainers deliver engaging learning experiences. We empower clients to maximize product potential and navigate the digital realm confidently, fostering a future-ready workforce.
          </p>
        </div>

        <div className="consultingIcons trainingIcons">
          <div className="content1">
            <img src={image02} alt="" />
            <p>Policy Based Standardization</p>
          </div>
          <div className="content1">
            <img src={image01} alt="" />
            <p>Best Practice Training</p>
          </div>
          <div className="content1">
            <img src={image03} alt="" />
            <p>Super User Training</p>
          </div>
          <div className="content1">
            <img src={image05} alt="" />
            <p>Departmental leaders training</p>
          </div>
          <div className="content1">
            <img src={image04} alt="" />
            <p>End User Training</p>
          </div>
          <div className="content1">
            <img src={image07} alt="" />
            <p>User Assistance Training</p>
          </div>
          <div className="content1">
            <img src={image08} alt="" />
            <p>Over the Shoulder Training</p>
          </div>
          <div className="content1">
            <img src={image06} alt="" />
            <p>System Administration Training</p>
          </div>
        </div>
      </div>

      <div className="imageFlow trainingFlow">
        <img src={image10} alt="implementation cycle image" />
      </div>

      <div className="projectCheckbox">
        <div className='checkbox'>
          <p>Product certification training</p>
        </div>
        <div className='checkbox'>
          <p>Online training courses</p>
        </div>
        <div className='checkbox'>
          <p>System Administration</p>
        </div>
        <div className='checkbox1'>
          <p>Developer Training</p>
          <FontAwesomeIcon icon="fa-light fa-square-check" />
        </div>
        <div className='checkbox'>
          <p>University assessment</p>
          <FontAwesomeIcon icon="fa-light fa-square-check" />
        </div>
      </div>

      <Link to="/Contact" className="consultingContact">
        <p>In need of training? &nbsp;</p>
        <div className='contactLink'>
          <p>Contact us now</p>
          <div className="contactLinkImage">
            <img src={image11} alt="contact logo" />
          </div>
        </div>
      </Link>

      <div className="consultingWhy">
        <h1>Why Future Kenya?</h1>
        <div className="whyFlex">
          <div className="whyFlexImage">
            <img src={image12} alt="why future kenya image" />
          </div>
          <div className="whyFlexTrain">
            <p><span className='bold'>Leading and Guiding: </span>We don’t just show you how the product works, but we apply teachings to implemented business cases.</p>
            <p><span className='bold'>Best practice: </span>Real world problems and examples, what to consider during setup and usage</p>
            <p><span className='bold'>Proof of Learning: </span> Before we move on from one section of training to another, we ensure that you have learnt and understood the session.
            Our services do not end with the delivery of the product. Once the installation is complete, our immediate objective will be to ensure that the product will be used at its full potential.</p>
          </div>
        </div>
      </div>

      <div className='contentFooter contentFooterTraining'>
        <div className='contentFooter2'>
          <h3>Maximizing results</h3>
          <p>
            Our training sessions are designed to help you become more self-sufficient and maximize on your ongoing system investment. The goal is to increase your long-term satisfaction. This is an important part of Future Kenya’s philosophy which is to help clients maximize the outcome of their investment and become more efficient and successful.
          </p>
        </div>
        <div className='contentFooter2'>
          <h3>Versatility</h3>
          <p>
            Future Kenya’s range of training methodologies are tailored to suit diverse learning styles and organizational requirements. Our comprehensive training services encompass a wide array of subjects, ranging from fundamental IT skills to advanced technology solutions. Whether it's on-site, virtual sessions, interactive e-learning modules, or blended learning approaches, we adapt our methods to best accommodate the unique needs of our clients.
          </p>
        </div>
        <div className='contentFooter2'>
          <h3>Results focused approach</h3>
          <p>
            We understand that the ultimate goal of training is to drive performance improvement and achieve measurable outcomes. That's why we take a results-focused approach, aligning our training objectives with the strategic goals of our clients. Through careful needs assessment, customized curriculum development, and ongoing performance evaluation, we ensure that our training initiatives yield real-world impact. Whether it's increasing productivity, reducing errors, improving customer satisfaction, or driving revenue growth, we are committed to helping our clients achieve their desired outcomes.
          </p>
        </div>
      </div>

      <div className='course'>
        <h3>
          <a href="https://openuni.acumatica.com/">Learn Now at Open University</a>
        </h3>
      </div>
      <Footer />
    </div>
  )
}

export default Training