import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-responsive-carousel';
import './components.css'
// import img1 from '../assets/case1.png';
// import img2 from '../assets/case2.png';
// import img3 from '../assets/case3.png';
// import img5 from '../assets/case4.png';
// import img6 from '../assets/case5.png';
import img1 from '../assets/case1.webp';
import img2 from '../assets/case2.webp';
import img3 from '../assets/case3.webp';
import img5 from '../assets/case4.webp';
import img6 from '../assets/case5.webp';

const Portfolio = () => {

  const Images = [
    img1,
    img2,
    img3,
    img5,
    img6
  ]

  const settings = {
    dots: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2600,
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
    nextArrow: (
      <div>
        <div className="next-slick-arrow right-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    )
  };

  return (
    <div className="portfolioContainer">
      <div className="sectionTitle">
        <h5>CUSTOMER CASE STUDIES</h5>
      </div>
      {/* <div className="portfolioSlider">
        <Slider {...settings}>
          {Images.map((image) => (
            <div key={image.id}>
              <div className="img-bod">
                <img src={image} alt="portfolio image" />
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
      <div style={{margin: '0'}}>
        <Carousel
            autoFocus={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            showArrows={true}
            centerMode={true}
            // centerSlidePercentage={30}
        >
            {Images.map((image, index) => (
                <div key={index}>
                  <div key={image.id}>
                    <div className="img-bod">
                      <img src={image} alt="customer case studies" />
                    </div>
                  </div>
                </div>
            ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Portfolio
