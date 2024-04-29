import React, { useState } from 'react';
import * as Styles from './CreateSwitch.styled';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';
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
      color: ['Black', 'Blue', 'Brown', 'Red', 'Yellow'],
    },
  });

  const handleCreateSwitch = async () => {
    // 1. `validation`
    const { switchName, switchDesc, switchPrice, switchDiscountRate, switchStock } =
      createSwitchInput;
    if (!switchName || !switchDesc || !switchPrice || !switchDiscountRate || !switchStock) {
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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

  // const handleSwitchSelectFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setCreateSwitchInput({
  //     ...createSwitchInput,
  //     switchFeatures: {
  //       ...createSwitchInput.switchFeatures,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  return (
    <Styles.CreateSwitch>
      <div className="inputMain">
        <input
          name="switchName"
          value={createSwitchInput.switchName}
          onChange={handleSwitchInput}
          placeholder="Name"
          className="input"
        />
        <input
          name="switchDesc"
          value={createSwitchInput.switchDesc}
          onChange={handleSwitchInput}
          placeholder="Description"
          className="input"
        />
        <input
          type="number"
          name="switchPrice"
          value={createSwitchInput.switchPrice}
          onChange={handleSwitchInput}
          placeholder="Price"
          className="input"
        />
        <input
          type="number"
          name="switchStock"
          value={createSwitchInput.switchStock}
          onChange={handleSwitchInput}
          placeholder="Stock"
          className="input"
        />
        <input
          type="number"
          name="switchDiscountRate"
          value={createSwitchInput.switchDiscountRate}
          onChange={handleSwitchInput}
          placeholder="Discount Rate (e.g., 0.1 = 10%)"
          className="input"
        />
      </div>
      {/* <div className="selectMain">
        <select className="selectColor" name={'color'} onChange={handleSwitchSelectFeature}>
          <option value={'default'}>Switch Colors</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Yellow</option>
          <option>Brown</option>
        </select>
      </div> */}
      <FireBaseUpload handleImageUrl={handleImageUrl} />
      <div className="buttonMain">
        <button className="createButton" onClick={handleCreateSwitch}>
          Create
        </button>
        <button className="closeButton" onClick={handleCloseCreateSwitch}>
          Close
        </button>
      </div>
    </Styles.CreateSwitch>
  );
};

export default CreateSwitch;
