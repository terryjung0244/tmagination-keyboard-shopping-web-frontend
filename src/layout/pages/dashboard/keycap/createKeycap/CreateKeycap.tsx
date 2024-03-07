import React, { useState } from 'react';
import * as Styles from './CreateKeycap.styled';
import { IKeycapInputStateType } from './CreateKeycaps.interface';
import { storage } from '../../../../../firebase';
import { IImageInfoStateType } from '../../switch/create/CreateSwitch.interface';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';
import { getUuid } from '../../../../../util/uuid';
import { useNavigate } from 'react-router-dom';

const CreateKeycap = () => {
  const navigate = useNavigate();
  const [imageInfo, setImageInfo] = useState<IImageInfoStateType>({
    imageFile: null,
    imagePath: '',
  });
  const [createNewKeycapInput, setCreateNewKeycapInput] = useState<IKeycapInputStateType>({
    keycapId: '',
    keycapName: '',
    keycapDesc: '',
    keycapPrice: '',
    keycapDiscountRate: '',
    keycapStock: '',
    keycapImageUrl: '',
    keycapImagePath: '',
    keycapFeatures: {
      color: '',
    },
  });

  // Create new keycap for API 'POST'

  // Create New Keycap input
  const handleCreateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateNewKeycapInput({ ...createNewKeycapInput, [e.target.name]: e.target.value });
  };

  // OnChange for Select options
  const handleKeycapSelectFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCreateNewKeycapInput({
      ...createNewKeycapInput,
      keycapFeatures: { ...createNewKeycapInput.keycapFeatures, [e.target.name]: e.target.value },
    });
  };

  // Create New Keycap buttons (Create, Close)
  const handleCreateKeycapBtn = async () => {
    const { keycapName, keycapDesc, keycapPrice, keycapStock, keycapDiscountRate, keycapFeatures } =
      createNewKeycapInput;
    if (
      // When all inputs are empty
      !keycapName ||
      !keycapDesc ||
      !keycapPrice ||
      !keycapStock ||
      !keycapDiscountRate ||
      !keycapFeatures.color
    ) {
      alert('Please fill out all fields');
      return;
    }

    // Upload new image to Firebase storage
    let uploadedImageUrl;
    try {
      const imageRef = ref(storage, imageInfo.imagePath);
      const uploadResponse = await uploadBytes(imageRef, imageInfo.imageFile as File);
      if (uploadResponse) {
        uploadedImageUrl = await getDownloadURL(uploadResponse.ref);
        console.log(uploadedImageUrl);
        console.log('Successfully uploaded image');
      }
    } catch (err) {
      JSON.stringify(err);
    }

    if (!uploadedImageUrl) {
      alert('Please add image file');
      return;
    }
    // Send (input data + image) to backend
    console.log(createNewKeycapInput);
    const response = await fetch('http://localhost:8070/api/keycap/createKeycap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...createNewKeycapInput,
        uploadedImageUrl, // 한개로 uploadedImageUrl로 사용가능
        uploadedImagePath: imageInfo.imagePath,
      }),
    });
    const result = await response.json();
    console.log(result);
    alert('Keycap is added without issue');
  };

  const handleImageUrl = (file: File) => {
    const fileName = file.name.split('.')[0]; // purple.webp에서 .webp을 뺀부분
    const imagePath = `tmKeyboards/keycap/${fileName}_${getUuid()}`;
    setImageInfo({ ...imageInfo, imageFile: file, imagePath: imagePath });
    // imagePath & file
  };

  const handleCloseCreateKeycap = () => {
    navigate(-1);
  };

  return (
    <Styles.CreateKeycap>
      <div className="inputMain">
        <input
          name="keycapName"
          value={createNewKeycapInput.keycapName}
          onChange={handleCreateInput}
          placeholder="Name"
          className="input"
        />
        <input
          name="keycapDesc"
          value={createNewKeycapInput.keycapDesc}
          onChange={handleCreateInput}
          placeholder="Description"
          className="input"
        />
        <input
          type="number"
          name="keycapPrice"
          value={createNewKeycapInput.keycapPrice}
          onChange={handleCreateInput}
          placeholder="Price"
          className="input"
        />
        <input
          type="number"
          name="keycapStock"
          value={createNewKeycapInput.keycapStock}
          onChange={handleCreateInput}
          placeholder="Stock"
          className="input"
        />
        <input
          type="number"
          name="keycapDiscountRate"
          value={createNewKeycapInput.keycapDiscountRate}
          onChange={handleCreateInput}
          placeholder="Discount Rate (e.g., 0.1 = 10%)"
          className="input"
        />
      </div>
      <div className="selectMain">
        <select className="selectColor" name={'color'} onChange={handleKeycapSelectFeature}>
          <option value={'default'}>Keycap Colors</option>
          <option>Beige</option>
          <option>Green</option>
          <option>Mint</option>
          <option>Purple</option>
        </select>
      </div>
      <FireBaseUpload handleImageUrl={handleImageUrl} />
      <div className="buttonMain">
        <button className="createButton" onClick={handleCreateKeycapBtn}>
          Create
        </button>
        <button className="closeButton" onClick={handleCloseCreateKeycap}>
          Close
        </button>
      </div>
    </Styles.CreateKeycap>
  );
};

export default CreateKeycap;
