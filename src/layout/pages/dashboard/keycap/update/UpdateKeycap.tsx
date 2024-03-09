import React, { useState } from 'react';
import * as Styles from './UpdateKeycap.styled';
import { IKeycapInputState, IUpdateKeycapProps } from './UpdateKeycap.interface';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';
import { IImageInfoStateType } from '../../switch/create/CreateSwitch.interface';
import { getUuid } from '../../../../../util/uuid';

const UpdateKeycap = ({
  closeUpdateModal,
  handleUpdateKeycap,
  selectedKeycapInfo,
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

  const handleUpdateSwitch = () => {
    console.log('1');
  };

  console.log(selectedKeycapInfo);

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
            <div className="switchImageMain">
              <img className="switchImageUrl" src={updateKeycapInput.keycapImageUrl} />
            </div>
          )}

          <FireBaseUpload handleImageUrl={handleImageUrl} />
        </div>
        <div className="switchBtnMain">
          <div className="switchBtnSub">
            <button className="switchUpdateBtn" onClick={handleUpdateSwitch}>
              Update
            </button>
            <button className="switchDeleteBtn" onClick={closeUpdateModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Styles.UpdateKeycap>
  );
};

export default UpdateKeycap;
