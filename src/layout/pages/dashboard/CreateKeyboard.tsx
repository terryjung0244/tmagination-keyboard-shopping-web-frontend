/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import FireBaseUpload from '../../../components/FireBaseUpload';
import { getUuid } from '../../../util/uuid';
import { IImageInfoStateType, IKeyboardInputStateType } from './CreateKeyboard.interface';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../firebase';

const CreateKeyboard = () => {
  const [imageInfo, setImageInfo] = useState<IImageInfoStateType>({
    imageFile: null,
    imagePath: '',
  });

  const [createKeyboardInput, setCreateKeyboardInput] = useState<IKeyboardInputStateType>({
    keyboardName: '',
    keyboardDesc: '',
    keyboardPrice: '',
    keyboardDiscountRate: 0,
    keyboardStock: '',
    keyboardFeatures: {
      color: '',
      switch: '',
    },
    keyboardImageUrl: '',
    keyboardUploadImage: null, // 새로 만든거
  });

  const handleCreateKeyboard = async () => {
    // 1. image upload to firebase storage
    let uploadedImageUrl = '';
    try {
      const imageRef = ref(storage, imageInfo.imagePath);
      const uploadResponse = await uploadBytes(imageRef, createKeyboardInput.keyboardUploadImage);
      console.log('11');
      if (uploadResponse) {
        uploadedImageUrl = await getDownloadURL(uploadResponse.ref);
        console.log('Successfully uploaded image');
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }

    // 2. get image url
    // 3. validation
    // 4. backend로 보내기 (input + imageurl)

    // const response = await fetch(
    //   'http://localhost:8070/api/keyboard/createKeyboard',
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //     body: JSON.stringify({ name: 'hong' }),
    //   },
    // );
    // const result = await response.json();
    // console.log(result);
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
    <div>
      <button onClick={handleCreateKeyboard}>Create Keyboard</button>
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
        name="keyboardPrice"
        value={createKeyboardInput.keyboardPrice}
        onChange={handleKeyboardInput}
        placeholder="keyboardPrice"
      />
      <input
        name="keyboardStock"
        value={createKeyboardInput.keyboardStock}
        onChange={handleKeyboardInput}
        placeholder="keyboardStock"
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
  );
};

export default CreateKeyboard;
