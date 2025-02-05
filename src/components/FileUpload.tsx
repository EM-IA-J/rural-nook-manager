import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Progress } from './ui/progress';
import { X, Upload } from 'lucide-react';

interface FileWithPreview extends File {
  preview?: string;
}

export const FileUpload = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      simulateUpload();
    }
  });

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const removeFile = (name: string) => {
    setFiles(files => files.filter(file => file.name !== name));
  };

  return (
    <div className="w-full space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          {isDragActive ? 'Drop the files here...' : 'Drag & drop files here, or click to select'}
        </p>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          <Progress value={uploadProgress} className="w-full" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {files.map((file) => (
              <div key={file.name} className="relative group">
                <img
                  src={file.preview}
                  alt={file.name}
                  className="h-24 w-full object-cover rounded-lg"
                />
                <button
                  onClick={() => removeFile(file.name)}
                  className="absolute top-1 right-1 p-1 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};