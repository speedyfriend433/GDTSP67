import { MaxRectsPacker } from 'maxrects-bin-pack';

export async function packTextures(textures) {
  const packer = new MaxRectsPacker(4096, 4096, 2, {
    smart: true,
    pot: true,
    square: false
  });

  packer.addArray(textures.map(texture => ({
    width: texture.data.width,
    height: texture.data.height,
    data: texture
  })));

  return {
    atlas: await createAtlasImage(packer.bins[0]),
    uvMap: generateUVMap(packer.bins[0]),
    textures: packer.bins[0].rects
  };
}

async function createAtlasImage(bin) {
  // Implementation soon
}
