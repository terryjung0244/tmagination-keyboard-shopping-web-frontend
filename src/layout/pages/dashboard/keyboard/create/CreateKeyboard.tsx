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
import { createKeyboardAPI } from '../../../../../service/api/keyboards';

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
      color: [],
      switch: [],
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

    const result = await createKeyboardAPI(createKeyboardInput, uploadedImageUrl, imageInfo);
    if (result) {
      alert('Keyboard is added successfully!');
    }
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
    const { name, value } = e.target;

    if (value) {
      if (name === 'color') {
        let temp = createKeyboardInput.keyboardFeatures?.color;
        if (temp?.includes(value)) {
          temp = temp.filter((el) => el !== value); // ['black']
        } else {
          temp?.push(value);
        }
        setCreateKeyboardInput({
          ...createKeyboardInput,
          keyboardFeatures: {
            ...createKeyboardInput.keyboardFeatures,
            [name]: temp, // color: ['black', 'green']
          },
        });
      } else {
        let temp = createKeyboardInput.keyboardFeatures?.switch;
        if (temp?.includes(value)) {
          temp = temp.filter((el) => el !== value);
        } else {
          temp?.push(value);
        }
        setCreateKeyboardInput({
          ...createKeyboardInput,
          keyboardFeatures: {
            ...createKeyboardInput.keyboardFeatures,
            [name]: temp,
          },
        });
      }
    } else {
      setCreateKeyboardInput({
        ...createKeyboardInput,
        keyboardFeatures: {
          ...createKeyboardInput.keyboardFeatures,
          [name]: [],
        },
      });
    }

    // if (e.target.name === 'switch') {
    //   let temp = createKeyboardInput.keyboardFeatures?.switch;
    //   if (temp?.includes(e.target.value)) {
    //     temp = temp.filter((el) => el !== e.target.value);
    //   } else {
    //     temp?.push(e.target.value);
    //   }
    //   setCreateKeyboardInput({
    //     ...createKeyboardInput,
    //     keyboardFeatures: {
    //       ...createKeyboardInput.keyboardFeatures,
    //       [e.target.name]: temp,
    //     },
    //   });
    // }
    // if (e.target.name === 'switch') {
    //   setCreateKeyboardInput({
    //     ...createKeyboardInput,
    //     keyboardFeatures: {
    //       ...createKeyboardInput.keyboardFeatures,
    //       switch: [...(createKeyboardInput.keyboardFeatures as any).switch, e.target.value],
    //     },
    //   });
    // }
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
        <select
          className="selectColor"
          name={'color'}
          onChange={handleKeyboardSelectFeature}
          multiple
          value={createKeyboardInput.keyboardFeatures?.color}
        >
          <option value={'default'}>Colors</option>
          {keyboardColors.map((keyboardColor: string, index) => {
            return <option key={index}>{keyboardColor}</option>;
          })}
        </select>
        <select
          className="selectSwitch"
          name={'switch'}
          onChange={handleKeyboardSelectFeature}
          multiple
          value={createKeyboardInput.keyboardFeatures?.switch}
        >
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
