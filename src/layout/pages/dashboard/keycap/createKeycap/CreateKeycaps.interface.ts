export interface IKeycapInputStateType {
  keycapId: string;
  keycapName: string;
  keycapDesc: string;
  keycapPrice?: string;
  keycapDiscountRate?: string;
  keycapStock?: string;
  keycapImageUrl?: string;
  keycapImagePath?: string;
  keycapFeatures: {
    color?: string[];
  };
}

export interface IKeycapImageInfoStateType {
  imageFile: File | null;
  imagePath: string;
}
