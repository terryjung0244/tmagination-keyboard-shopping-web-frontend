import {
  IKeycapImageInfoStateType,
  IKeycapInputStateType,
} from '../../../layout/pages/dashboard/keycap/createKeycap/CreateKeycaps.interface';
import { IProduct } from '../../../type/product.interface';

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

export const deleteKeycapAPI = async (keycap: IProduct) => {
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
