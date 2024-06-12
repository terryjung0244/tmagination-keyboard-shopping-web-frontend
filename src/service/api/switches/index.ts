import {
  IImageInfoStateType,
  ISwitchInputStateType,
} from '../../../layout/pages/dashboard/switch/create/CreateSwitch.interface';
import { IProduct } from '../../../type/product.interface';

// Get All Switches
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

// Create Switches
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

// Delete Switches
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

// Search Switches
export const searchSwitchesAPI = async (searchInput: string) => {
  const response = await fetch(
    `http://localhost:8070/api/switch/searchSwitches?searchInput=${searchInput}`,
  );

  const result = await response.json();
  return result;
};

// Update Switch Image
export const updateSwitchImageAPI = async (
  updateSwitchInput: ISwitchInputStateType,
  uploadedImageUrl: string,
  imageInfo: IImageInfoStateType,
) => {
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
  return result;
};

// Update Switch Input
export const updateSwitchInputAPI = async (updateSwitchInput: ISwitchInputStateType) => {
  const response = await fetch('http://localhost:8070/api/switch/updateSwitch', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateSwitchInput),
  });
  const result = await response.json();
  return result;
};
