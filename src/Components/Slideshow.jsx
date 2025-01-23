import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // Import the CSS for styling (or use Tailwind CSS)

const Slideshow = () => {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slideshow every 0.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Handle manual navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="events" className="slideshow">
      <div className="slideshow-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
      </div>
      <button className="arrow prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="arrow next" onClick={handleNext}>
        ❯
      </button>
    </section>
  );
};

export default Slideshow;
