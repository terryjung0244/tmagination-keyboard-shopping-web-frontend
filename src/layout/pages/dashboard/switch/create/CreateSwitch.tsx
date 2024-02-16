import React, { useState } from 'react';
import FireBaseUpload from '../../../../../components/FireBaseUpload';
import { getUuid } from '../../../../../util/uuid';
import { IImageInfoStateType, ISwitchInputStateType } from './CreateSwitch.interface';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../../firebase';
import { useNavigate } from 'react-router-dom';

const CreateSwitch = () => {
  const navigate = useNavigate();
  const [imageInfo, setImageInfo] = useState<IImageInfoStateType>({
    imageFile: null,
    imagePath: '',
  });

  const [createSwitchInput, setCreateSwitchInput] = useState<ISwitchInputStateType>({
    switchId: '',
    switchName: '',
    switchDesc: '',
    switchPrice: '',
    switchDiscountRate: '',
    switchStock: '',
    switchImageUrl: '',
    switchImagePath: '',
    switchFeatures: {
      color: '',
    },
  });

  const handleCreateSwitch = async () => {
    // 1. `validation`
    const { switchName, switchDesc, switchPrice, switchDiscountRate, switchStock, switchFeatures } =
      createSwitchInput;
    if (
      !switchName ||
      !switchDesc ||
      !switchPrice ||
      !switchDiscountRate ||
      !switchStock ||
      !switchFeatures.color
    ) {
      alert('Please fill out all fields');
      return;
    }

    let uploadedImageUrl;
    try {
      const imageRef = ref(storage, imageInfo.imagePath);
      // 2. image upload to firebase storage
      const uploadResponse = await uploadBytes(imageRef, imageInfo.imageFile as File);
      if (uploadResponse) {
        // 3. get image url
        uploadedImageUrl = await getDownloadURL(uploadResponse.ref);
        console.log('Successfully uploaded image');
      }
    } catch (err) {
      JSON.stringify(err);
    }

    if (!uploadedImageUrl) {
      alert('Please add image file');
      return;
    }

    // 4. backend로 보내기 (input + imageurl)

    const response = await fetch('http://localhost:8070/api/switch/createSwitch', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        ...createSwitchInput,
        uploadedImageUrl,
        uploadedImagePath: imageInfo.imagePath,
      }),
    });
    const result = await response.json();
    console.log(result);
    alert('Switch is added successfully!');
  };

  const handleCloseCreateSwitch = () => {
    navigate(-1);
  };

  const handleImageUrl = (file: File) => {
    const fileName = file.name.split('.')[0];
    const imagePath = `tmKeyboards/switch/${fileName}_${getUuid()}`;
    setImageInfo({ ...imageInfo, imageFile: file, imagePath: imagePath });
    // imagePath & file
  };

  const handleSwitchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateSwitchInput({
      ...createSwitchInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitchSelectFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCreateSwitchInput({
      ...createSwitchInput,
      switchFeatures: {
        ...createSwitchInput.switchFeatures,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <>
      <hr />
      <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Create Switch ]]</h3>
      <div>
        <button onClick={handleCreateSwitch}>Create Switch</button>
        <button onClick={handleCloseCreateSwitch}>X</button>
        <br />
        <input
          name="switchName"
          value={createSwitchInput.switchName}
          onChange={handleSwitchInput}
          placeholder="switchName"
        />
        <input
          name="switchDesc"
          value={createSwitchInput.switchDesc}
          onChange={handleSwitchInput}
          placeholder="switchDesc"
        />
        <input
          type="number"
          name="switchPrice"
          value={createSwitchInput.switchPrice}
          onChange={handleSwitchInput}
          placeholder="switchPrice"
        />
        <input
          type="number"
          name="switchStock"
          value={createSwitchInput.switchStock}
          onChange={handleSwitchInput}
          placeholder="switchStock"
        />
        <input
          type="number"
          name="switchDiscountRate"
          value={createSwitchInput.switchDiscountRate}
          onChange={handleSwitchInput}
          placeholder="switchDiscountRate"
        />
        <br />
        <select name={'color'} onChange={handleSwitchSelectFeature}>
          <option value={'default'}>Switch Colors</option>
          <option>red</option>
          <option>blue</option>
          <option>yellow</option>
          <option>brown</option>
        </select>
        <FireBaseUpload handleImageUrl={handleImageUrl} />
      </div>
    </>
  );
};

export default CreateSwitch;
