import React, { useState } from 'react';
import { FaEye, FaDownload } from 'react-icons/fa';
import Modal from 'react-modal';
import './components.css'; // Import your component styles

const BrochureViewer = ({ src }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="brochure-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <iframe src={src} title="Brochure" frameBorder="0" scrolling="no"></iframe>
      {hovered && (
        <div className="overlay">
          <FaEye className="icon" onClick={handleOpenModal} />
          <a href={src} download>
            <FaDownload className="icon" />
          </a>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Brochure Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            marginLeft: '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            maxWidth: '80%',
            maxHeight: '80%',
            overflow: 'auto',
            border: 'none',
            borderRadius: '8px',
            padding: '20px',
          }
        }}
      >
        <iframe src={src} title="Brochure" frameBorder="0" scrolling="auto"></iframe>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default BrochureViewer;
