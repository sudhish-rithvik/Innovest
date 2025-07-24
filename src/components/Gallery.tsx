import React, { useState, useEffect } from "react";

const galleryImages = [
  { src: "/innovest.png", alt: "Event Moment 1" },
  { src: "/innovest.png", alt: "Event Moment 2" },
  { src: "/innovest.png", alt: "Event Moment 3" },
  { src: "/innovest.png", alt: "Event Moment 4" }

  // ... more images ...
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2000); // 2 seconds
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-8">Gallery</h2>
        <p className="text-center text-slate-600 text-lg mb-12">
          Explore highlights from InnovestHack 2025.
        </p>
        <div className="relative w-full rounded-xl shadow-lg overflow-hidden bg-white">
          <img
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
            className="w-full h-96 object-cover transition-all duration-700"
          />
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
          >
            {/* ...left arrow svg... */}
          </button>
          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
          >
            {/* ...right arrow svg... */}
          </button>
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
