import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './YourCarousel.css'; // Optional: Add your custom styles for the carousel

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <button className="slick-prev">Previous</button>, // Optional: Custom previous arrow
        nextArrow: <button className="slick-next">Next</button> // Optional: Custom next arrow
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <h2>momocode</h2>
                </div>
                <div>
                <h2>momocode</h2>
                </div>
                <div>
                <h2>momocode</h2>
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default Carousel;
