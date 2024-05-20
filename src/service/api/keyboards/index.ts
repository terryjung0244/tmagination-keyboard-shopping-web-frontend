import {
  IImageInfoStateType,
  IKeyboardInputStateType,
} from '../../../layout/pages/dashboard/keyboard/create/CreateKeyboard.interface';

export const getAllKeyboardsAPI = async () => {
  const response = await fetch('http://localhost:8070/api/keyboard/getAllKeyboards', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};

export const createKeyboardAPI = async (
  createKeyboardInput: IKeyboardInputStateType,
  uploadedImageUrl: string,
  imageInfo: IImageInfoStateType,
) => {
  const response = await fetch('http://localhost:8070/api/keyboard/createKeyboard', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      ...createKeyboardInput,
      uploadedImageUrl,
      uploadedImagePath: imageInfo.imagePath,
    }),
  });
  const result = await response.json();
  return result;
};
