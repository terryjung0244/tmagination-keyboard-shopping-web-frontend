import {
  IKeycapImageInfoStateType,
  IKeycapInputStateType,
} from '../../../layout/pages/dashboard/keycap/createKeycap/CreateKeycaps.interface';
import { IKeycapInputState } from '../../../layout/pages/dashboard/keycap/update/UpdateKeycap.interface';
import { IImageInfoStateType } from '../../../layout/pages/dashboard/switch/create/CreateSwitch.interface';
import { IProduct } from '../../../type/product.interface';

// GET All Keycaps
export const getAllKeycapsAPI = async () => {
  const response = await fetch('http://localhost:8070/api/keycap/getAllKeycaps', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};

// Create Keycaps
export const createKeycapsAPI = async (
  createNewKeycapInput: IKeycapInputStateType,
  uploadedImageUrl: string,
  imageInfo: IKeycapImageInfoStateType,
) => {
  const response = await fetch('http://localhost:8070/api/keycap/createKeycap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...createNewKeycapInput,
      uploadedImageUrl, // 한개로 uploadedImageUrl로 사용가능
      uploadedImagePath: imageInfo.imagePath,
    }),
  });
  const result = await response.json();
  return result;
};

// Delete Keycaps
export const deleteKeycapAPI = async (keycap: IProduct) => {
  console.log(keycap);
  await fetch(
    `http://localhost:8070/api/keycap/deleteKeycap?keycapId=${keycap.id}&keycapName=${keycap.name}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

// Search Keycaps
export const searchKeycapAPI = async (searchInput: string) => {
  const response = await fetch(
    `http://localhost:8070/api/keycap/searchKeycaps?searchInput=${searchInput}`,
  );
  const result = await response.json();
  return result;
};

// Update Keycap Image
export const updateKeycapImageAPI = async (
  updateKeycapInput: IKeycapInputState,
  uploadedImageUrl: string,
  imageInfo: IImageInfoStateType,
) => {
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
  return result;
};

// Update Keycap Input
export const updateKeycapInputAPI = async (updateKeycapInput: IKeycapInputState) => {
  const response = await fetch('http://localhost:8070/api/keycap/updateKeycap', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateKeycapInput),
  });
  const result = await response.json();
  return result;
};
