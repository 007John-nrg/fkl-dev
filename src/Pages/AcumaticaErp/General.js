import React from 'react';
import './AcumaticaErp.css';
import image1 from '../../assets/aim30.png';
import image2 from '../../assets/aim31.png';
import image3 from '../../assets/aim32.png';
import image4 from '../../assets/aim33.png';
import video from '../../assets/Acumatica_Cloud_ERP_Software_3_minute_Overview-gsv.mp4';
import imageDemo from '../../assets/aim7.png';
import BrochureViewer from '../../Components/Bronchures';
import Footer from '../../Components/Footer';

const General = () => {
  return (
    <div className='acumaticaContainer general'>
        <div></div>
        <div>
            <div className="acumaticaContent acumatica2">
                <div className='acumatica3'>
                    <div className="imageContainer image2">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ljl6EI0EVHs?si=bY-7NYZogCX3O6zI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="textContainer2">
                        <h3 className='sectionTitle'>General Business Edition</h3>
                        <p>
                            Acumatica Cloud ERP General Business Edition puts financials, reporting, and CRM at your fingertips, letting you manage your company from anywhere. Acumatica supports work-from anywhere scenarios for your entire staff, enabling flexibility, efficiency, and business continuity. Acumatica’s General Business Edition brings together all the core elements you need to move your business forward: Core Financials and Project Accounting, Customer Management, and Reporting and Business Intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='GeneralContainer'>
            
            <div className='GeneralImage'>
                <div className="imageBox">
                    <img src={image2} alt="gen2"/>
                </div>
                <div className="imageBox">
                    <img src={image1} alt="gen1"/>
                </div>
                <div className="imageBox">
                    <img src={image4} alt="gen4"/>
                </div>
                <div className="imageBox">
                    <img src={image3} alt="gen3"/>
                </div>
            </div>
        </div>

        <div className="bronchureBox">



        </div>

        <Footer />
    </div>
  )
}

export default General