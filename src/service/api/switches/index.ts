import {
  IImageInfoStateType,
  ISwitchInputStateType,
} from '../../../layout/pages/dashboard/switch/create/CreateSwitch.interface';
import { IProduct } from '../../../type/product.interface';

export const getAllSwitchesAPI = async () => {
  const response = await fetch('http://localhost:8070/api/switch/getAllSwitches', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};

export const createSwitchesAPI = async (
  createSwitchInput: ISwitchInputStateType,
  uploadedImageUrl: string,
  imageInfo: IImageInfoStateType,
) => {
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
  return result;
};

export const deleteSwitchesAPI = async (selectedSwitch: IProduct) => {
  await fetch(
    `http://localhost:8070/api/switch/deleteSwitch?selectedSwitchId=${selectedSwitch.id}&selectedSwitchName=${selectedSwitch.name}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
