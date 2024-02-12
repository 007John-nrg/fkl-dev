import React from 'react'
import './AcumaticaErp.css';
import image1 from '../../assets/aim39.png';
import image2 from '../../assets/aim40.png';
import image3 from '../../assets/aim41.png';
import image4 from '../../assets/aim42.png';
import video from '../../assets/Acumatica_Cloud_ERP_Software_3_minute_Overview-gsv.mp4';
import imageDemo from '../../assets/aim7.png';
import Footer from '../../Components/Footer';

export const Distribution = () => {
  return (
    <div className='acumaticaContainer'>
        <div></div>
        <div>
            <div className="acumaticaContent acumatica2">
                <div className='acumatica3'>
                    <div className="imageContainer image2">
                    {/* <video controls width="525" height="360" autoplay poster={imageDemo}>
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/webm" />
                    </video> */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aeinLXYbStg?si=2ZnzCrmiZx40qllq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="textContainer2">
                        <h3 className='sectionTitle'>Distribution Edition</h3>
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
            </div>
        </div>

        <div className="bronchureBox">

            <iframe src="https://publuu.com/flip-book/392887/890540/page/1?embed&transparent" width="100%" height="380" frameborder="0" allowfullscreen="" class="publuuflip"></iframe>
            <iframe src="https://publuu.com/flip-book/392887/890540/page/1?embed&transparent" width="100%" height="380" frameborder="0" allowfullscreen="" class="publuuflip"></iframe>
            <iframe src="https://publuu.com/flip-book/392887/890540/page/1?embed&transparent" width="100%" height="380" frameborder="0" allowfullscreen="" class="publuuflip"></iframe>
            <iframe src="https://publuu.com/flip-book/392887/890540/page/1?embed&transparent" width="100%" height="380" frameborder="0" allowfullscreen="" class="publuuflip"></iframe>
            <iframe src="https://publuu.com/flip-book/392887/890540/page/2?embed&transparent" width="100%" height="380" frameborder="0" ></iframe>
        
        </div>

        <Footer />
    </div>
  )
}
