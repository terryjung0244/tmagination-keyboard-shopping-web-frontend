import { IProduct } from '../../../../../type/product.interface';

export interface IKeycapInputState {
  keycapId: string;
  keycapName: string;
  keycapDesc: string;
  keycapPrice: string | number;
  keycapDiscountRate: string;
  keycapStock: string;
  keycapImageUrl: string;
  keycapImagePath: string;
  keycapFeatures?: {
    color?: string;
  };
}

export interface IUpdateKeycapProps {
  closeUpdateModal: () => void;
  selectedKeycapInfo: IProduct;
  handleSearchKeycap: () => void;
}
