import { packTextures } from './packing';
import { optimizeImage } from './compression';

export async function processTextures(files: File[]) {
  const images = await Promise.all(
    files.map(async file => ({
      name: file.name,
      data: await createImageBitmap(file),
      size: file.size
    }))
  );

  const packedResult = await packTextures(images);
  const optimized = await Promise.all(
    packedResult.textures.map(async texture => ({
      ...texture,
      optimizedData: await optimizeImage(texture.data)
    }))
  );

  return {
    ...packedResult,
    textures: optimized,
    originalSize: images.reduce((sum, img) => sum + img.size, 0),
    optimizedSize: optimized.reduce((sum, img) => sum + img.optimizedData.size, 0)
  };
}
