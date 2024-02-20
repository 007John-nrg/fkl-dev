import React, { useState } from 'react';
import Slider from 'react-slick';
import { jsPDF } from 'jspdf';
import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HTMLFlipBook from 'react-pageflip';
import './Test.css';
import image1 from './assets/Analytics/Analytics & Reporting FKL_page-0001.jpg';
import image10 from './assets/Analytics/Analytics & Reporting FKL_page-0002.jpg';
import image2 from './assets/dist/construction/Construction edition FKL_page-0001.jpg';
import image20 from './assets/dist/construction/Construction edition FKL_page-0002.jpg';   
import image3 from './assets/dist/service/Service management FKL_page-0001.jpg';
import image30 from './assets/dist/service/Service management FKL_page-0002.jpg';
import image4 from './assets/dist/contract/General Contractor FKL_page-0001.jpg';
import image40 from './assets/dist/contract/General Contractor FKL_page-0002.jpg';
import image5 from './assets/project/Project Managment FKL_page-0001.jpg';
import image50 from './assets/project/Project Managment FKL_page-0002.jpg';
import image6 from './assets/dist/home/Datasheet CON Home Builder FKL _page-0001.jpg';
import image60 from './assets/dist/home/Datasheet CON Home Builder FKL _page-0002.jpg';   
import image7 from './assets/dist/land/Datasheet CON Land Developer FKL_page-0001.jpg';
import image70 from './assets/dist/land/Datasheet CON Land Developer FKL_page-0002.jpg';    

function Constructions() {
    const [popupImages, setPopupImages] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const Analytics = [image1, image10];
    const Construction = [image2, image20];
    const Service = [image3, image30];
    const Contract = [image4, image40];
    const project = [image5, image50];
    const land = [image6, image60];
    const home = [image7, image70];

    const settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2600,
        prevArrow: (
            <div>
                <div className="next-slick-arrow rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="20" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
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

    const handleEyeIconClick = (category) => {
        let selectedImages;
        switch (category) {
            case 'Analytics':
                selectedImages = Analytics;
                break;
            case 'Construction':
                selectedImages = Construction;
                break;
            case 'Service':
                selectedImages = Service;
                break;
            case 'Contract':
                selectedImages = Contract;
                break;
            case 'project':
                selectedImages = project;
                break;
            case 'land':
                selectedImages = land;
                break;
            case 'home':
                selectedImages = home;
                break;
            default:
                selectedImages = [];
        }
        setPopupImages(selectedImages);
        setShowPopup(true);
    };

    const handleDownloadIcon = async (category) => {
        try {
          let images;
          switch (category) {
            case 'Analytics':
                images = Analytics;
                break;
            case 'Construction':
                images = Construction;
                break;
            case 'Service':
                images = Service;
                break;
            case 'Contract':
                images = Contract;
                break;
            case 'project':
                images = project;
                break;
            case 'land':
                images = land;
                break;
            case 'home':
                images = home;
                break;
            default:
            images = [];
        }
          
          const pdf = new jsPDF();
          for (let i = 0; i < images.length; i++) {
            const imgData = await getImageData(images[i]);
            pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297); // Add image to PDF (A4 size)
            if (i !== images.length - 1) {
              pdf.addPage(); // Add a new page for the next image
            }
          }
          pdf.save('download.pdf'); // Save the PDF with a specified name
        } catch (error) {
          console.error('Error converting images to PDF:', error);
        }
    };

    const getImageData = (imageSrc) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imageSrc;
            img.crossOrigin = 'Anonymous';
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/jpeg'));
            };
            img.onerror = (error) => {
                console.error('Error loading image:', imageSrc, error);
                reject(error);
            };
        });
    };    

    return (
        <div style={{ marginTop: '3rem' }}>
            <Carousel
                autoFocus={true}
                infiniteLoop={true}
                interval={2000}
                showArrows={true}
                centerMode={true}
                centerSlidePercentage={30}
            >
                {[
                    { image: Analytics[0], category: 'Analytics' },
                    { image: Service[0], category: 'Service' },
                    { image: Construction[0], category: 'Construction' },
                    { image: Service[0], category: 'Service' },
                    { image: project[0], category: 'project'},
                    { image: land[0], category: 'land' },
                    { image: home[0], category: 'home' }
                ].map((item, index) => (
                    <div key={index}>
                        <div className="img-body">
                            <img src={item.image} alt="portfolio image" />
                            <div className="img-overlay">
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={() => handleEyeIconClick(item.category)}><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => handleDownloadIcon(item.category)}><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <button onClick={() => setShowPopup(false)}>X</button>
                        <div className="flipbook-container">
                            <HTMLFlipBook width={575} height={675}>
                            {/* <HTMLFlipBook width={400} height={400}> */}
                                {popupImages.map((image, index) => (
                                    <div className="page" key={index}>
                                        <img src={image} alt={`popup image ${index}`} />
                                    </div>
                                ))}
                            </HTMLFlipBook>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
    
}

export default Constructions;