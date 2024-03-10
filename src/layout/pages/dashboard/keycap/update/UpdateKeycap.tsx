import React, { useState } from 'react';
import * as Styles from './UpdateKeycap.styled';
import { IKeycapInputState, IUpdateKeycapProps } from './UpdateKeycap.interface';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';
import { IImageInfoStateType } from '../../switch/create/CreateSwitch.interface';
import { getUuid } from '../../../../../util/uuid';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const UpdateKeycap = ({
  closeUpdateModal,
  selectedKeycapInfo,
  handleSearchKeycap,
}: IUpdateKeycapProps) => {
  const [imageInfo, setImageInfo] = useState<IImageInfoStateType>({
    imageFile: null,
    imagePath: '',
  });
  const [updateKeycapInput, setUpdateKeycapInput] = useState<IKeycapInputState>({
    keycapId: selectedKeycapInfo.id,
    keycapName: selectedKeycapInfo.name,
    keycapDesc: selectedKeycapInfo.desc,
    keycapPrice: selectedKeycapInfo.price,
    keycapDiscountRate: selectedKeycapInfo.discountRate,
    keycapStock: selectedKeycapInfo.stock,
    keycapImageUrl: selectedKeycapInfo.imageUrl,
    keycapImagePath: selectedKeycapInfo.imagePath,
    keycapFeatures: {
      color: selectedKeycapInfo.features.color,
    },
  });

  const handleKeycapInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateKeycapInput({ ...updateKeycapInput, [e.target.name]: e.target.value });
  };

  const handleSelectColorInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdateKeycapInput({
      ...updateKeycapInput,
      keycapFeatures: {
        ...updateKeycapInput.keycapFeatures,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleImageUrl = (file: File) => {
    const fileName = file.name.split('.')[0]; // purple.webp에서 .webp을 뺀부분
    const imagePath = `tmKeyboards/keycap/${fileName}_${getUuid()}`;
    setImageInfo({ ...imageInfo, imageFile: file, imagePath: imagePath });
    // imagePath & file
  };

  const handleUpdateKeycap = async () => {
    // 수정할 이미지가 있을때.
    if (imageInfo.imageFile && updateKeycapInput.keycapImagePath) {
      console.log('수정할 이미지가 있다');

      // 기존에 있던 이미지를 지우고, 새로운 사진을 firebase, mongodb and backend
      // FireBase
      const storage = getStorage();
      const deleteRef = ref(storage, updateKeycapInput.keycapImagePath);
      try {
        await deleteObject(deleteRef);
      } catch (err) {
        console.log(err);
      }
      // FireBase에 새로운이미지 넣는 방법.
      let uploadedImageUrl = '';
      try {
        const imageRef = ref(storage, imageInfo.imagePath);
        const uploadResponse = await uploadBytes(imageRef, imageInfo.imageFile);

        if (uploadResponse) {
          uploadedImageUrl = await getDownloadURL(uploadResponse.ref);
          console.log(uploadedImageUrl);
          console.log('이미지 추가 완료');
        }
      } catch (err) {
        console.log(err);
      }

      // Backend에 보내기
      const response = await fetch('http://localhost:8070/api/keycap/updateKeycap', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...updateKeycapInput,
          keycapImageUrl: uploadedImageUrl,
          keycapImagePath: imageInfo.imagePath,
        }),
      });

      const result = await response.json();
      console.log(result);
      closeUpdateModal();
      handleSearchKeycap();
      return;
    }

    console.log('이미지 수정 안됨');
    const response = await fetch('http://localhost:8070/api/keycap/updateKeycap', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateKeycapInput),
    });
    const result = await response.json();
    console.log(result);
    closeUpdateModal();
    handleSearchKeycap();
  };

  return (
    <Styles.UpdateKeycap>
      <div>
        <div className="inputMain">
          <div className="keycapName">
            <div className="titleName">Name</div>
            <input
              className="inputName"
              name="keycapName"
              value={updateKeycapInput.keycapName}
              onChange={handleKeycapInput}
              placeholder="switchName"
            />
          </div>
          <div className="keycapName">
            <div className="titleName">Desc</div>
            <input
              className="inputName"
              name="keycapDesc"
              value={updateKeycapInput.keycapDesc}
              onChange={handleKeycapInput}
              placeholder="switchDesc"
            />
          </div>
          <div className="keycapName">
            <div className="titleName">Price</div>
            <input
              className="inputName"
              type="number"
              name="keycapPrice"
              value={updateKeycapInput.keycapPrice}
              onChange={handleKeycapInput}
              placeholder="switchPrice"
            />
          </div>
          <div className="keycapName">
            <div className="titleName">Stock</div>
            <input
              className="inputName"
              type="number"
              name="keycapStock"
              value={updateKeycapInput.keycapStock}
              onChange={handleKeycapInput}
              placeholder="switchStock"
            />
          </div>
          <div className="keycapName">
            <div className="titleName">Discount Rate (0.1 = 10%)</div>
            <input
              className="inputName"
              type="number"
              name="keycapDiscountRate"
              value={updateKeycapInput.keycapDiscountRate}
              onChange={handleKeycapInput}
              placeholder="switchDiscountRate"
            />
          </div>
          <select
            className="selectInput"
            name={'color'}
            onChange={handleSelectColorInput}
            value={updateKeycapInput.keycapFeatures.color}
          >
            <option>Beige</option>
            <option>Green</option>
            <option>Mint</option>
            <option>Purple</option>
          </select>
          {imageInfo.imageFile ? (
            <div></div>
          ) : (
            <div className="keycapImageMain">
              <img className="keycapImageUrl" src={updateKeycapInput.keycapImageUrl} />
            </div>
          )}
          <FireBaseUpload handleImageUrl={handleImageUrl} />
        </div>
        <div className="keycapBtnMain">
          <div className="keycapBtnSub">
            <button className="keycapUpdateBtn" onClick={handleUpdateKeycap}>
              Update
            </button>
            <button className="keycapDeleteBtn" onClick={closeUpdateModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Styles.UpdateKeycap>
  );
};

export default UpdateKeycap;
