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

const Manufacturing = () => {
  return (
    <div className='acumaticaContainer'>
        <div></div>
        <div>
            <div className="acumaticaContent acumatica2">
                <div className='acumatica3'>
                    <div className="imageContainer image2">
                    <video controls width="525" height="360" autoplay poster={imageDemo}>
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/webm" />
                    </video>
                    </div>

                    <div className="textContainer2">
                        <h3 className='sectionTitle'>Manufacturing Edition</h3>
                        <p>
                          Integrate production planning and shop floor with customer management, sales orders, inventory, purchasing, accounting, and financial reporting to provide real-time coordination of activities across your entire business.
                        </p>
                    </div>
                </div>
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
    </div>
  )
}

export default Manufacturing