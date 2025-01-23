import { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import { processTextures } from '../lib/imageUtils';

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFiles = async (files: File[]) => {
    setIsProcessing(true);
    try {
      const result = await processTextures(files);
      
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Texture Optimizer</h1>
      <ImageUploader onUpload={handleFiles} disabled={isProcessing} />
    </div>
  );
}
