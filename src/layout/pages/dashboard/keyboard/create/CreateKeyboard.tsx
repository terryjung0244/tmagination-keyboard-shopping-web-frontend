/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import * as Styles from './CreateKeyboard.styled';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';
import { getUuid } from '../../../../../util/uuid';
import { IImageInfoStateType, IKeyboardInputStateType } from './CreateKeyboard.interface';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../../firebase';
import { useNavigate } from 'react-router-dom';
import { keyboardColors, keyboardSwitches } from '.';

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
      color: ['White', 'Black', 'Silver', 'Cream'],
      switch: ['Red', 'Yellow', 'Brown', 'Blue'],
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
    const { keyboardName, keyboardDesc, keyboardPrice, keyboardDiscountRate, keyboardStock } =
      createKeyboardInput;
    if (
      !keyboardName ||
      !keyboardDesc ||
      !keyboardPrice ||
      !keyboardDiscountRate ||
      !keyboardStock ||
      !uploadedImageUrl
    ) {
      alert('Please fill out all inputs and image. ');
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
    const imagePath = `tmKeyboards/keyboard/${fileName}_${getUuid()}`;
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
    <Styles.Createkeyboard>
      <div className="inputMain">
        <input
          name="keyboardName"
          value={createKeyboardInput.keyboardName}
          onChange={handleKeyboardInput}
          placeholder="Name"
          className="input"
        />
        <input
          name="keyboardDesc"
          value={createKeyboardInput.keyboardDesc}
          onChange={handleKeyboardInput}
          placeholder="Description"
          className="input"
        />
        <input
          type="number"
          name="keyboardPrice"
          value={createKeyboardInput.keyboardPrice}
          onChange={handleKeyboardInput}
          placeholder="Price"
          className="input"
        />
        <input
          type="number"
          name="keyboardStock"
          value={createKeyboardInput.keyboardStock}
          onChange={handleKeyboardInput}
          placeholder="Stock"
          className="input"
        />
        <input
          type="number"
          name="keyboardDiscountRate"
          value={createKeyboardInput.keyboardDiscountRate}
          onChange={handleKeyboardInput}
          placeholder="Discount Rate (e.g., 0.1 = 10%)"
          className="input"
        />
      </div>
      <div className="selectMain">
        <select className="selectColor" name={'color'} onChange={handleKeyboardSelectFeature}>
          <option value={'default'}>Colors</option>
          {keyboardColors.map((keyboardColor: string, index) => {
            return <option key={index}>{keyboardColor}</option>;
          })}
        </select>
        <select className="selectSwitch" name={'switch'} onChange={handleKeyboardSelectFeature}>
          <option value={'default'}>Switches</option>
          {keyboardSwitches.map((keyboardSwitch: string, index) => {
            return <option key={index}>{keyboardSwitch}</option>;
          })}
        </select>
      </div>
      <FireBaseUpload handleImageUrl={handleImageUrl} />
      <div className="buttonMain">
        <button className="createButton" onClick={handleCreateKeyboard}>
          Create
        </button>
        <button className="closeButton" onClick={handleCloseCreateKeyboard}>
          Close
        </button>
      </div>
    </Styles.Createkeyboard>
  );
};

export default CreateKeyboard;
