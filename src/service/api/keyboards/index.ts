import {
  IImageInfoStateType,
  IKeyboardInputStateType,
} from '../../../layout/pages/dashboard/keyboard/create/CreateKeyboard.interface';

// Get All Keyboards
export const getAllKeyboardsAPI = async () => {
  const response = await fetch('http://localhost:8070/api/keyboard/getAllKeyboards', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};

// Create Keyboard
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

// Delete Keyboard
export const deleteKeyboardAPI = async (keyboardId: string) => {
  await fetch(`http://localhost:8070/api/keyboard/deleteKeyboard?keyboardId=${keyboardId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Search Keyboard
export const searchKeyboardAPI = async (keyboardInfo: string) => {
  const response = await fetch(
    `http://localhost:8070/api/keyboard/searchKeyboards?keyboardInfo=${keyboardInfo}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const result = await response.json();
  return result;
};

// Update Keyboard Image
export const updateKeyboardImageAPI = async (
  updateKeyboardInput: IKeyboardInputStateType,
  uploadedImageUrl: string,
  imageInfo: IImageInfoStateType,
) => {
  const response = await fetch('http://localhost:8070/api/keyboard/updateKeyboard', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...updateKeyboardInput,
      keyboardImageUrl: uploadedImageUrl,
      keyboardImagePath: imageInfo.imagePath,
    }),
  });

  const result = await response.json();
  return result;
};

// Update Keyboard Input
export const updateKeyboardInputAPI = async (updateKeyboardInput: IKeyboardInputStateType) => {
  const response = await fetch('http://localhost:8070/api/keyboard/updateKeyboard', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateKeyboardInput),
  });
  const result = await response.json();
  return result;
};
