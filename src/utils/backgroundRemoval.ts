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
    const device = navigator?.gpu ? 'webgpu' : 'cpu';
    console.log(`Using device: ${device}`);
    cachedRemover = await pipeline('image-segmentation', 'Xenova/u2net', { device });
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
    const width = canvas.width;
    const height = canvas.height;

    const outputCanvas = document.createElement('canvas');
    const outputCtx = outputCanvas.getContext('2d');
    outputCanvas.width = width;
    outputCanvas.height = height;

    outputCtx?.drawImage(canvas, 0, 0);
    const imageData = outputCtx?.getImageData(0, 0, width, height);
    const data = imageData?.data;
    if (!data) throw new Error('Could not extract image data');

    for (let i = 0; i < mask.length; i++) {
      const alpha = Math.round(mask[i] * 255); // already a foreground probability
      data[i * 4 + 3] = alpha;
    }

    outputCtx?.putImageData(imageData!, 0, 0);

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
