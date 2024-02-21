import React, { useState, useEffect } from 'react';
import { Page, pdfjs } from 'react-pdf';
import PageFlip from 'page-flip'; // Correct import statement

import One from '../assets/one.pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'; // Import pdfjs worker

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageImages, setPageImages] = useState([]);

    useEffect(() => {
        // Load PDF and get number of pages
        pdfjs.getDocument(One).promise.then(pdf => {
            setNumPages(pdf.numPages);
        });
    }, []);

    useEffect(() => {
        // Load images for each page
        const images = [];
        for (let i = 1; i <= numPages; i++) {
            pdfjs.getDocument(One).promise.then(pdf => {
                pdf.getPage(i).then(page => {
                    const scale = 2;
                    const viewport = page.getViewport({ scale });
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext).promise.then(() => {
                        images[i - 1] = canvas.toDataURL();
                        if (i === numPages) {
                            setPageImages(images);
                        }
                    });
                });
            });
        }
    }, [numPages]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <PageFlip
                width={800}
                height={600}
                showCover={true}
                onFlip={handlePageChange}
                className="pdf-viewer"
            >
                {pageImages.map((image, index) => (
                    <div key={`page_${index + 1}`} className="page-flip-page">
                        <img src={image} alt={`Page ${index + 1}`} />
                    </div>
                ))}
            </PageFlip>
            <p>Page {currentPage} of {numPages}</p>
        </div>
    );
}

export default PDFViewer;
