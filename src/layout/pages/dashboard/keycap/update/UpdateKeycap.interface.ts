import { IProduct } from '../../../../../type/product.interface';

export interface IKeycapInputState {
  keycapId: string;
  keycapName: string;
  keycapDesc: string;
  keycapPrice: string;
  keycapDiscountRate: string;
  keycapStock: string;
  keycapImageUrl: string;
  keycapImagePath: string;
  keycapFeatures: {
    color: string;
  };
}

export interface IUpdateKeycapProps {
  closeUpdateModal: () => void;
  handleUpdateKeycap: () => void;
  selectedKeycapInfo: IProduct;
}
