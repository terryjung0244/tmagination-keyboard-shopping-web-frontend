export interface ISwitchInputStateType {
  switchId: string;
  switchName: string;
  switchDesc: string;
  switchPrice?: string;
  switchDiscountRate?: string;
  switchStock?: string;
  switchImageUrl?: string;
  switchImagePath?: string;
  switchFeatures: {
    color?: string;
  };
}

export interface IImageInfoStateType {
  imageFile: File | null;
  imagePath: string;
}
