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
import image8 from '../../assets/aim16.png';
import Footer from '../../Components/Footer';


const Acumatica = () => {

  return (
    <div className='acumaticaContainer'>
      <div className="acumaticaContent1">
        <div className="imageContainer">
          <img src={image8} alt="acumatica logo" />
        </div>
        <p>
          Acumatica Cloud ERP is a dynamic and flexible business management solutions
          that empowers organizations with real-time insights, seamless collaboration, and
          unparalleled scalability for optimal operational efficiency and growth.
        </p>
      </div>

      <div className='videoContainer'>
        <video controls width="640" height="360" autoplay poster={imageDemo}>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/webm" />
        </video>
      </div>

      <div className="acumaticaContent acumatica2">
        <div className='acumatica3'>
          <div className="imageContainer image2">
            <img src={image} alt="acumatica logo" />
          </div>

          <div className="textContainer2">
            <h3 className='sectionTitle'>Acumatica</h3>
            <p>
              Acumatica is the fastest-growing provider of cloud ERP software for small- and mid-sized businesses.
              Built on the world's best cloud and mobile technology, our adaptable and integrated applications 
              deliver modern solutions for ERP and CRM. These can help Streamline your processes while gaining visibility over all
              aspects of your operation to accelerate your business growth. Each application is fully mobile to allow access from Anywhere
              on any device at any time. Acumatica's unique pricing model offers flexible licensing and deployment options and is easily 
              expanded fro a growing organization.
            </p>
          </div>
        </div>
      </div>

      <div className='AccountContainer'>
        <div className='accountsSoftware'>
          <div className='software' style={{ backgroundImage: `url(${image1})` }}>
            <a href=''>Construction Edition</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${image2})` }}>
            <a href=''>Distribution Edition</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${image3})` }}>
            <a href=''>Manufacturing Edition</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${image4})` }}>
            <a href=''>Commerce Edition</a>
          </div>
          <div className='software' style={{ backgroundImage: `url(${image5})` }}>
            <a href=''>General Business Edition</a>
          </div>
        </div>
      </div>

      <Footer />

  </div>
    
  )
}

export default Acumatica