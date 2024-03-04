import React, { useState } from 'react';
import * as Styles from './UpdateSwitch.styled';
import { IImageInfoStateType, ISwitchInputStateType } from '../create/CreateSwitch.interface';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';
import { getUuid } from '../../../../../util/uuid';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { IProduct } from '../../../../../type/product.interface';

interface IUpdateSwitchProps {
  selectedSwitch: IProduct;
  closeModal: () => void;
  handleShowSwitch: () => void;
}

const UpdateSwitch = ({ selectedSwitch, closeModal, handleShowSwitch }: IUpdateSwitchProps) => {
  console.log(selectedSwitch);
  const [updateSwitchInput, setUpdateSwitchInput] = useState<ISwitchInputStateType>({
    switchId: selectedSwitch.id,
    switchName: selectedSwitch.name,
    switchDesc: selectedSwitch.desc,
    switchPrice: selectedSwitch.price,
    switchDiscountRate: selectedSwitch.discountRate,
    switchStock: selectedSwitch.stock,
    switchImageUrl: selectedSwitch.imageUrl,
    switchImagePath: selectedSwitch.imagePath,
    switchFeatures: {
      color: selectedSwitch.features.color,
    },
  });

  const [imageInfo, setImageInfo] = useState<IImageInfoStateType>({
    imageFile: null,
    imagePath: '',
  });

  const handleSwitchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateSwitchInput({
      ...updateSwitchInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitchSelectFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdateSwitchInput({
      ...updateSwitchInput,
      switchFeatures: {
        ...updateSwitchInput.switchFeatures,
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

  const handleUpdateSwitch = async () => {
    if (imageInfo.imageFile && updateSwitchInput.switchImagePath) {
      console.log('수정할 이미지가 있다.');
      // delete
      const storage = getStorage();
      const deleteRef = ref(storage, updateSwitchInput.switchImagePath);
      try {
        await deleteObject(deleteRef);
        console.log('이미지 삭제 완료');
      } catch (err) {
        console.log(err);
      }

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

      const response = await fetch('http://localhost:8070/api/switch/updateSwitch', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...updateSwitchInput,
          switchImageUrl: uploadedImageUrl,
          switchImagePath: imageInfo.imagePath,
        }),
      });

      const result = await response.json();
      console.log(result);
      closeModal();
      handleShowSwitch();
      return;
    }

    console.log('이미지 수정 안됨');
    const response = await fetch('http://localhost:8070/api/switch/updateSwitch', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateSwitchInput),
    });
    const result = await response.json();
    console.log(result);
    closeModal();
    handleShowSwitch();
  };

  return (
    <Styles.UpdateSwitch>
      <div>
        <div className="inputMain">
          <div className="switchName">
            <div className="titleName">Name</div>
            <input
              className="inputName"
              name="switchName"
              value={updateSwitchInput.switchName}
              onChange={handleSwitchInput}
              placeholder="switchName"
            />
          </div>
          <div className="switchName">
            <div className="titleName">Desc</div>
            <input
              className="inputName"
              name="switchDesc"
              value={updateSwitchInput.switchDesc}
              onChange={handleSwitchInput}
              placeholder="switchDesc"
            />
          </div>
          <div className="switchName">
            <div className="titleName">Price</div>
            <input
              className="inputName"
              type="number"
              name="switchPrice"
              value={updateSwitchInput.switchPrice}
              onChange={handleSwitchInput}
              placeholder="switchPrice"
            />
          </div>
          <div className="switchName">
            <div className="titleName">Stock</div>
            <input
              className="inputName"
              type="number"
              name="switchStock"
              value={updateSwitchInput.switchStock}
              onChange={handleSwitchInput}
              placeholder="switchStock"
            />
          </div>
          <div className="switchName">
            <div className="titleName">Discount Rate (0.1 = 10%)</div>
            <input
              className="inputName"
              type="number"
              name="switchDiscountRate"
              value={updateSwitchInput.switchDiscountRate}
              onChange={handleSwitchInput}
              placeholder="switchDiscountRate"
            />
          </div>
          <select
            className="selectInput"
            name={'color'}
            onChange={handleSwitchSelectFeature}
            value={updateSwitchInput.switchFeatures.color}
          >
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Brown</option>
            <option>Black</option>
          </select>
          {imageInfo.imageFile ? (
            <div></div>
          ) : (
            <div className="switchImageMain">
              <img className="switchImageUrl" src={updateSwitchInput.switchImageUrl} />
            </div>
          )}

          <FireBaseUpload handleImageUrl={handleImageUrl} />
        </div>
        <div className="switchBtnMain">
          <div className="switchBtnSub">
            <button className="switchUpdateBtn" onClick={handleUpdateSwitch}>
              Update
            </button>
            <button className="switchDeleteBtn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Styles.UpdateSwitch>
  );
};

export default UpdateSwitch;
