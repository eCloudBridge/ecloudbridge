
import { useState, useEffect } from 'react';

const RotatingImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Using the uploaded PNG images with transparent backgrounds
  const imageUrls = [
    './Banner1.png',
    './Banner2.png', 
    './Banner3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  if (imageUrls.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-140">
        <div className="text-white">No images available</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-140 overflow-hidden">
      {imageUrls.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`DevOps illustration ${index + 1}`}
            className="w-full h-full object-contain"
            loading={index === 0 ? 'eager' : 'lazy'} // Load first image immediately, others lazily
          />
        </div>
      ))}
    </div>
  );
};

export default RotatingImages;
