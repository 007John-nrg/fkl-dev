import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './test.css'; // Import your custom CSS file

const Test = () => {
  const images = [
    "https://publuu.com/flip-book/392887/896894/page/1?embed&transparent",
    "https://publuu.com/flip-book/392887/896894/page/2?embed&transparent",
    "https://publuu.com/flip-book/392887/896894/page/3?embed&transparent",
    "https://publuu.com/flip-book/392887/896894/page/4?embed&transparent",
    "https://publuu.com/flip-book/392887/896894/page/5?embed&transparent"
  ];

  return (
    <div style={{marginLeft: '20%', border: '1px solid red'}}>
      <Carousel 
      autoFocus={true}
      infiniteLoop={true}
      interval={2000}
      showArrows={true}
      centerMode={true}
      centerSlidePercentage={33}
      >
        {images.map((image, index) => (
          <div key={index}>
            <iframe src={image} width="500" height="430" scrolling="no" frameborder="0" allowfullscreen="" allow="clipboard-write" className="publuuflip"></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Test;
