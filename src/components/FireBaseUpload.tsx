/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

interface IFireBaseUploadProps {
  handleImageUrl: (file: File) => void;
}

const FireBaseUpload = ({ handleImageUrl }: IFireBaseUploadProps) => {
  const [previewImage, setPreviewImage] = useState<any>(null);

  const handleFileUpload = (e: any) => {
    if (e.target.files[0]) {
      // File upload면 무조건 if문으로 확인!
      handleImageUrl(e.target.files[0]);
      // 임시 URL을 하나 만들어주는것 (blob)
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {previewImage ? (
        <img style={{ width: '100px' }} src={previewImage} />
      ) : null}
    </div>
  );
};

export default FireBaseUpload;
