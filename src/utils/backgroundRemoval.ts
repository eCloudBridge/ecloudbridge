import { pipeline, env } from '@huggingface/transformers';

// Enable caching
env.allowLocalModels = false;
env.useBrowserCache = true;

let cachedSegmenter: any = null;
const MAX_IMAGE_DIMENSION = 1024;
const TARGET_LABELS = ['person']; // <-- change this as per your content type

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

async function getSegmenter() {
  if (!cachedSegmenter) {
    const device = navigator?.gpu ? 'webgpu' : 'cpu';
    cachedSegmenter = await pipeline(
      'image-segmentation',
      'Xenova/segformer-b0-finetuned-ade-512-512',
      { device }
    );
  }
  return cachedSegmenter;
}

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    const segmenter = await getSegmenter();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    resizeImageIfNeeded(canvas, ctx, imageElement);

    // Run segmentation
    const results = await segmenter(canvas);

    if (!results || !Array.isArray(results) || results.length === 0) {
      throw new Error('Invalid segmentation result');
    }

    // Create blank binary mask initialized to 0 (transparent)
    const width = canvas.width;
    const height = canvas.height;
    const finalMask = new Uint8ClampedArray(width * height).fill(0);

    // Merge masks of selected labels
    for (const result of results) {
      if (TARGET_LABELS.includes(result.label) && result.mask?.data) {
        const maskData = result.mask.data;
        for (let i = 0; i < maskData.length; i++) {
          if (maskData[i] > 0.5) finalMask[i] = 255;
        }
      }
    }

    // Create final output canvas
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = width;
    outputCanvas.height = height;
    const outputCtx = outputCanvas.getContext('2d');
    if (!outputCtx) throw new Error('Could not get output canvas context');

    outputCtx.drawImage(canvas, 0, 0);
    const outputImageData = outputCtx.getImageData(0, 0, width, height);
    const data = outputImageData.data;

    for (let i = 0; i < finalMask.length; i++) {
      data[i * 4 + 3] = finalMask[i]; // Set alpha channel
    }

    outputCtx.putImageData(outputImageData, 0, 0);

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
