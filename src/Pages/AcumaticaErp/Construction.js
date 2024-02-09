import React from 'react'
import './AcumaticaErp.css';
import image1 from '../../assets/aim51.png';
import image2 from '../../assets/aim52.png';
import image3 from '../../assets/aim53.png';
import image4 from '../../assets/aim54.png';
import image5 from '../../assets/aim55.png';
import image6 from '../../assets/aim56.png';
import image7 from '../../assets/aim57.png';
import image8 from '../../assets/aim58.png';
import video from '../../assets/Acumatica_Cloud_ERP_Software_3_minute_Overview-gsv.mp4';
import imageDemo from '../../assets/aim7.png';

const Construction = () => {
  return (
    <div className='acumaticaContainer'>
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
                        <h3 className='sectionTitle'>Construction Edition</h3>
                        <p>
                        Distribution management is Cloud ERP software that helps companies manage their supply chain and logistics activities, including warehouse management, inventory management, and order management (sales and purchase orders), and integrate these activities with the company’s financials and sales. Wholesale distribution software can help companies improve customer satisfaction, reduce order times, and control costs across the entire supply and distribution chain.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='GeneralContainer'>
            
            <div className='GeneralImage'>
                <div className="imageBox">
                    <img src={image1} alt="gen1"/>
                </div>
                <div className="imageBox">
                    <img src={image2} alt="gen2"/>
                </div>
                <div className="imageBox">
                    <img src={image3} alt="gen3"/>
                </div>
                <div className="imageBox">
                    <img src={image4} alt="gen4"/>
                </div>
                <div className="imageBox">
                    <img src={image5} alt="gen1"/>
                </div>
                <div className="imageBox">
                    <img src={image6} alt="gen2"/>
                </div>
                <div className="imageBox">
                    <img src={image7} alt="gen3"/>
                </div>
                <div className="imageBox">
                    <img src={image8} alt="gen4"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Construction