import React, { useState } from 'react';

const ImageSlider = ({ images, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const mainImageStyle = {
    width: '100%',
    height: 'auto',
  };

  const upcomingImageStyle = {
    width: 'calc(33% - 10px)',
    height: 'auto',
    marginRight: '10px',
    transition: 'transform 0.5s ease-in-out',
  };

  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
  };

  const navigationStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    marginRight: '5px',
    cursor: 'pointer',
  };

  const activeDotStyle = {
    ...dotStyle,
    backgroundColor: '#000',
  };

  return (
    <div>
      <div style={imageContainerStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              ...upcomingImageStyle,
              transform: `translateX(${
                index === currentIndex ? 0 : index > currentIndex ? '-100%' : '100%'
              })`,
            }}
          />
        ))}
        <img src={images[currentIndex]} alt={`Main Image ${currentIndex + 1}`} style={mainImageStyle} />
      </div>
      <div style={navigationStyle}>
        <p>{descriptions[currentIndex]}</p>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div style={dotsContainerStyle}>
        {images.map((image, index) => (
          <span
            key={index}
            role="button"
            tabIndex="0"
            aria-label={`Go to image ${index + 1}`}
            onClick={() => handleDotClick(index)}
            style={index === currentIndex ? activeDotStyle : dotStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
