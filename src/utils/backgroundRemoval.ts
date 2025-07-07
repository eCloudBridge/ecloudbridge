
import { pipeline, env } from '@huggingface/transformers';

env.allowLocalModels = false;
env.useBrowserCache = true;

let cachedRemover: any = null;
const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement
): void {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
}

async function getRemover() {
  if (!cachedRemover) {
    // Check for WebGPU support with proper type checking
    const hasWebGPU = 'gpu' in navigator && (navigator as any).gpu;
    const device = hasWebGPU ? 'webgpu' : 'cpu';
    cachedRemover = await pipeline('image-segmentation', 'Xenova/rembg', { device });
  }
  return cachedRemover;
}

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    const remover = await getRemover();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas context not available');

    resizeImageIfNeeded(canvas, ctx, imageElement);

    const result = await remover(canvas);

    if (!result || !Array.isArray(result) || !result[0].mask || !result[0].mask.data) {
      throw new Error('Invalid segmentation result');
    }

    const mask = result[0].mask.data;
    const maskWidth = result[0].mask.width;
    const maskHeight = result[0].mask.height;

    const imageWidth = canvas.width;
    const imageHeight = canvas.height;

    // Create offscreen canvas to scale mask to match image dimensions
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = maskWidth;
    maskCanvas.height = maskHeight;
    const maskCtx = maskCanvas.getContext('2d');
    const maskImageData = maskCtx!.createImageData(maskWidth, maskHeight);

    for (let i = 0; i < mask.length; i++) {
      const val = Math.round(mask[i] * 255);
      maskImageData.data[i * 4 + 0] = val;
      maskImageData.data[i * 4 + 1] = val;
      maskImageData.data[i * 4 + 2] = val;
      maskImageData.data[i * 4 + 3] = 255;
    }

    maskCtx!.putImageData(maskImageData, 0, 0);

    // Scale mask to match image dimensions
    const scaledMaskCanvas = document.createElement('canvas');
    scaledMaskCanvas.width = imageWidth;
    scaledMaskCanvas.height = imageHeight;
    const scaledMaskCtx = scaledMaskCanvas.getContext('2d');
    scaledMaskCtx!.drawImage(maskCanvas, 0, 0, imageWidth, imageHeight);
    const scaledMaskImageData = scaledMaskCtx!.getImageData(0, 0, imageWidth, imageHeight).data;

    // Now apply the mask alpha to the original image
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = imageWidth;
    outputCanvas.height = imageHeight;
    const outputCtx = outputCanvas.getContext('2d');
    if (!outputCtx) throw new Error('Failed to get output canvas context');

    outputCtx.drawImage(canvas, 0, 0);
    const imageData = outputCtx.getImageData(0, 0, imageWidth, imageHeight);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const alpha = scaledMaskImageData[i]; // Red channel (they're grayscale)
      data[i + 3] = alpha;
    }

    outputCtx.putImageData(imageData, 0, 0);

    return await new Promise<Blob>((resolve, reject) => {
      outputCanvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to create output blob'));
      }, 'image/png', 1.0);
    });
  } catch (err) {
    console.error('Background removal error:', err);
    throw err;
  }
};

export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};
