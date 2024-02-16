import React from 'react';
import './AcumaticaErp.css';
import image1 from '../../assets/aim35.png';
import image2 from '../../assets/aim34.png';
import image3 from '../../assets/aim36.png';
import image4 from '../../assets/aim38.png';
import video from '../../assets/Acumatica_Cloud_ERP_Software_3_minute_Overview-gsv.mp4';
import imageDemo from '../../assets/aim7.png';
import MyFlipBook from '../../Components/FlipBook';
import DemoBook from '../../Components/FlipBook';
import Footer from '../../Components/Footer';

const Manufacturing = () => {
  return (
    <div className='acumaticaContainer'>

        <div className="acumaticaContent acumatica3 backdrop">
            <div className="imageContainer image2">
                <iframe width="550" height="350" src="https://www.youtube.com/embed/TA57El8K2aQ?si=-PsfDna0ubQvOQOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="textContainer2">
                <h3 className='genTitle'>Manufacturing Edition</h3>
                <p>
                    Integrate production planning and shop floor with customer management, sales orders, inventory, purchasing, accounting, and financial reporting to provide real-time coordination of activities across your entire business.
                </p>
            </div>
        </div>

        <div className='GeneralContainer'>  
            <div className='GeneralImage'>
                <div className="imageBox">
                    <img src={image4} alt="gen4"/>
                </div>
                <div className="imageBox">
                    <img src={image2} alt="gen2"/>
                </div>
                <div className="imageBox">
                    <img src={image1} alt="gen1"/>
                </div>
                <div className="imageBox">
                    <img src={image3} alt="gen3"/>
                </div>
            </div>
        </div>

        <div>
            <DemoBook />
        </div>

        <Footer />
    </div>
  )
}

export default Manufacturing