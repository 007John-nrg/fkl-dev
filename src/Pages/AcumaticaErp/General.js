import React from 'react';
import './AcumaticaErp.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/aim30.png';
import image2 from '../../assets/aim31.png';
import image3 from '../../assets/aim32.png';
import image4 from '../../assets/aim33.png';
import video from '../../assets/Acumatica_Cloud_ERP_Software_3_minute_Overview-gsv.mp4';
import imageDemo from '../../assets/aim7.png';
import BrochureViewer from '../../Components/Bronchures';
import Footer from '../../Components/Footer';
import Test from '../../Test';

const General = () => {

    <iframe style="width:550px;height:350px" src="https://online.anyflip.com/phhbx/strv/index.html"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>

    const iframeUrls = [
        "https://online.anyflip.com/phhbx/strv/index.html",
        "https://publuu.com/flip-book/392887/910689/page/1?embed&transparent",
        "https://publuu.com/flip-book/392887/910694/page/1?embed&transparent",
        "https://publuu.com/flip-book/392887/896894/page/4?embed&transparent",
        "https://publuu.com/flip-book/392887/896894/page/5?embed&transparent"
      ];

  return (
    <div className='acumaticaContainer general'>
        <div className="acumaticaContent acumatica3 backdrop">
            <div className="imageContainer image2">
                <iframe width="550" height="350" src="https://www.youtube.com/embed/ljl6EI0EVHs?si=bY-7NYZogCX3O6zI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="textContainer2">
                <h3 className='genTitle'>General Business Edition</h3>
                <p>
                    Acumatica Cloud ERP General Business Edition puts financials, reporting, and CRM at your fingertips, letting you manage your company from anywhere. Acumatica supports work-from anywhere scenarios for your entire staff, enabling flexibility, efficiency, and business continuity. Acumatica’s General Business Edition brings together all the core elements you need to move your business forward: Core Financials and Project Accounting, Customer Management, and Reporting and Business Intelligence.
                </p>
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

        {/* <div className='bronchureBox'>
            <Carousel 
                autoFocus={true}
                infiniteLoop={true}
                interval={2000}
                showArrows={true}
                centerMode={true}
                centerSlidePercentage={33}
            >
                {iframeUrls.map((image, index) => (
                <div className='iframe' key={index}>
                    <iframe src={image} width="700" height="400" scrolling="no" frameborder="0" allowfullscreen="" allow="clipboard-write" className="publuuflip"></iframe>
                </div>
                ))}
            </Carousel>
        </div> */}

        <Test />

        <Footer />
    </div>
  )
}

export default General