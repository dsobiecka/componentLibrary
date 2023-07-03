import React, { useState } from "react";
import "./Slider.css";

type SliderProps = {
  images: string[];
};

export const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-images"
        style={{ transform: `translateX(-${currentIndex * 300}px)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className="slider-image" />
        ))}
      </div>
      <button onClick={handlePrev} className="slider-button slider-prev">
        Prev
      </button>
      <button onClick={handleNext} className="slider-button slider-next">
        Next
      </button>
    </div>
  );
};
