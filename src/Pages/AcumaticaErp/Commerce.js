import React from 'react';
import './AcumaticaErp.css';
import image1 from '../../assets/aim43.png';
import image2 from '../../assets/aim44.png';
import image3 from '../../assets/aim45.png';
import image4 from '../../assets/aim46.png';
import image5 from '../../assets/aim47.png';
import image6 from '../../assets/aim48.png';
import image7 from '../../assets/aim49.png';
import image8 from '../../assets/aim50.png';
import video from '../../assets/Acumatica_Cloud_ERP_Software_3_minute_Overview-gsv.mp4';
import imageDemo from '../../assets/aim7.png';
import Footer from '../../Components/Footer';

const Commerce = () => {
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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RDS2PqjCf80?si=LEo3tY_hiHudP1ou" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="textContainer2">
                        <h3 className='sectionTitle'>Retail Edition</h3>
                        <p>
                            With an Acumatica eCommerce software solution, you can manage eCommerce orders, inventory, picking-packing-shipping, returns, customer support, and accounting from one dashboard.
                            This complete eCommerce ERP solution tightly integrates Acumatica’s Financials, Sales, Inventory, CRM, and Fulfillment systems with popular eCommerce platforms.
                            That means you can promise your customers more—and then deliver.
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
                    <img src={image5} alt="gen5"/>
                </div>
                <div className="imageBox">
                    <img src={image6} alt="gen6"/>
                </div>
                <div className="imageBox">
                    <img src={image4} alt="gen4"/>
                </div>
                <div className="imageBox">
                    <img src={image7} alt="gen4"/>
                </div>
                <div className="imageBox">
                    <img src={image8} alt="gen4"/>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Commerce