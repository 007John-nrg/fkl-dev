import React from "react";
import HTMLFlipBook from "react-pageflip";

import Aim from '../assets/name1.pdf';
import Aim1 from '../assets/name2.pdf'

import { Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'; // Import pdfjs worker

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

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
