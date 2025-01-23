import { compress } from '@wasm-codecs/oxipng';
import { init as initJpeg } from '@wasm-codecs/mozjpeg';

export async function optimizeImage(imageBitmap: ImageBitmap) {
  await initJpeg();
  
  const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pngBuffer = await compress(imageData.data, {
    level: 3,
    interlace: false
  });

  return new Blob([pngBuffer], { type: 'image/png' });
}
