import React, { useState } from 'react';
import { ISwitch } from '../../../switches/Switches.interface';
import { IImageInfoStateType, ISwitchInputStateType } from '../create/CreateSwitch.interface';
import FireBaseUpload from '../../../../../components/FireBaseUpload';
import { getUuid } from '../../../../../util/uuid';

interface IUpdateSwitchProps {
  selectedSwitch: ISwitch;
}

const UpdateSwitch = ({ selectedSwitch }: IUpdateSwitchProps) => {
  console.log(selectedSwitch);
  const [updateSwitchInput, setUpdateSwitchInput] = useState<ISwitchInputStateType>({
    switchId: selectedSwitch.switchId,
    switchName: selectedSwitch.switchName,
    switchDesc: selectedSwitch.switchDesc,
    switchPrice: selectedSwitch.switchPrice,
    switchDiscountRate: selectedSwitch.switchDiscountRate,
    switchStock: selectedSwitch.switchStock,
    switchImageUrl: selectedSwitch.switchImageUrl,
    switchImagePath: selectedSwitch.switchImagePath,
    switchFeatures: {
      color: selectedSwitch.switchFeatures.color,
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
    // imagePath & file
  };

  // 업데이트할 이미지 넣었으면, 기존 이미지 UI에서 안보이게
  // 기존 이미지 지워라 (Storage에 있는 것) (DB에 imageUrl은 overwrite하면 됨)

  console.log(imageInfo);

  return (
    <div>
      <input
        name="switchName"
        value={updateSwitchInput.switchName}
        onChange={handleSwitchInput}
        placeholder="switchName"
      />
      <input
        name="switchDesc"
        value={updateSwitchInput.switchDesc}
        onChange={handleSwitchInput}
        placeholder="switchDesc"
      />
      <input
        type="number"
        name="switchPrice"
        value={updateSwitchInput.switchPrice}
        onChange={handleSwitchInput}
        placeholder="switchPrice"
      />
      <input
        type="number"
        name="switchStock"
        value={updateSwitchInput.switchStock}
        onChange={handleSwitchInput}
        placeholder="switchStock"
      />
      <input
        type="number"
        name="switchDiscountRate"
        value={updateSwitchInput.switchDiscountRate}
        onChange={handleSwitchInput}
        placeholder="switchDiscountRate"
      />
      <br />
      <select
        name={'color'}
        onChange={handleSwitchSelectFeature}
        value={updateSwitchInput.switchFeatures.color}
      >
        <option>red</option>
        <option>blue</option>
        <option>yellow</option>
        <option>brown</option>
      </select>

      <img src={updateSwitchInput.switchImageUrl} style={{ width: '100px', height: '100px' }} />
      <FireBaseUpload handleImageUrl={handleImageUrl} />
    </div>
  );
};

export default UpdateSwitch;
