import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './components.css'
import img1 from '../assets/aim1.png';
import img2 from '../assets/aim2.png';
import img3 from '../assets/aim3.png';
import img5 from '../assets/aim5.png';
import img6 from '../assets/aim6.png';

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
      <div className="portfolioSlider">
        <Slider {...settings}>
          {Images.map((image) => (
            <div key={image.id}>
              <div className="img-body">
                <img src={image} alt="portfolio image" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Portfolio
