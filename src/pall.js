import React, {useState} from 'react';
import './Test.css';
import HTMLFlipBook from 'react-pageflip';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import p from './assets/palladium/P/P_page-0001.jpg';
import p2 from './assets/palladium/P/P_page-0002.jpg';
import p3 from './assets/palladium/P/P_page-0003.jpg';
import p4 from './assets/palladium/P/P_page-0004.jpg';
import p5 from './assets/palladium/P/P_page-0005.jpg';
import p6 from './assets/palladium/P/P_page-0006.jpg';
import p7 from './assets/palladium/P/P_page-0007.jpg';
import p8 from './assets/palladium/P/P_page-0008.jpg';
import p9 from './assets/palladium/P/P_page-0009.jpg';
import p10 from './assets/palladium/P/P_page-0010.jpg';
import p11 from './assets/palladium/P/P_page-0011.jpg';
import p12 from './assets/palladium/P/P_page-0012.jpg';
import p13 from './assets/palladium/P(1)/P (1)_page-0001.jpg';
import p14 from './assets/palladium/P(1)/P (1)_page-0002.jpg';
import p15 from './assets/palladium/P(1)/P (1)_page-0003.jpg';
import p16 from './assets/palladium/P(1)/P (1)_page-0004.jpg';
import p160 from './assets/palladium/P(1)/P (1)_page-0005.jpg';
import p17 from './assets/palladium/P(1)/P (1)_page-0006.jpg';
import p18 from './assets/palladium/P(1)/P (1)_page-0007.jpg';
import p19 from './assets/palladium/P(2)/P (2)_page-0001.jpg';
import p20 from './assets/palladium/P(2)/P (2)_page-0002.jpg';
import p21 from './assets/palladium/P(2)/P (2)_page-0003.jpg';
import p22 from './assets/palladium/P(2)/P (2)_page-0004.jpg';
import p23 from './assets/palladium/palladimAcc/Palladium Accounting Summary Brochure_page-0001.jpg';
import p24 from './assets/palladium/palladimAcc/Palladium Accounting Summary Brochure_page-0002.jpg';
import p25 from './assets/palladium/palladimAcc/Palladium Accounting Summary Brochure_page-0003.jpg';
import p26 from './assets/palladium/palladimAcc/Palladium Accounting Summary Brochure_page-0004.jpg';
import p27 from './assets/palladium/pallapp/Palladium App Suite Brochure 2022_page-0001.jpg';
import p28 from './assets/palladium/pallapp/Palladium App Suite Brochure 2022_page-0002.jpg';
import p29 from './assets/palladium/pallapp/Palladium App Suite Brochure 2022_page-0003.jpg';
import p30 from './assets/palladium/pallfeat/Palladium Feature_page-0001.jpg';
import p31 from './assets/palladium/pallfeat/Palladium Feature_page-0002.jpg';
import p32 from './assets/palladium/pallfeat/Palladium Feature_page-0003.jpg';
import p33 from './assets/palladium/pallfeat/Palladium Feature_page-0004.jpg';
import p34 from './assets/palladium/pallfeat/Palladium Feature_page-0005.jpg';
import p35 from './assets/palladium/pallfeat/Palladium Feature_page-0006.jpg';
import p36 from './assets/palladium/pallpay/Palladium Pay_page-0001.jpg';
import p37 from './assets/palladium/pallpay/Palladium Pay_page-0002.jpg';
import p38 from './assets/palladium/pallpay/Palladium Pay_page-0003.jpg';
import p39 from './assets/palladium/pallpay/Palladium Pay_page-0004.jpg';
import p40 from './assets/palladium/palladiumAccount.jpg'
import { Link } from 'react-router-dom';

const Pall = () => {
  const [popupImages, setPopupImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const nextButtonClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevButtonClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const P11 = [p, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
  const P22 = [p13, p14, p15, p16, p160, p17, p18];
  const P33 = [p19, p20, p21, p22];
  const P44 = [p23, p24, p25, p26];
  const P55 = [p27, p28, p29];
  const P66 = [p30, p31, p32, p33, p34, p35];
  const P77 = [p36, p37, p38, p39];
  const P88 = [p40]

  const handleDownloadIcon = async (category) => {
    try {
      let images;
      switch (category) {
        case 'P11':
            images = P11;
            break;
        case 'P22':
            images = P22;
            break;
        case 'P33':
            images = P33;
            break;
        case 'P44':
            images = P44;
            break;
        case 'P55':
            images = P55;
            break;
        case 'P66':
            images = P66;
            break;
        case 'P77':
            images = P77;
            break;
        case 'P88':
            images = P88;
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
      pdf.save('palladium.pdf'); // Save the PDF with a specified name
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

  const handleEyeIconClick = (category) => {
    let selectedImages;
    switch (category) {
        case 'P11':
            selectedImages = P11;
            break;
        case 'P22':
            selectedImages = P22;
            break;
        case 'P33':
            selectedImages = P33;
            break;
        case 'P44':
            selectedImages = P44;
            break;
        case 'P55':
            selectedImages = P55;
            break;
        case 'P66':
            selectedImages = P66;
            break;
        case 'P77':
            selectedImages = P77;
            break;
        case 'P88':
            selectedImages = P88;
            break;
        default:
            selectedImages = [];
    }
    setPopupImages(selectedImages);
    setShowPopup(true);
};


  return (
    <div>
        <div style={{}}>
            {[
                { image: P11[0], category: 'P11' },
                { image: P22[0], category: 'P22' },
                { image: P33[0], category: 'P33' },
                { image: P44[0], category: 'P44' },
                { image: P55[0], category: 'P55' },
                { image: P66[0], category: 'P66' },
                { image: P77[0], category: 'P77' },
                { image: P88[0], category: 'P88' },
            ].map((item, index) => (
                <div key={index} style={{marginTop: '1rem'}}>
                    <div className="imgpally img-body" style={{width: '250px'}}>
                        <img src={item.image} alt="portfolio image" />
                        <div className="img-overlay">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={() => handleEyeIconClick(item.category)}><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => handleDownloadIcon(item.category)}><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {showPopup && (
        <div className="popup-overlay" style={{}}>
            <div className="popup">
                <button onClick={() => setShowPopup(false)}>X</button>
                <div className="flipbook-container">
                    <HTMLFlipBook width={575} height={700}>
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
  )
}

export default Pall