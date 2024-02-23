import React from 'react';
import './AcumaticaErp.css';
import video from '../../assets/Acumatica_Cloud_ERP_Software_3_minute_Overview-gsv.mp4';
import imageDemo from '../../assets/aim7.png';
import image from '../../assets/aim8.png';
import image1 from '../../assets/aim9.png';
import image2 from '../../assets/aim10.png';
import image3 from '../../assets/aim11.png';
import image4 from '../../assets/aim12.png';
import image5 from '../../assets/aim13.png';
import image6 from '../../assets/aim14.png';
import image8 from '../../assets/aim105.PNG';
import Footer from '../../Components/Footer';


const Acumatica = () => {

  return (
    <div className='acumaticaContainer'>
      <div className="acumaticaContent1">
        <div className="imageContainer acumLogo">
          <img src={image8} alt="acumatica logo" />
        </div>
        <p>
          Acumatica Cloud ERP is a dynamic and flexible business management solution
          that empowers organizations with real-time insights, seamless collaboration, and
          unparalleled scalability for optimal operational efficiency and growth.
        </p>
      </div>

      <div className="vivid">   
       <div className='videoContainer'>
          <iframe width="660" height="400" src="https://www.youtube.com/embed/hmNORkJ6kms?si=AgVhdtSzsoUW_J2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

      <div className="acumaticaContent acumatica2">
        <div className='acumatica3'>
          <div className="imageContainer image2">
            <img src={image} alt="acumatica logo" />
          </div>

          <div className="textContainer2">
            <h3 className='sectionTitle'>Acumatica</h3>
            <p>
              Acumatica technology is built on a future-proof platform with open architecture for rapid integrations, scalability, and ease of use. The solution helps you manage accounting, operations, customers, vendors, employees, and many other aspects of running a business efficiently and effectively. We offer you the optimal business management solution to empower your company's transition for success in the modern digital economy. With Acumatica, we provide unparalleled capabilities for transforming your operations and ensuring resilience in today's dynamic business landscape.
            </p>
          </div>
        </div>
      </div>

      <div className='AccountContainer'>
        <div className='accountsSoftware'>
          <div className='software' style={{ backgroundImage: `url(${image5})` }}>
            <a href='/General'>General Business Edition</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${image2})` }}>
            <a href='/Distribution'>Distribution Edition</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${image3})` }}>
            <a href='/Manufacturing'>Manufacturing Edition</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${image4})` }}>
            <a href='/Commerce'>Retail Edition</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${image1})` }}>
            <a href='/Construction'>Construction Edition</a>
          </div>
        </div>
      </div>

      <Footer />
  </div>
    
  )
}

export default Acumatica