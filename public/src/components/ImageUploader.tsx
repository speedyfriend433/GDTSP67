import { useDropzone } from 'react-dropzone';

export default function ImageUploader({ onUpload, disabled }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onUpload,
    disabled,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
      'application/json': ['.json']
    },
    multiple: true
  });

  return (
    <div 
      {...getRootProps()}
      className={`p-8 border-2 border-dashed ${disabled ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
    >
      <input {...getInputProps()} />
      <p>{disabled ? 'Processing...' : 'Drag files here or click to upload'}</p>
    </div>
  );
}
