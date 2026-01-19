import React from 'react';
import Carousel from './Carousel';
import './Modal.css';

const Modal = ({ dish, onClose }) => {
  if (!dish) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <Carousel images={dish.images} />
        <div className="modal-details">
          <h2 className="modal-name">{dish.name}</h2>
          <p className="modal-description">{dish.description}</p>
          <p className="modal-price">{dish.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
