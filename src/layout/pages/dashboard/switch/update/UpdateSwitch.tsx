import React, { useState } from 'react';
import * as Styles from './UpdateSwitch.styled';
import { IImageInfoStateType, ISwitchInputStateType } from '../create/CreateSwitch.interface';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';
import { getUuid } from '../../../../../util/uuid';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { IProduct } from '../../../../../type/product.interface';
import { updateSwitchImageAPI, updateSwitchInputAPI } from '../../../../../service/api/switches';

interface IUpdateSwitchProps {
  selectedSwitch: IProduct;
  closeModal: () => void;
  handleShowSwitch: () => void;
}

const UpdateSwitch = ({ selectedSwitch, closeModal, handleShowSwitch }: IUpdateSwitchProps) => {
  const [updateSwitchInput, setUpdateSwitchInput] = useState<ISwitchInputStateType>({
    switchId: selectedSwitch.id,
    switchName: selectedSwitch.name,
    switchDesc: selectedSwitch.desc,
    switchPrice: selectedSwitch.price,
    switchDiscountRate: selectedSwitch.discountRate,
    switchStock: selectedSwitch.stock,
    switchImageUrl: selectedSwitch.imageUrl,
    switchImagePath: selectedSwitch.imagePath,
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

  const handleImageUrl = (file: File) => {
    const fileName = file.name.split('.')[0];
    const imagePath = `tmKeyboards/switch/${fileName}_${getUuid()}`;
    setImageInfo({ ...imageInfo, imageFile: file, imagePath: imagePath });
  };

  const handleUpdateSwitch = async () => {
    if (imageInfo.imageFile && updateSwitchInput.switchImagePath) {
      // delete
      const storage = getStorage();
      const deleteRef = ref(storage, updateSwitchInput.switchImagePath);
      try {
        await deleteObject(deleteRef);
      } catch (err) {
        console.log(err);
      }

      let uploadedImageUrl = '';
      try {
        const imageRef = ref(storage, imageInfo.imagePath);
        const uploadResponse = await uploadBytes(imageRef, imageInfo.imageFile);

        if (uploadResponse) {
          uploadedImageUrl = await getDownloadURL(uploadResponse.ref);
        }
      } catch (err) {
        console.log(err);
      }

      await updateSwitchImageAPI(updateSwitchInput, uploadedImageUrl, imageInfo);
      closeModal();
      handleShowSwitch();
      return;
    }

    await updateSwitchInputAPI(updateSwitchInput);
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
          {/* <select
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
          </select> */}
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
