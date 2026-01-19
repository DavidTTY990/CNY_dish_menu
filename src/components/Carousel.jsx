import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
      <button className="carousel-arrow left" onClick={goToPrevious}>&#10094;</button>
      <button className="carousel-arrow right" onClick={goToNext}>&#10095;</button>
      <div className="carousel-indicators">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`indicator ${currentIndex === slideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          >
            &#9679;
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
