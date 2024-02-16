import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AcumaticaErp.css';
import image1 from '../../assets/aim39.png';
import image2 from '../../assets/aim40.png';
import image3 from '../../assets/aim41.png';
import image4 from '../../assets/aim42.png';
import Footer from '../../Components/Footer';

export const Distribution = () => {


    const iframeUrls = [
        "https://publuu.com/flip-book/392887/896894/page/1?embed&transparent",
        "https://publuu.com/flip-book/392887/896894/page/2?embed&transparent",
        "https://publuu.com/flip-book/392887/896894/page/3?embed&transparent",
        "https://publuu.com/flip-book/392887/896894/page/4?embed&transparent",
        "https://publuu.com/flip-book/392887/896894/page/5?embed&transparent"
      ];
    

  return (
    <div className='acumaticaContainer'>

        <div className="acumaticaContent acumatica3 backdrop">
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

        <div className='bronchureBox'>
            <Carousel 
                autoFocus={true}
                infiniteLoop={true}
                interval={2000}
                showArrows={true}
                centerMode={true}
                centerSlidePercentage={33}
            >
                {iframeUrls.map((image, index) => (
                <div key={index}>
                    <iframe src={image} width="520" height="440" scrolling="no" frameborder="0" allowfullscreen="" allow="clipboard-write" className="publuuflip"></iframe>
                </div>
                ))}
            </Carousel>
        </div>

        <Footer />
    </div>
  )
}
