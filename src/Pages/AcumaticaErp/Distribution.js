import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './AcumaticaErp.css';
import image1 from '../../assets/aim39.png';
import image2 from '../../assets/aim40.png';
import image3 from '../../assets/aim41.png';
import image4 from '../../assets/aim42.png';
import Footer from '../../Components/Footer';
import Test from '../../Test';
import Test2 from '../../Test2';
import { Navbar } from '../../Components/Navbar';

export const Distribution = () => {

  return (
    <div>
        <Navbar />
    <div className='acumaticaContainer'>
        <div className="acumaticaContent backdrop">
            <div className="imageContainer image2">
                <iframe width="550" height="350" src="https://www.youtube.com/embed/aeinLXYbStg?si=2ZnzCrmiZx40qllq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="textContainer2">
                <h3 className='genTitle'>Distribution Edition</h3>
                <p>
                Distribution management is Cloud ERP software that helps companies manage their supply chain and logistics activities, including warehouse management, inventory management, and order management (sales and purchase orders), and integrate these activities with the company’s financials and sales. Wholesale distribution software can help companies improve customer satisfaction, reduce order times, and control costs across the entire supply and distribution chain.
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
            </div>
        </div>

        <Test2 />

        <Footer />
    </div>
    </div>
  )
}
