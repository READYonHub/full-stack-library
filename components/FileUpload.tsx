"use client"

import React, { useRef, useState } from 'react'
import { IKImage, ImageKitProvider, IKUpload, } from 'imagekitio-next'
import config from '@/lib/config'
import Image from 'next/image';
import { toast } from '@/hooks/use-toast';

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const FileUpload = ({ onFileChange }: { onFileChange: (FilePath: string) => void }) => {

  const IKUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.log(error)

    toast({
      title: "File uploaded failed",
      description: `Your file could not be uploaded. Please try again`,
      variant: "destructive"
    })
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: "File uploaded successfully",
      description: `Your ${res.filePath} has been uploaded successfully`,
    })
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}>
      <IKUpload
        className='hidden'
        ref={IKUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName='test-upload.png'
      />

      <button className='upload-btn' onClick={(e) => {
        e.preventDefault();
        //@ts-ignore
        IKUploadRef.current?.click();
      }}>

        <Image src='/icons/upload.svg' alt='upload' width={22} height={22} className='object-contain' />
        <p className='text-base text-light-100'>Upload a File</p>

        {file && <p className='upload-file-name'>{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  )
}

export default FileUpload