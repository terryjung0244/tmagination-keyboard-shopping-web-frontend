export interface IKeyboardInputStateType {
  keyboardName: string;
  keyboardDesc: string;
  keyboardPrice: string;
  keyboardDiscountRate: string;
  keyboardStock: string;
  keyboardFeatures: {
    color: string;
    switch: string;
  };
}

export interface IImageInfoStateType {
  imageFile: File | null;
  imagePath: string;
}
