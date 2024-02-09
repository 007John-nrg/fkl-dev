import React from "react";
import HTMLFlipBook from "react-pageflip";
import Aim from '../assets/aim48.png';
import Aim1 from '../assets/aim49.png'

const MyFlipBook = () => {
  return (
    <HTMLFlipBook
      width={500}
      height={700}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
    >
      <div className="demoPage">
        <img src={Aim} />
      </div>
      <div className="demoPage">
        <img src={Aim1} />
      </div>
      <div className="demoPage">
        <img src={Aim1} />
      </div>
    </HTMLFlipBook>
  );
};

export default MyFlipBook;
