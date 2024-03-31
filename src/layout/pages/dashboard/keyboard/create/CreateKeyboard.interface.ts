export interface IKeyboardInputStateType {
  keyboardId: string;
  keyboardName: string;
  keyboardDesc: string;
  keyboardPrice: string;
  keyboardDiscountRate: string;
  keyboardStock: string;
  keyboardImageUrl: string;
  keyboardImagePath: string;
  keyboardFeatures?: {
    color?: string[];
    switch?: string[];
  };
}

export interface IImageInfoStateType {
  imageFile: File | null;
  imagePath: string;
}
