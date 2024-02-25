/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ISwitch } from '../../../switches/Switches.interface';
import { IImageInfoStateType, ISwitchInputStateType } from '../create/CreateSwitch.interface';
import FireBaseUpload from '../../../../../components/fireBaseUpload/FireBaseUpload';
import { getUuid } from '../../../../../util/uuid';
import { Button } from 'react-bootstrap';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

interface IUpdateSwitchProps {
  selectedSwitch: ISwitch;
  closeModal: () => void;
  handleShowSwitch: () => void;
}

const UpdateSwitch = ({ selectedSwitch, closeModal, handleShowSwitch }: IUpdateSwitchProps) => {
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
    <div style={{ padding: '50px 20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        [[Switch Name]]
        <input
          name="switchName"
          value={updateSwitchInput.switchName}
          onChange={handleSwitchInput}
          placeholder="switchName"
        />
      </div>
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
      {imageInfo.imageFile ? (
        <div></div>
      ) : (
        <img src={updateSwitchInput.switchImageUrl} style={{ width: '100px', height: '100px' }} />
      )}

      <FireBaseUpload handleImageUrl={handleImageUrl} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
        <Button variant="danger" onClick={handleUpdateSwitch} style={{ width: '100px' }}>
          Update
        </Button>
        <Button
          variant="secondary"
          style={{ width: '100px', marginLeft: '10px' }}
          onClick={closeModal}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default UpdateSwitch;
