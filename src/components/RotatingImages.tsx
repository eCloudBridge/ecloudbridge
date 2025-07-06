
import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const RotatingImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [processedImages, setProcessedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const imageUrls = [
    '/lovable-uploads/dc2764ac-81de-4147-94c0-0c35f1327f51.png',
    '/lovable-uploads/dc2764ac-81de-4147-94c0-0c35f1327f51.png', // You can replace with other uploaded images
    '/lovable-uploads/dc2764ac-81de-4147-94c0-0c35f1327f51.png'  // You can replace with other uploaded images
  ];

  useEffect(() => {
    const processImages = async () => {
      const processed: string[] = [];
      
      for (const url of imageUrls) {
        try {
          // Fetch image as blob
          const response = await fetch(url);
          const blob = await response.blob();
          
          // Load image
          const imageElement = await loadImage(blob);
          
          // Remove background
          const processedBlob = await removeBackground(imageElement);
          
          // Create URL for the processed image
          const processedUrl = URL.createObjectURL(processedBlob);
          processed.push(processedUrl);
        } catch (error) {
          console.error('Error processing image:', error);
          // Fallback to original image
          processed.push(url);
        }
      }
      
      setProcessedImages(processed);
      setIsLoading(false);
    };

    processImages();
  }, []);

  useEffect(() => {
    if (processedImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % processedImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [processedImages.length]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {processedImages.map((image, index) => (
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
          />
        </div>
      ))}
    </div>
  );
};

export default RotatingImages;
