/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import FireBaseUpload from '../../../../../components/FireBaseUpload';
import { getUuid } from '../../../../../util/uuid';
import { IImageInfoStateType, IKeyboardInputStateType } from './CreateKeyboard.interface';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../../firebase';
import { useNavigate } from 'react-router-dom';

const CreateKeyboard = () => {
  const navigate = useNavigate();
  const [imageInfo, setImageInfo] = useState<IImageInfoStateType>({
    imageFile: null,
    imagePath: '',
  });

  const [createKeyboardInput, setCreateKeyboardInput] = useState<IKeyboardInputStateType>({
    keyboardId: '',
    keyboardName: '',
    keyboardDesc: '',
    keyboardPrice: '',
    keyboardDiscountRate: '',
    keyboardStock: '',
    keyboardImageUrl: '',
    keyboardImagePath: '',
    keyboardFeatures: {
      color: '',
      switch: '',
    },
  });

  const handleCreateKeyboard = async () => {
    let uploadedImageUrl;
    try {
      const imageRef = ref(storage, imageInfo.imagePath);
      // 1. image upload to firebase storage
      const uploadResponse = await uploadBytes(imageRef, imageInfo.imageFile as File);
      if (uploadResponse) {
        // 2. get image url
        uploadedImageUrl = await getDownloadURL(uploadResponse.ref);
        console.log('Successfully uploaded image');
      }
    } catch (err) {
      JSON.stringify(err);
    }
    // 3. `validation`
    const {
      keyboardName,
      keyboardDesc,
      keyboardPrice,
      keyboardDiscountRate,
      keyboardStock,
      keyboardFeatures,
    } = createKeyboardInput;
    if (
      !keyboardName ||
      !keyboardDesc ||
      !keyboardPrice ||
      !keyboardDiscountRate ||
      !keyboardStock ||
      !keyboardFeatures.color ||
      !keyboardFeatures.switch ||
      !uploadedImageUrl
    ) {
      alert('Please fill out all fields');
      return;
    }

    // 4. backend로 보내기 (input + imageurl)

    const response = await fetch('http://localhost:8070/api/keyboard/createKeyboard', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        ...createKeyboardInput,
        uploadedImageUrl,
        uploadedImagePath: imageInfo.imagePath,
      }),
    });
    const result = await response.json();
    alert('Keyboard is added successfully!');
  };

  const handleCloseCreateKeyboard = () => {
    navigate(-1);
  };

  const handleImageUrl = (file: File) => {
    const fileName = file.name.split('.')[0];
    const imagePath = `tmKeyboards/${fileName}_${getUuid()}`;
    setImageInfo({ ...imageInfo, imageFile: file, imagePath: imagePath });
    // imagePath & file
  };

  const handleKeyboardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateKeyboardInput({
      ...createKeyboardInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyboardSelectFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCreateKeyboardInput({
      ...createKeyboardInput,
      keyboardFeatures: {
        ...createKeyboardInput.keyboardFeatures,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <>
      <hr />
      <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Create Keyboard ]]</h3>
      <div>
        <button onClick={handleCreateKeyboard}>Create Keyboard</button>
        <button onClick={handleCloseCreateKeyboard}>X</button>
        <br />
        <input
          name="keyboardName"
          value={createKeyboardInput.keyboardName}
          onChange={handleKeyboardInput}
          placeholder="keyboardName"
        />
        <input
          name="keyboardDesc"
          value={createKeyboardInput.keyboardDesc}
          onChange={handleKeyboardInput}
          placeholder="keyboardDesc"
        />
        <input
          type="number"
          name="keyboardPrice"
          value={createKeyboardInput.keyboardPrice}
          onChange={handleKeyboardInput}
          placeholder="keyboardPrice"
        />
        <input
          type="number"
          name="keyboardStock"
          value={createKeyboardInput.keyboardStock}
          onChange={handleKeyboardInput}
          placeholder="keyboardStock"
        />
        <input
          type="number"
          name="keyboardDiscountRate"
          value={createKeyboardInput.keyboardDiscountRate}
          onChange={handleKeyboardInput}
          placeholder="keyboardDiscountRate"
        />
        <br />
        <select name={'color'} onChange={handleKeyboardSelectFeature}>
          <option value={'default'}>Keyboard Colors</option>
          <option>White</option>
          <option>Black</option>
          <option>Green</option>
          <option>Silver</option>
        </select>
        <select name={'switch'} onChange={handleKeyboardSelectFeature}>
          <option value={'default'}>Switches</option>
          <option>Red Switch</option>
          <option>Black Switch</option>
          <option>Yellow Switch</option>
          <option>Brown Switch</option>
        </select>
        <FireBaseUpload handleImageUrl={handleImageUrl} />
      </div>
    </>
  );
};

export default CreateKeyboard;
