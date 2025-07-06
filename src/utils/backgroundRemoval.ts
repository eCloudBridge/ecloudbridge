import { pipeline, env } from '@huggingface/transformers';

// Only load once
let cachedSegmenter: any = null;

env.allowLocalModels = false;
env.useBrowserCache = true;

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

async function getSegmenter() {
  if (!cachedSegmenter) {
    const device = navigator?.gpu ? 'webgpu' : 'cpu';
    console.log(`Loading segmentation pipeline on ${device}`);
    cachedSegmenter = await pipeline(
      'image-segmentation',
      'Xenova/segformer-b0-finetuned-ade-512-512',
      { device }
    );
  }
  return cachedSegmenter;
}

function smoothMask(maskData: Uint8ClampedArray, width: number, height: number) {
  const smoothed = new Uint8ClampedArray(maskData.length);
  const kernelSize = 3;
  const threshold = 0.5;

  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      let sum = 0;
      for (let ky = -1; ky <= 1; ky++) {
        for (let kx = -1; kx <= 1; kx++) {
          const idx = ((y + ky) * width) + (x + kx);
          sum += maskData[idx];
        }
      }
      const avg = sum / (kernelSize * kernelSize);
      smoothed[y * width + x] = avg > threshold ? 1 : 0;
    }
  }

  return smoothed;
}

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    const segmenter = await getSegmenter();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    resizeImageIfNeeded(canvas, ctx, imageElement);

    const result = await segmenter(canvas);

    if (!result || !Array.isArray(result) || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }

    const { data: rawMask, width, height } = result[0].mask;

    // Smooth and threshold the mask
    const smoothedMask = smoothMask(rawMask, width, height);

    const outputCanvas = document.createElement('canvas');
    const outputCtx = outputCanvas.getContext('2d');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;

    outputCtx?.drawImage(canvas, 0, 0);
    const outputImageData = outputCtx?.getImageData(0, 0, width, height);
    const outputData = outputImageData?.data;

    if (!outputData) throw new Error('Failed to extract image data');

    for (let i = 0; i < smoothedMask.length; i++) {
      const alpha = smoothedMask[i] === 1 ? 255 : 0;
      outputData[i * 4 + 3] = alpha;
    }

    outputCtx?.putImageData(outputImageData!, 0, 0);

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
