import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './components.css'
import Companies from './Companies';

const Portfolio = () => {

  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="portfolioContainer">
      <div className="sectionTitle">
        <h5>OUR PORTFOLIO</h5>
      </div>
      <div className="portfolioSlider">
        <Slider {...settings}>
          {Companies.map((item) => (
            <div key={item.id}>
              <div className="img-body">
                <img src={item.src} alt={item.alt} />
              </div>
              <div> 
                <p className='sliderTitle'>{item.title}</p>
                {item.description.map((desc) => (
                  <ul className="desc" key={desc.id}>
                    <li>{desc}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Portfolio
