
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const RotatingImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [processedImages, setProcessedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Using only the last 3 uploaded images (excluding the logo)
  const imageUrls = [
    '/b5e5c5a5-4f4b-4a8b-9c3d-2e1f8a7b6c5d.jpg',
    '/a3d2c1b0-9e8f-7d6c-5b4a-3928174650ab.jpg', 
    '/f9e8d7c6-b5a4-9382-7165-504938271649.jpg'
  ];

  useEffect(() => {
    const processImages = async () => {
      setIsLoading(true);
      const processed: string[] = [];
      
      for (const url of imageUrls) {
        try {
          console.log(`Processing image: ${url}`);
          // Fetch image as blob
          const response = await fetch(url);
          if (!response.ok) {
            console.warn(`Failed to fetch image: ${response.status}, using fallback`);
            processed.push(url);
            continue;
          }
          const blob = await response.blob();
          console.log(`Image blob size: ${blob.size} bytes`);
          
          // Load image
          const imageElement = await loadImage(blob);
          console.log(`Image loaded: ${imageElement.width}x${imageElement.height}`);
          
          // Remove background
          const processedBlob = await removeBackground(imageElement);
          
          // Create URL for the processed image
          const processedUrl = URL.createObjectURL(processedBlob);
          processed.push(processedUrl);
          console.log(`Successfully processed image ${processed.length}`);
        } catch (error) {
          console.error('Error processing image:', error);
          // Fallback to original image
          processed.push(url);
        }
      }
      
      setProcessedImages(processed);
      setIsLoading(false);
      console.log(`Total processed images: ${processed.length}`);
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
        <Loader className="animate-spin h-12 w-12 text-orange-400" />
      </div>
    );
  }

  if (processedImages.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-96">
        <div className="text-white">No images available</div>
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
            onLoad={() => console.log(`Image ${index + 1} loaded successfully`)}
            onError={() => console.error(`Failed to load image ${index + 1}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default RotatingImages;
