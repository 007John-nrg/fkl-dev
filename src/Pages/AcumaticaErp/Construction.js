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
import Footer from '../../Components/Footer';
import Constructions from '../../Construction';
import { Navbar } from '../../Components/Navbar';

const Construction = () => {
  return (
    <div>
        <Navbar />
    <div className='acumaticaContainer'>
        <div className="acumaticaContent backdrop">
                <div className="imageContainer image2">
                    <iframe width="550" height="350" src="https://www.youtube.com/embed/DAuTq6trVQ4?si=jJI_mnLkptNdkkpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="textContainer2">
                    <h3 className='genTitle'>Construction Edition</h3>
                    <p>
                        Acumatica’s Construction Edition is full-featured construction accounting software that helps you improve margins and project control at all stages of home, multi-family, commercial, mixed-use, land development, and government projects.
                    </p>
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

        <Constructions />

        <Footer />
    </div>
    </div>
  )
}

export default Construction