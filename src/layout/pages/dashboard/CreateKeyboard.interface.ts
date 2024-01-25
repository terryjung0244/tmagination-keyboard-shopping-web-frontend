export interface IKeyboardInputStateType {
  keyboardName: string;
  keyboardDesc: string;
  keyboardPrice: string;
  keyboardDiscountRate: number;
  keyboardStock: string;
  keyboardFeatures: {
    color: string;
    switch: string;
  };
  keyboardImageUrl: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  keyboardUploadImage: any;
}

export interface IImageInfoStateType {
  imageFile: File | null;
  imagePath: string;
}
