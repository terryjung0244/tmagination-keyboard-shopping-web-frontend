/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import * as Styles from './FireBaseUpload.styled';

interface IFireBaseUploadProps {
  handleImageUrl: (file: File) => void;
}

const FireBaseUpload = ({ handleImageUrl }: IFireBaseUploadProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <Styles.FireBaseUpload>
      <div className="previewMain">
        {previewImage ? <img className="previewImage" src={previewImage} /> : null}
      </div>
      <div className="filebox">
        <label className="uploadImageLabel" htmlFor="file">
          Upload File
        </label>
        <input
          className="uploadImage"
          type="file"
          name="file"
          id="file"
          onChange={handleFileUpload}
        />
      </div>
    </Styles.FireBaseUpload>
  );
};

export default FireBaseUpload;
