/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import * as Styles from './UpdateKeyboard.styled';
import { IProduct } from '../../../../../type/product.interface';
import { IImageInfoStateType, IKeyboardInputStateType } from '../create/CreateKeyboard.interface';
import { getUuid } from '../../../../../util/uuid';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';

interface IKeyboardProps {
  closeModal: () => void;
  selectedKeyboard: IProduct;
  handleShowKeyboard: () => void;
}

const UpdateKeyboard = ({ closeModal, selectedKeyboard, handleShowKeyboard }: IKeyboardProps) => {
  // console.log(selectedKeyboard);
  const [updateKeyboardInput, setUpdateKeyboardInput] = useState<IKeyboardInputStateType>({
    keyboardId: selectedKeyboard.id,
    keyboardName: selectedKeyboard.name,
    keyboardDesc: selectedKeyboard.desc,
    keyboardPrice: selectedKeyboard.price,
    keyboardDiscountRate: selectedKeyboard.discountRate,
    keyboardStock: selectedKeyboard.stock,
    keyboardImageUrl: selectedKeyboard.imageUrl,
    keyboardImagePath: selectedKeyboard.imagePath,
    keyboardFeatures: {
      color: selectedKeyboard.features.color,
      switch: selectedKeyboard.features.switch,
    },
  });

  const [imageInfo, setImageInfo] = useState<IImageInfoStateType>({
    imageFile: null,
    imagePath: '',
  });

  const handleKeyboardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateKeyboardInput({
      ...updateKeyboardInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyboardSelectFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdateKeyboardInput({
      ...updateKeyboardInput,
      keyboardFeatures: {
        ...updateKeyboardInput.keyboardFeatures,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleImageUrl = (file: File) => {
    const fileName = file.name.split('.')[0];
    const imagePath = `tmKeyboards/switch/${fileName}_${getUuid()}`;
    setImageInfo({ ...imageInfo, imageFile: file, imagePath: imagePath });
  };

  // 업데이트할 이미지 넣었으면, 기존 이미지 UI에서 안보이게 done!

  // 업데이트 버튼 만들기 done!

  // 기존 이미지 지워라 (Storage에 있는 것) (DB에 imageUrl은 overwrite하면 됨) ????

  // console.log(imageInfo);

  const handleUpdateKeyboard = async () => {
    console.log(updateKeyboardInput);
    if (imageInfo.imageFile && updateKeyboardInput.keyboardImagePath) {
      console.log('수정할 이미지가 있다.');
      // delete
      const storage = getStorage();
      const deleteRef = ref(storage, updateKeyboardInput.keyboardImagePath);
      try {
        await deleteObject(deleteRef);
        console.log('이미지 삭제 완료');
      } catch (err) {
        console.log(err);
      }

      // create
      let uploadedImageUrl = '';
      try {
        const imageRef = ref(storage, imageInfo.imagePath);
        const uploadResponse = await uploadBytes(imageRef, imageInfo.imageFile);

        if (uploadResponse) {
          uploadedImageUrl = await getDownloadURL(uploadResponse.ref);
          console.log('이미지 추가 완료');
        }
      } catch (err) {
        console.log(err);
      }

      const response = await fetch('http://localhost:8070/api/keyboard/updateKeyboard', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...updateKeyboardInput,
          keyboardImageUrl: uploadedImageUrl,
          keyboardImagePath: imageInfo.imagePath,
        }),
      });

      const result = await response.json();
      console.log(result);
      closeModal();
      handleShowKeyboard();
      return;
    }

    console.log('이미지 수정 안됨');
    const response = await fetch('http://localhost:8070/api/keyboard/updateKeyboard', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateKeyboardInput),
    });
    const result = await response.json();
    console.log(result);
    closeModal();
    handleShowKeyboard();
  };

  return (
    <Styles.UpdateKeyboard>
      <div>
        <div className="inputMain">
          <div className="keyboardName">
            <div className="titleName">Name</div>
            <input
              className="inputName"
              name="keyboardName"
              value={updateKeyboardInput.keyboardName}
              onChange={handleKeyboardInput}
              placeholder="keyboardName"
            />
          </div>
          <div className="keyboardName">
            <div className="titleName">Desc</div>
            <input
              className="inputName"
              name="keyboardDesc"
              value={updateKeyboardInput.keyboardDesc}
              onChange={handleKeyboardInput}
              placeholder="keyboardDesc"
            />
          </div>
          <div className="keyboardName">
            <div className="titleName">Price</div>
            <input
              className="inputName"
              type="number"
              name="keyboardPrice"
              value={updateKeyboardInput.keyboardPrice}
              onChange={handleKeyboardInput}
              placeholder="keyboardPrice"
            />
          </div>
          <div className="keyboardName">
            <div className="titleName">Stock</div>
            <input
              className="inputName"
              type="number"
              name="keyboardStock"
              value={updateKeyboardInput.keyboardStock}
              onChange={handleKeyboardInput}
              placeholder="keyboardStock"
            />
          </div>
          <div className="keyboardName">
            <div className="titleName">Discount Rate (0.1 = 10%)</div>
            <input
              className="inputName"
              type="number"
              name="keyboardDiscountRate"
              value={updateKeyboardInput.keyboardDiscountRate}
              onChange={handleKeyboardInput}
              placeholder="keyboardDiscountRate"
            />
          </div>
          <select
            className="selectInput"
            name={'color'}
            onChange={handleKeyboardSelectFeature}
            value={updateKeyboardInput.keyboardFeatures.color}
          >
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Brown</option>
            <option>Black</option>
          </select>
          <select className="selectSwitch" name={'switch'} onChange={handleKeyboardSelectFeature}>
            <option value={'default'}>Switches</option>
            <option>Red Switch</option>
            <option>Black Switch</option>
            <option>Yellow Switch</option>
            <option>Brown Switch</option>
          </select>
          {imageInfo.imageFile ? (
            <div></div>
          ) : (
            <div className="keyboardImageMain">
              <img className="keyboardImageUrl" src={updateKeyboardInput.keyboardImageUrl} />
            </div>
          )}

          <FireBaseUpload handleImageUrl={handleImageUrl} />
        </div>
        <div className="keyboardBtnMain">
          <div className="keyboardBtnSub">
            <button className="keyboardUpdateBtn" onClick={handleUpdateKeyboard}>
              Update
            </button>
            <button className="keyboardDeleteBtn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Styles.UpdateKeyboard>
  );
};

export default UpdateKeyboard;
